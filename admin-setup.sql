-- ========================================
-- ADMIN SYSTEM SETUP FOR SUPABASE
-- ========================================

-- ========================================
-- ADMIN USERS TABLE
-- ========================================
-- Esta tabla se vincula con auth.users de Supabase
-- Solo necesitas insertar el id del usuario creado en Auth

CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- RLS POLICIES FOR ADMIN WRITE ACCESS
-- ========================================

-- Habilitar RLS en admin_users
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Los admins pueden ver otros admins
CREATE POLICY "Admins can view admin_users" ON admin_users
    FOR SELECT USING (auth.uid() IN (SELECT id FROM admin_users));

-- ========================================
-- POLÍTICAS PARA PRODUCTS (INSERT/UPDATE/DELETE)
-- ========================================

CREATE POLICY "Admins can insert products" ON products
    FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can update products" ON products
    FOR UPDATE USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can delete products" ON products
    FOR DELETE USING (auth.uid() IN (SELECT id FROM admin_users));

-- ========================================
-- POLÍTICAS PARA CATEGORIES (INSERT/UPDATE/DELETE)
-- ========================================

CREATE POLICY "Admins can insert categories" ON categories
    FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can update categories" ON categories
    FOR UPDATE USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can delete categories" ON categories
    FOR DELETE USING (auth.uid() IN (SELECT id FROM admin_users));

-- ========================================
-- POLÍTICAS PARA PRODUCT_IMAGES (INSERT/UPDATE/DELETE)
-- ========================================

CREATE POLICY "Admins can insert product_images" ON product_images
    FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can update product_images" ON product_images
    FOR UPDATE USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can delete product_images" ON product_images
    FOR DELETE USING (auth.uid() IN (SELECT id FROM admin_users));

-- ========================================
-- POLÍTICAS PARA STORE_CONFIG (INSERT/UPDATE)
-- ========================================

CREATE POLICY "Admins can insert store_config" ON store_config
    FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can update store_config" ON store_config
    FOR UPDATE USING (auth.uid() IN (SELECT id FROM admin_users));

-- ========================================
-- POLÍTICAS PARA HERO_IMAGES (INSERT/UPDATE/DELETE)
-- ========================================

CREATE POLICY "Admins can insert hero_images" ON hero_images
    FOR INSERT WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can update hero_images" ON hero_images
    FOR UPDATE USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admins can delete hero_images" ON hero_images
    FOR DELETE USING (auth.uid() IN (SELECT id FROM admin_users));

-- ========================================
-- INSTRUCCIONES PARA CREAR EL PRIMER ADMIN
-- ========================================

-- 1. Ve a Supabase Dashboard > Authentication > Users
-- 2. Click en "Add user" > "Create new user"
-- 3. Ingresa el email y contraseña del admin
-- 4. Copia el ID del usuario creado
-- 5. Ejecuta este SQL para registrar al admin:

-- INSERT INTO admin_users (id, email, full_name)
-- VALUES ('USER_ID_COPIADO', 'admin@tienda.com', 'Nombre del Admin');

-- ========================================
-- STORAGE POLICIES FOR ADMIN
-- ========================================

-- Políticas para el bucket 'products' (imágenes de productos)
-- NOTA: Ejecutar después de crear el bucket en Supabase Dashboard

-- INSERT INTO storage.buckets (id, name, public)
-- VALUES ('products', 'products', true)
-- ON CONFLICT (id) DO NOTHING;

-- Políticas para subir imágenes
CREATE POLICY "Admins can upload product images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'products' AND
        auth.uid() IN (SELECT id FROM admin_users)
    );

CREATE POLICY "Admins can update product images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'products' AND
        auth.uid() IN (SELECT id FROM admin_users)
    );

CREATE POLICY "Admins can delete product images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'products' AND
        auth.uid() IN (SELECT id FROM admin_users)
    );

-- Políticas para el bucket 'store' (logo, hero images)
CREATE POLICY "Admins can upload store images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'store' AND
        auth.uid() IN (SELECT id FROM admin_users)
    );

CREATE POLICY "Admins can update store images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'store' AND
        auth.uid() IN (SELECT id FROM admin_users)
    );

CREATE POLICY "Admins can delete store images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'store' AND
        auth.uid() IN (SELECT id FROM admin_users)
    );

-- ========================================
-- COMPLETION MESSAGE
-- ========================================

-- Admin system setup completed!
-- Next steps:
-- 1. Create admin user in Supabase Dashboard > Authentication
-- 2. Copy the user ID
-- 3. Insert into admin_users table
-- 4. Test login from /admin/login
