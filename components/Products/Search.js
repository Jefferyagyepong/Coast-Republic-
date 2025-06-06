'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
const products = [
  {
    slug: "Air Force 1 07 black",
    name: "Air Force 1 07 black",
    description: "This is a great product",
    price: 19.99,
    _id: 1,
    image: "/products/force1a.JPG",
    brand: "Nike",
  },
  {
    slug: "Reebok classics",
    name: "Reebok classics",
    description: "This is a great product",
    price: 19.99,
    _id: 2,
    image: "/products/reebook1c.JPG",
    brand: "Nike",
  },
  {
    slug: "Air Force 1 07 high black",
    name: "Air Force 1 07 high black",
    description: "This is a great product",
    _id: 3,
    image: "/products/force3a.JPG",
    price: 130.0,
    brand: "Nike",
  },
  {
    slug: " Adidas Campus",
    name: " Adidas Campus",
    description: "This is a great product.",
    _id: 4,
    image: "/products/campus1a.JPG",
    price: 85.0,
    brand: "Adidas",
  },
  {
    slug: "Converse Chuck Taylor",
    name: "Converse Chuck Taylor",
    description: "This is a great product.",
    _id: 5,
    image: "/products/chuck1a.JPG",
    price: 75.0,
    brand: "Converse",
  },
  {
    slug: "Timberland Boots",
    name: "Timberland Boots",
    description: "This is a great product.",
    _id: 6,
    image: "/products/tims1a.JPG",
    price: 75.0,
    brand: "Timberland",
  },
  {
    slug: "vans",
    name: "vans",
    description: "This is a great product.",
    _id: 7,
    image: "/products/vans1a.WEBP",
    price: 80.0,
    brand: "Vans",
  },
  {
    slug: "Reebok",
    name: "Reebok",
    description: "This is a great product",
    _id: 8,
    image: "/products/reebook1b.WEBP",
    price: 120.0,
    brand: "Reebok",
  },
];
export default function Search() {
    const [searcTerm, setSearchTer] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    //handle search filtering
    useEffect(() => {
        const filtered = products.filter((product) =>
            product.name.toLocaleLowerCase().includes(searcTerm.toLocaleLowerCase()) ||
            product.description.toLocaleLowerCase().includes(searcTerm.toLocaleLowerCase())
        );
        setFilteredProducts(filtered);

    }, [searcTerm]);
    return (
        <div>
            <input type="search" name="" value={searchTerm} placeholder="search products..." onChange={(e) => setSearchTerm}>
        </div>
    )
}
