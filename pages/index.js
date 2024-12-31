import React from 'react'
import HeroSection from '../components/HeroSection'
import TestimonialCard from '../components/TestimonialCard'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

const testimonials = [
  {
    name: 'John Doe',
    text: 'Leonidas helped me transform my fitness journey with his personalized coaching!',
    image: '/path-to-image.jpg'
  },
  // Add more testimonials here
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <section className={styles.testimonials}>
        <h2>What Clients Say</h2>
        <div className={styles.testimonialList}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  )
}
