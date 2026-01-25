import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
 // Category
 const electronics = await prisma.categories.create({
   data: { name: 'Electronics', slug: 'electronics' }
 })
 // Product
 const iphone = await prisma.products.create({
   data: {
     sku: 'IPHONE16',
     name: 'iPhone 16 Pro',
     slug: 'iphone-16-pro',
     category_id: electronics.id,
     base_price: 999.99,
     short_description: 'Latest iPhone with A18 chip',
     stock_quantity: 50,
     is_featured: true
   }
 })
 // Variant
 await prisma.product_variants.create({
   data: {
     product_id: iphone.id,
     sku: 'IPH16P-256',
     name: '256GB Space Black',
     price: 999.99,
     stock_quantity: 25,
     is_default: true,
     attributes: { color: 'Space Black', storage: '256GB' }
   }
 })
 // Image
 await prisma.product_images.create({
   data: {
     product_id: iphone.id,
     url: 'https://example.com/iphone16.jpg',
     alt_text: 'iPhone 16 Pro Space Black',
     is_primary: true,
     width: 800,
     height: 600
   }
 })
 console.log('✅ Seeded 1 product with variants/images')
}
main().finally(() => prisma.$disconnect())