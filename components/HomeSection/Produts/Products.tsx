"use client";

import React, { useState } from "react";
import styles from "./products.module.css";
import Image from "next/image";
import { products } from "./data";
import OrderPopup from "./OrderPopup";

// Define the Product type based on your data structure
type Product = {
  id: number;
  title: string;
  img: string;
  price: string;
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className={styles.products} id="nos-produits">
      <div className={styles.container}>
        <h1>Choisissez votre style</h1>
        <p>
          Découvrez notre gamme diversifiée de produits adaptés à vos besoins.
        </p>
      </div>

      {/* Products List */}
      <div className={styles.grid}>
        {products.map((product, i) => (
          <div
            key={i}
            className={styles.card}
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative w-full h-[500px] overflow-hidden group cursor-pointer">
              <Image
                src={product.img}
                fill
                alt={product.title}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className={styles.info}>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      <OrderPopup
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default Products;
