/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly PUBLIC_STORE_NAME: string;
  readonly PUBLIC_STORE_DESCRIPTION: string;
  readonly PUBLIC_STORE_EMAIL: string;
  readonly PUBLIC_STORE_PHONE: string;
  readonly PUBLIC_STORE_LOCATION: string;
  readonly PUBLIC_WHATSAPP_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
