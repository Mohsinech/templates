import React from "react";
import styles from "./testimonials.module.css";
import Image from "next/image";
import { testimonials } from "./data";
import { Quote } from "lucide-react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="avis-clients">
      <div className={styles.container}>
        <p>Nos Avis</p>
        <h1>
          Ce que disent nos <span className="text-gray-500">clients</span>
        </h1>
      </div>

      {/* Testimonials List */}
      <Marquee
        speed={50}
        gradient={true}
        gradientWidth={100}
        pauseOnHover={true}
      >
        <div className={styles.testimonialsList}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image
                  src={testimonial.image || "/images/default-avatar.png"}
                  alt={testimonial.name}
                  className="object-cover"
                  fill
                />
                <div className={styles.fallback}>{testimonial.fallback}</div>
              </div>

              <p className={styles.review}>
                <Quote className={styles.icon} />
                {testimonial.review}
              </p>
              <div className={styles.flex}>
                <h3 className={styles.customerName}>{testimonial.name}</h3>
                <p className={styles.profession}>{testimonial.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonials;
