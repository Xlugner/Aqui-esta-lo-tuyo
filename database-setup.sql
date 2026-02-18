-- ========================================
-- ECOMMERCE DATABASE SETUP FOR SUPABASE
-- ========================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ========================================
-- CATEGORIES TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- PRODUCTS TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    currency TEXT NOT NULL CHECK (currency IN ('CUP', 'USD')),
    slug TEXT NOT NULL UNIQUE,
    featured BOOLEAN DEFAULT FALSE,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- PRODUCT IMAGES TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS product_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    alt_text TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- STORE CONFIG TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS store_config (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    store_name TEXT NOT NULL,
    description TEXT,
    logo_url TEXT,
    email TEXT,
    phone TEXT,
    whatsapp_number TEXT,
    address TEXT,
    facebook_url TEXT,
    instagram_url TEXT,
    twitter_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- HERO IMAGES TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS hero_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    image_url TEXT NOT NULL,
    alt_text TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    active BOOLEAN DEFAULT TRUE
);

-- ========================================
-- INDEXES FOR BETTER PERFORMANCE
-- ========================================

-- Products indexes
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at);

-- Categories indexes
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);

-- Product images indexes
CREATE INDEX IF NOT EXISTS idx_product_images_product ON product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_product_images_order ON product_images(product_id, order_index);

-- Hero images indexes
CREATE INDEX IF NOT EXISTS idx_hero_images_order ON hero_images(order_index);
CREATE INDEX IF NOT EXISTS idx_hero_images_active ON hero_images(active);

-- ========================================
-- TRIGGERS FOR UPDATED_AT
-- ========================================

-- Function to update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_categories_updated_at 
    BEFORE UPDATE ON categories 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at 
    BEFORE UPDATE ON products 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_store_config_updated_at 
    BEFORE UPDATE ON store_config 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ========================================

-- Enable RLS on all tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_images ENABLE ROW LEVEL SECURITY;

-- Public read access for categories
CREATE POLICY "Categories are viewable by everyone" ON categories
    FOR SELECT USING (true);

-- Public read access for products
CREATE POLICY "Products are viewable by everyone" ON products
    FOR SELECT USING (true);

-- Public read access for product images
CREATE POLICY "Product images are viewable by everyone" ON product_images
    FOR SELECT USING (true);

-- Public read access for store config
CREATE POLICY "Store config is viewable by everyone" ON store_config
    FOR SELECT USING (true);

-- Public read access for hero images
CREATE POLICY "Hero images are viewable by everyone" ON hero_images
    FOR SELECT USING (true);

-- ========================================
-- INITIAL DATA
-- ========================================

-- Insert default store configuration
INSERT INTO store_config (
    store_name,
    description,
    email,
    phone,
    whatsapp_number
) VALUES (
    'Mi Tienda Online',
    'Descripción de tu tienda',
    'contacto@mitienda.com',
    '+34123456789',
    '+34123456789'
) ON CONFLICT DO NOTHING;

-- ========================================
-- STORAGE BUCKETS SETUP
-- ========================================

-- Note: These need to be created via Supabase Dashboard UI:
-- 1. 'products' bucket - for product images
-- 2. 'store' bucket - for logo and hero images

-- Storage policies will be added after bucket creation

-- ========================================
-- SAMPLE DATA (OPTIONAL)
-- ========================================

-- Insert sample categories
INSERT INTO categories (name, slug, description) VALUES
    ('Electrónica', 'electronica', 'Productos electrónicos y gadgets'),
    ('Ropa', 'ropa', 'Prendas de vestir y accesorios'),
    ('Hogar', 'hogar', 'Artículos para el hogar')
ON CONFLICT (slug) DO NOTHING;

-- ========================================
-- VIEWS FOR COMMON QUERIES
-- ========================================

-- View for products with images and categories
CREATE OR REPLACE VIEW products_with_details AS
SELECT 
    p.*,
    c.name as category_name,
    c.slug as category_slug,
    COALESCE(
        json_agg(
            json_build_object(
                'id', pi.id,
                'image_url', pi.image_url,
                'alt_text', pi.alt_text,
                'order_index', pi.order_index
            ) ORDER BY pi.order_index
        ) FILTER (WHERE pi.id IS NOT NULL), 
        '[]'::json
    ) as images
FROM products p
LEFT JOIN categories c ON p.category_id = c.id
LEFT JOIN product_images pi ON p.id = pi.product_id
GROUP BY p.id, c.name, c.slug;

-- ========================================
-- COMPLETION MESSAGE
-- ========================================

-- Database setup completed!
-- Next steps:
-- 1. Create storage buckets via Supabase Dashboard
-- 2. Set up storage policies
-- 3. Test the connection from your application
