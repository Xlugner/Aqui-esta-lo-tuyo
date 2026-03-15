// Cliente para conectar con Supabase
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============= INTERFACES =============

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  alt_text?: string;
  order_index?: number;
  created_at?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: 'CUP' | 'USD';
  slug: string;
  featured?: boolean;
  category_id?: string;
  created_at: string;
  updated_at: string;
  // Relaciones
  category?: Category;
  images?: ProductImage[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface StoreConfig {
  id: string;
  store_name: string;
  description: string;
  logo_url?: string;
  email: string;
  phone: string;
  whatsapp_number: string;
  address?: string;
  facebook_url?: string;
  instagram_url?: string;
  twitter_url?: string;
}

export interface HeroImage {
  id: string;
  image_url: string;
  alt_text?: string;
  order_index: number;
  active: boolean;
}

export interface HeroSection {
  images: HeroImage[];
}

// ============= PRODUCTOS =============

/**
 * Obtiene todos los productos con sus imágenes y categorías
 */
export async function getProducts(supabaseClient?: any): Promise<Product[]> {
  const client = supabaseClient || supabase;
  console.log('=== DEBUG: getProducts called ===');
  
  // Primero obtener productos
  const { data: productsData, error: productsError } = await client
    .from('products')
    .select(`
      *,
      category:categories(id, name, slug)
    `)
    .order('created_at', { ascending: false });

  if (productsError) {
    console.error('Error fetching products:', productsError);
    return [];
  }

  console.log('Products fetched:', productsData?.length);

  // Luego obtener todas las imágenes
  const { data: imagesData, error: imagesError } = await client
    .from('product_images')
    .select('*');

  console.log('Images query error:', imagesError);
  console.log('Images fetched:', imagesData?.length);

  if (imagesError) {
    console.error('Error fetching product images:', imagesError);
  }

  // Mapear imágenes a productos
  const productsWithImages = productsData?.map(product => {
    const productImages = imagesData?.filter(img => img.product_id === product.id) || [];
    console.log(`Product ${product.id} has ${productImages.length} images`);
    return {
      ...product,
      images: productImages
    };
  }) || [];

  console.log('First product with images:', productsWithImages[0]);

  return productsWithImages;
}

/**
 * Obtiene productos destacados
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  const { data: productsData, error: productsError } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(id, name, slug)
    `)
    .eq('featured', true)
    .order('created_at', { ascending: false });

  if (productsError) {
    console.error('Error fetching featured products:', productsError);
    return [];
  }

  // Obtener todas las imágenes
  const { data: imagesData, error: imagesError } = await supabase
    .from('product_images')
    .select('*');

  if (imagesError) {
    console.error('Error fetching product images:', imagesError);
  }

  // Mapear imágenes a productos
  const productsWithImages = productsData?.map(product => ({
    ...product,
    images: imagesData?.filter(img => img.product_id === product.id) || []
  })) || [];

  return productsWithImages;
}

/**
 * Obtiene un producto por slug
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data: productData, error: productError } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(id, name, slug)
    `)
    .eq('slug', slug)
    .single();

  if (productError) {
    console.error('Error fetching product by slug:', productError);
    return null;
  }

  // Obtener imágenes del producto
  const { data: imagesData, error: imagesError } = await supabase
    .from('product_images')
    .select('*')
    .eq('product_id', productData.id);

  if (imagesError) {
    console.error('Error fetching product images:', imagesError);
  }

  return {
    ...productData,
    images: imagesData || []
  };
}

/**
 * Obtiene un producto por ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(id, name, slug),
      images:product_images(*)
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching product by id:', error);
    return null;
  }

  return data;
}

/**
 * Crea un nuevo producto
 */
export async function createProduct(product: {
  name: string;
  description: string;
  price: number;
  currency: 'CUP' | 'USD';
  slug: string;
  image_url?: string;
  featured?: boolean;
  category_id?: string;
}, supabaseClient?: any): Promise<Product | null> {
  const client = supabaseClient || supabase;
  const { data, error } = await client
    .from('products')
    .insert(product)
    .select()
    .single();

  if (error) {
    console.error('Error creating product:', error);
    return null;
  }

  return data;
}

/**
 * Actualiza un producto existente
 */
export async function updateProduct(id: string, product: Partial<{
  name: string;
  description: string;
  price: number;
  currency: 'CUP' | 'USD';
  slug: string;
  image_url: string;
  featured: boolean;
  category_id: string;
}>, supabaseClient?: any): Promise<Product | null> {
  const client = supabaseClient || supabase;
  const { data, error } = await client
    .from('products')
    .update(product)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating product:', error);
    return null;
  }

  return data;
}

