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
  order_index: number;
  created_at: string;
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
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(id, name, slug),
      images:product_images(*)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data || [];
}

/**
 * Obtiene productos destacados
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(id, name, slug),
      images:product_images(*)
    `)
    .eq('featured', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }

  return data || [];
}

/**
 * Obtiene un producto por slug
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(id, name, slug),
      images:product_images(*)
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }

  return data;
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
  featured?: boolean;
  category_id?: string;
}): Promise<Product | null> {
  const { data, error } = await supabase
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
  featured: boolean;
  category_id: string;
}>): Promise<Product | null> {
  const { data, error } = await supabase
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
export async function deleteProduct(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting product:', error);
    return false;
  }

  return true;
}

// ============= IMÁGENES DE PRODUCTOS =============

/**
 * Agrega imágenes a un producto
 */
export async function addProductImages(productId: string, images: Array<{
  image_url: string;
  alt_text?: string;
  order_index?: number;
}>): Promise<ProductImage[]> {
  const imagesWithProduct = images.map((img, index) => ({
    product_id: productId,
    image_url: img.image_url,
    alt_text: img.alt_text,
    order_index: img.order_index || index
  }));

  const { data, error } = await supabase
    .from('product_images')
    .insert(imagesWithProduct)
    .select();

  if (error) {
    console.error('Error adding product images:', error);
    return [];
  }

  return data || [];
}

/**
 * Elimina todas las imágenes de un producto
 */
export async function deleteProductImages(productId: string): Promise<boolean> {
  const { error } = await supabase
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
export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
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
export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(id, name, slug),
      images:product_images(*)
    `)
    .eq('category.slug', categorySlug)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }

  return data || [];
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
export async function getHeroSection(): Promise<HeroSection | null> {
  const { data, error } = await supabase
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
export async function updateHeroSection(images: Array<{
  image_url: string;
  alt_text?: string;
  order_index?: number;
  active?: boolean;
}>): Promise<HeroImage[]> {
  // Primero eliminar todas las imágenes existentes
  await supabase.from('hero_images').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  // Insertar las nuevas imágenes
  const { data, error } = await supabase
    .from('hero_images')
    .insert(images.map(img => ({
      image_url: img.image_url,
      alt_text: img.alt_text,
      order_index: img.order_index || 0,
      active: img.active !== false
    })))
    .select();

  if (error) {
    console.error('Error updating hero section:', error);
    return [];
  }

  return data || [];
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
  file: File
): Promise<string | null> {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: true
    });

  if (error) {
    console.error('Error uploading file:', error);
    return null;
  }

  return data.path;
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
