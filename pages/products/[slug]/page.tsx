import { getProductBySlug } from '@/lib/products'
import ImageSlider from '@/components/product/ImageSlider'
import VariantSelector from '@/components/product/VariantSelector'
import AddToCartButton from '@/components/product/AddToCartButton'
import { notFound } from 'next/navigation'
import React from 'react'
interface Props { params: { slug: string } }
export default async function ProductPage({ params }: Props) {
 const product = await getProductBySlug(params.slug)
 if (!product) notFound()
 return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
       {/* Images - Your slider request */}
<ImageSlider images={product.images} />
       {/* Product Info */}
<div className="lg:sticky lg:top-8 lg:max-h-screen overflow-y-auto">
<h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
           {product.name}
</h1>
<p className="text-3xl font-bold text-gray-900 mb-4">
           ${product.variants[0]?.price ?? product.base_price}
</p>
<VariantSelector variants={product.variants} />
<AddToCartButton product={product} />
<div className="mt-8 p-6 border rounded-lg">
<h3 className="font-semibold mb-3">Description</h3>
<p className="text-gray-600">{product.description}</p>
</div>
</div>
</div>
</div>
 )
}