/**
 * Elimina un producto
 */
export async function deleteProduct(id: string, supabaseClient?: any): Promise<boolean> {
  const client = supabaseClient || supabase;
  console.log('=== DEBUG: deleteProduct ===');
  console.log('Product ID:', id);
  console.log('Client type:', supabaseClient ? 'authenticated' : 'default');
  
  // Primero eliminar las imágenes del producto
  await deleteProductImages(id, client);
  
  const { error } = await client
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting product:', error);
    console.error('Error details:', { message: error.message, status: error.status });
    return false;
  }

  console.log('Product deleted successfully');
  return true;
}

// ============= IMÁGENES DE PRODUCTOS =============

/**
 * Agrega imágenes a un producto
 */
export async function addProductImages(
  productId: string,
  images: { image_url: string; alt_text?: string; order_index?: number }[],
  supabaseClient?: any
): Promise<boolean> {
  const client = supabaseClient || supabase;
  console.log('=== DEBUG: addProductImages ===');
  console.log('Product ID:', productId);
  console.log('Images to insert:', images);
  
  const { data, error } = await client
    .from('product_images')
    .insert(
      images.map(img => ({
        product_id: productId,
        image_url: img.image_url,
        alt_text: img.alt_text || '',
        order_index: img.order_index || 0
      }))
    );

  console.log('Resultado insert:', { data, error });

  if (error) {
    console.error('Error adding product images:', error);
    return false;
  }

  return true;
}

/**
 * Elimina todas las imágenes de un producto
 */
export async function deleteProductImages(productId: string, supabaseClient?: any): Promise<boolean> {
  const client = supabaseClient || supabase;
  const { error } = await client
    .from('product_images')
    .delete()
    .eq('product_id', productId);

  if (error) {
    console.error('Error deleting product images:', error);
    return false;
  }

  return true;
}

// ============= CATEGORÍAS =============

/**
 * Obtiene todas las categorías
 */
export async function getCategories(supabaseClient?: any): Promise<Category[]> {
  const client = supabaseClient || supabase;
  const { data, error } = await client
    .from('categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}

/**
 * Obtiene una categoría por slug
 */
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching category by slug:', error);
    return null;
  }

  return data;
}

/**
 * Obtiene productos por categoría
 */
export async function getProductsByCategory(categorySlug: string, supabaseClient?: any): Promise<Product[]> {
  const client = supabaseClient || supabase;
  
  const { data: productsData, error: productsError } = await client
    .from('products')
    .select(`
      *,
      category:categories(id, name, slug)
    `)
    .eq('category.slug', categorySlug)
    .order('created_at', { ascending: false });

  if (productsError) {
    console.error('Error fetching products by category:', productsError);
    return [];
  }

  // Obtener todas las imágenes
  const { data: imagesData, error: imagesError } = await client
    .from('product_images')
    .select('*');

  if (imagesError) {
    console.error('Error fetching product images:', imagesError);
  }

  // Mapear imágenes a productos
  const productsWithImages = productsData?.map(product => ({
    ...product,
    images: imagesData?.filter(img => img.product_id === product.id) || []
  })) || [];

  return productsWithImages;
}

/**
 * Crea una nueva categoría
 */
export async function createCategory(category: {
  name: string;
  slug: string;
  description?: string;
}): Promise<Category | null> {
  const { data, error } = await supabase
    .from('categories')
    .insert(category)
    .select()
    .single();

  if (error) {
    console.error('Error creating category:', error);
    return null;
  }

  return data;
}

/**
 * Actualiza una categoría
 */
export async function updateCategory(id: string, category: Partial<{
  name: string;
  slug: string;
  description: string;
}>): Promise<Category | null> {
  const { data, error } = await supabase
    .from('categories')
    .update(category)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating category:', error);
    return null;
  }

  return data;
}

/**
 * Elimina una categoría
 */
export async function deleteCategory(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting category:', error);
    return false;
  }

  return true;
}

// ============= CONFIGURACIÓN DE LA TIENDA =============

/**
 * Obtiene la configuración de la tienda
 */
