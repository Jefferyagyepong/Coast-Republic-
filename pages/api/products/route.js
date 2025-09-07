import { NextResponse } from 'next/server';
import productsData from './product.json'
export async function GET() {
    return NextResponse.json(productsData);
}
