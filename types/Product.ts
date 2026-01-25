// In ../../types/Product.ts (or wherever ProductVariantWithImages lives)
export interface ProductVariantWithImages {
  id: string | number;
  name: string;
  price: number;
  stock_quantity: number;
  attributes?: Record<string, string | number | boolean>;
  // ... other fields you already have (images, sku, etc.)

  is_default?: boolean;     // ← add this line (optional = safest)
}