"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./order.module.css";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface Product {
  id: number;
  title: string;
  img: string;
  price: string;
}

interface OrderPopupProps {
  product: Product | null;
  onClose: () => void;
}

export default function OrderPopup({ product, onClose }: OrderPopupProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!product) return;

    const phoneNumber = "212701148299"; // change this

    const message = `🛒 Nouvelle commande :
Produit: ${product.title}
Prix: ${product.price}
Nom: ${form.name}
Email: ${form.email}
Téléphone: ${form.phone}
Ville: ${form.city}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSuccess(true);
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 }}
          transition={{ duration: 1, ease: [0.65, 0.05, 0, 1] }}
          className={styles.overlay}
        >
          <motion.div
            initial={{
              scale: 0.8,
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            animate={{
              scale: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              transformOrigin: "top center",
            }}
            exit={{
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            transition={{ duration: 0.9, ease: [0.65, 0.05, 0, 1] }}
            className={styles.modal}
          >
            {/* Close Button */}
            <button onClick={onClose} className={styles.closeBtn}>
              <X />
            </button>

            {/* Success State */}
            {success ? (
              <div className={styles.successBox}>
                <h2 className={styles.successTitle}>
                  🎉 Commande envoyée avec succès !{" "}
                </h2>
                <p className={styles.successText}>
                  Nous vous contacterons bientôt sur WhatsApp.{" "}
                </p>
              </div>
            ) : (
              <>
                {/* Left - Product Image */}
                <div className={styles.imageBox}>
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className={styles.image}
                  />
                </div>

                {/* Right - Form */}
                <div className={styles.formBox}>
                  <div className={styles.content}>
                    <div className="overflow-hidden relative">
                      <h2 className={styles.productTitle}>{product.title}</h2>
                    </div>
                    <p className={styles.productPrice}>{product.price}</p>
                  </div>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />

                    <Input
                      type="email"
                      name="email"
                      placeholder="Votre email (optionnel)"
                      value={form.email}
                      onChange={handleChange}
                      className={styles.input}
                    />

                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Numéro de téléphone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />

                    <Input
                      type="text"
                      name="city"
                      placeholder="Ville"
                      value={form.city}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />

                    <Input
                      type="text"
                      name="address"
                      placeholder="Adresse"
                      value={form.address}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />

                    <button type="submit" className={styles.submitBtn}>
                      Envoyer la commande{" "}
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
