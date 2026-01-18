"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Head/Header";
import Faq from "@/components/Footer/Faq";
import ItemsLike from "@/components/Parts/ItemsLike";
import { useCart } from "@/context/CartContext";
import path from "path";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  const products = JSON.parse(fileContents);
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  const products = JSON.parse(fileContents);
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
  };
}

// Remaining code stays untouched.