import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://jgyoodhsznqbmxibbszm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpneW9vZGhzem5xYm14aWJic3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxMjg4MjEsImV4cCI6MjA4NTcwNDgyMX0.soArCF06JOmdjBuNENXG8m73K-PfGVvtmueADbIJoc0";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
async function getProducts(supabaseClient) {
  const client = supabaseClient || supabase;
  console.log("=== DEBUG: getProducts called ===");
  const { data: productsData, error: productsError } = await client.from("products").select(`
      *,
      category:categories(id, name, slug)
    `).order("created_at", { ascending: false });
  if (productsError) {
    console.error("Error fetching products:", productsError);
    return [];
  }
  console.log("Products fetched:", productsData?.length);
  const { data: imagesData, error: imagesError } = await client.from("product_images").select("*");
  console.log("Images query error:", imagesError);
  console.log("Images fetched:", imagesData?.length);
  if (imagesError) {
    console.error("Error fetching product images:", imagesError);
  }
  const productsWithImages = productsData?.map((product) => {
    const productImages = imagesData?.filter((img) => img.product_id === product.id) || [];
    console.log(`Product ${product.id} has ${productImages.length} images`);
    return {
      ...product,
      images: productImages
    };
  }) || [];
  console.log("First product with images:", productsWithImages[0]);
  return productsWithImages;
}
async function getFeaturedProducts() {
  const { data: productsData, error: productsError } = await supabase.from("products").select(`
      *,
      category:categories(id, name, slug)
    `).eq("featured", true).order("created_at", { ascending: false });
  if (productsError) {
    console.error("Error fetching featured products:", productsError);
    return [];
  }
  const { data: imagesData, error: imagesError } = await supabase.from("product_images").select("*");
  if (imagesError) {
    console.error("Error fetching product images:", imagesError);
  }
  const productsWithImages = productsData?.map((product) => ({
    ...product,
    images: imagesData?.filter((img) => img.product_id === product.id) || []
  })) || [];
  return productsWithImages;
}
async function getProductById(id) {
  const { data, error } = await supabase.from("products").select(`
      *,
      category:categories(id, name, slug),
      images:product_images(*)
    `).eq("id", id).single();
  if (error) {
    console.error("Error fetching product by id:", error);
    return null;
  }
  return data;
}
async function createProduct(product, supabaseClient) {
  const client = supabaseClient || supabase;
  const { data, error } = await client.from("products").insert(product).select().single();
  if (error) {
    console.error("Error creating product:", error);
    return null;
  }
  return data;
}
async function updateProduct(id, product, supabaseClient) {
  const client = supabaseClient || supabase;
  const { data, error } = await client.from("products").update(product).eq("id", id).select().single();
  if (error) {
    console.error("Error updating product:", error);
    return null;
  }
  return data;
}
async function deleteProduct(id, supabaseClient) {
  const client = supabaseClient || supabase;
  console.log("=== DEBUG: deleteProduct ===");
  console.log("Product ID:", id);
  console.log("Client type:", supabaseClient ? "authenticated" : "default");
  await deleteProductImages(id, client);
  const { error } = await client.from("products").delete().eq("id", id);
  if (error) {
    console.error("Error deleting product:", error);
    console.error("Error details:", { message: error.message, status: error.status });
    return false;
  }
  console.log("Product deleted successfully");
  return true;
}
async function addProductImages(productId, images, supabaseClient) {
  const client = supabaseClient || supabase;
  console.log("=== DEBUG: addProductImages ===");
  console.log("Product ID:", productId);
  console.log("Images to insert:", images);
  const { data, error } = await client.from("product_images").insert(
    images.map((img) => ({
      product_id: productId,
      image_url: img.image_url,
      alt_text: img.alt_text || "",
      order_index: img.order_index || 0
    }))
  );
  console.log("Resultado insert:", { data, error });
  if (error) {
    console.error("Error adding product images:", error);
    return false;
  }
  return true;
}
async function deleteProductImages(productId, supabaseClient) {
  const client = supabaseClient || supabase;
  const { error } = await client.from("product_images").delete().eq("product_id", productId);
  if (error) {
    console.error("Error deleting product images:", error);
    return false;
  }
  return true;
}
async function getCategories(supabaseClient) {
  const client = supabaseClient || supabase;
  const { data, error } = await client.from("categories").select("*").order("name");
  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
  return data || [];
}
async function createCategory(category, supabaseClient) {
  const client = supabaseClient || supabase;
  console.log("🔍 Creating category:", category);
  const { data, error } = await client.from("categories").insert(category).select().single();
  if (error) {
    console.error("❌ Error creating category:", error);
    return null;
  }
  console.log("✅ Category created:", data);
  return data;
}
async function updateCategory(id, category, supabaseClient) {
  const client = supabaseClient || supabase;
  console.log("🔍 Updating category:", id, category);
  const { data, error } = await client.from("categories").update(category).eq("id", id).select().single();
  if (error) {
    console.error("❌ Error updating category:", error);
    return null;
  }
  console.log("✅ Category updated:", data);
  return data;
}
async function deleteCategory(id, supabaseClient) {
  const client = supabaseClient || supabase;
  console.log("🔍 Deleting category:", id);
  const { error } = await client.from("categories").delete().eq("id", id);
  if (error) {
    console.error("❌ Error deleting category:", error);
    return false;
  }
  console.log("✅ Category deleted");
  return true;
}
async function getStoreConfig() {
  const { data, error } = await supabase.from("store_config").select("*").single();
  if (error && error.code !== "PGRST116") {
    console.error("Error fetching store config:", error);
    return null;
  }
  return data;
}
async function updateStoreConfig(config, supabaseClient) {
  const client = supabaseClient || supabase;
  console.log("🔍 Updating store config:", config);
  const { data, error } = await client.from("store_config").upsert(config).select().single();
  if (error) {
    console.error("❌ Error updating store config:", error);
    return null;
  }
  console.log("✅ Store config updated:", data);
  return data;
}
async function getHeroSection(supabaseClient) {
  const client = supabaseClient || supabase;
  const { data, error } = await client.from("hero_images").select("*").eq("active", true).order("order_index");
  if (error) {
    console.error("Error fetching hero section:", error);
    return null;
  }
  return { images: data || [] };
}
async function updateHeroSection(images, supabaseClient) {
  const client = supabaseClient || supabase;
  console.log("=== DEBUG: updateHeroSection ===");
  console.log("Images to save:", images);
  console.log("Client type:", supabaseClient ? "authenticated" : "default");
  try {
    console.log("Eliminando imágenes existentes...");
    const { error: deleteError } = await client.from("hero_images").delete().neq("id", "00000000-0000-0000-0000-000000000000");
    if (deleteError) {
      console.error("Error deleting existing images:", deleteError);
    } else {
      console.log("Imágenes existentes eliminadas");
    }
    console.log("Insertando nuevas imágenes...");
    const { data, error } = await client.from("hero_images").insert(images.map((img) => ({
      image_url: img.image_url,
      alt_text: img.alt_text,
      order_index: img.order_index || 0,
      active: img.active !== false
    }))).select();
    console.log("Insert result:", { data, error });
    if (error) {
      console.error("Error updating hero section:", error);
      return [];
    }
    console.log("Hero section updated successfully, images count:", data?.length);
    return data || [];
  } catch (err) {
    console.error("Unexpected error in updateHeroSection:", err);
    return [];
  }
}
function getSupabaseImage(url) {
  if (!url) return "/placeholder.jpg";
  if (url.startsWith("http")) return url;
  const storageUrl = `${SUPABASE_URL}/storage/v1/object/public`;
  return `${storageUrl}/${url}`;
}
async function uploadFile(bucket, path, file, supabaseClient) {
  const client = supabaseClient || supabase;
  console.log("=== DEBUG: uploadFile ===");
  console.log("Bucket:", bucket);
  console.log("Path:", path);
  console.log("File:", { name: file.name, size: file.size, type: file.type });
  console.log("Client type:", supabaseClient ? "authenticated" : "default");
  try {
    const { data, error } = await client.storage.from(bucket).upload(path, file, {
      cacheControl: "3600",
      upsert: true
    });
    console.log("Resultado upload:", { data, error });
    if (error) {
      console.error("Error uploading file:", error);
      console.error("Error details:", { message: error.message, status: error.status });
      return null;
    }
    console.log("File uploaded successfully, path:", data.path);
    return data.path;
  } catch (err) {
    console.error("Exception in uploadFile:", err);
    return null;
  }
}
function getPublicUrl(bucket, path, supabaseClient) {
  const client = supabaseClient || supabase;
  const { data } = client.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

export { getStoreConfig as a, uploadFile as b, createCategory as c, deleteCategory as d, getPublicUrl as e, updateStoreConfig as f, getCategories as g, getHeroSection as h, updateHeroSection as i, createProduct as j, addProductImages as k, getProductById as l, updateProduct as m, deleteProductImages as n, getProducts as o, deleteProduct as p, getSupabaseImage as q, getFeaturedProducts as r, updateCategory as u };