export async function getStoreConfig(): Promise<StoreConfig | null> {
  const { data, error } = await supabase
    .from('store_config')
    .select('*')
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
    console.error('Error fetching store config:', error);
    return null;
  }

  return data;
}

/**
 * Actualiza la configuración de la tienda
 */
export async function updateStoreConfig(config: Partial<StoreConfig>): Promise<StoreConfig | null> {
  const { data, error } = await supabase
    .from('store_config')
    .upsert(config)
    .select()
    .single();

  if (error) {
    console.error('Error updating store config:', error);
    return null;
  }

  return data;
}

// ============= HERO SECTION =============

/**
 * Obtiene el contenido de la Hero Section
 */
export async function getHeroSection(supabaseClient?: any): Promise<HeroSection | null> {
  const client = supabaseClient || supabase;
  const { data, error } = await client
    .from('hero_images')
    .select('*')
    .eq('active', true)
    .order('order_index');

  if (error) {
    console.error('Error fetching hero section:', error);
    return null;
  }

  return { images: data || [] };
}

/**
 * Actualiza las imágenes del hero section
 */
export async function updateHeroSection(
  images: Array<{
    image_url: string;
    alt_text?: string;
    order_index?: number;
    active?: boolean;
  }>,
  supabaseClient?: any
): Promise<HeroImage[]> {
  const client = supabaseClient || supabase;
  
  console.log('=== DEBUG: updateHeroSection ===');
  console.log('Images to save:', images);
  console.log('Client type:', supabaseClient ? 'authenticated' : 'default');
  
  try {
    // Primero eliminar todas las imágenes existentes
    console.log('Eliminando imágenes existentes...');
    const { error: deleteError } = await client
      .from('hero_images')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');
    
    if (deleteError) {
      console.error('Error deleting existing images:', deleteError);
    } else {
      console.log('Imágenes existentes eliminadas');
    }

    // Insertar las nuevas imágenes
    console.log('Insertando nuevas imágenes...');
    const { data, error } = await client
      .from('hero_images')
      .insert(images.map(img => ({
        image_url: img.image_url,
        alt_text: img.alt_text,
        order_index: img.order_index || 0,
        active: img.active !== false
      })))
      .select();

    console.log('Insert result:', { data, error });

    if (error) {
      console.error('Error updating hero section:', error);
      return [];
    }

    console.log('Hero section updated successfully, images count:', data?.length);
    return data || [];
  } catch (err) {
    console.error('Unexpected error in updateHeroSection:', err);
    return [];
  }
}

// ============= UTILIDADES =============

/**
 * Obtiene la URL completa de una imagen de Supabase Storage
 */
export function getSupabaseImage(url: string | null | undefined): string {
  if (!url) return '/placeholder.jpg';
  if (url.startsWith('http')) return url;
  
  const storageUrl = `${SUPABASE_URL}/storage/v1/object/public`;
  return `${storageUrl}/${url}`;
}

/**
 * Sube un archivo a Supabase Storage
 */
export async function uploadFile(
  bucket: string,
  path: string,
  file: File,
  supabaseClient?: any
): Promise<string | null> {
  const client = supabaseClient || supabase;
  console.log('=== DEBUG: uploadFile ===');
  console.log('Bucket:', bucket);
  console.log('Path:', path);
  console.log('File:', { name: file.name, size: file.size, type: file.type });
  console.log('Client type:', supabaseClient ? 'authenticated' : 'default');
  
  try {
    const { data, error } = await client.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: true
      });

    console.log('Resultado upload:', { data, error });

    if (error) {
      console.error('Error uploading file:', error);
      console.error('Error details:', { message: error.message, status: error.status });
      return null;
    }

    console.log('File uploaded successfully, path:', data.path);
    return data.path;
  } catch (err) {
    console.error('Exception in uploadFile:', err);
    return null;
  }
}

/**
 * Obtiene la URL pública de un archivo en Supabase Storage
 */
export function getPublicUrl(bucket: string, path: string, supabaseClient?: any): string {
  const client = supabaseClient || supabase;
  const { data } = client.storage
    .from(bucket)
    .getPublicUrl(path);

  return data.publicUrl;
}

/**
 * Elimina un archivo de Supabase Storage
 */
export async function deleteFile(bucket: string, path: string): Promise<boolean> {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path]);

  if (error) {
    console.error('Error deleting file:', error);
    return false;
  }

  return true;
}
