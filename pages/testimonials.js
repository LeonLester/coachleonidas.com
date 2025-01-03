import React from 'react';
import styles from '../styles/Testimonials.module.css';
import Image from 'next/image';
import Header from "../components/Header";

const testimonials = [
  {
    name: 'John Doe',
    text: 'Leonidas helped me transform my fitness journey with his personalized coaching!',
    // image: '/path-to-image1.jpg'
  },
  {
    name: 'Jane Smith',
    text: 'With Leonidas\' guidance, I gained strength and confidence I never thought possible.',
    // image: '/path-to-image2.jpg'
  },
  {
    name: 'Mark Johnson',
    text: 'The best online coach I have worked with! Focused, professional, and results-driven.',
    // image: '/path-to-image3.jpg'
  }
];

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Client Testimonials</h1>
      <div className={styles.testimonialList}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            {/* <Image src={testimonial.image} alt={testimonial.name} /> */}
            <p>{testimonial.text}</p>
            <h3>{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
