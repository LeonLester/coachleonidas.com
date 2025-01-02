import React from 'react'
import HeroSection from '../components/HeroSection'
import TestimonialCard from '../components/TestimonialCard'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import CalendlyEmbed from '../components/CalendlyEmbed'
import Footer from '../components/Footer'
import TwoColumnSection from '../components/TwoColumnSection'


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
        {/* <div className={styles.testimonialList}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div> */}
      <TwoColumnSection imageUrl={'/images/1.jpg'}
        title={'What we will do together.'}
        items={[
          'We have a free 30-minute chat about your current state and goals.',
          'If we decide to work together, I provide you with the detailed program you will be following',
          'We will be in contact daily for your technique review and possible program updates, as well as any questions you might have.'
        ]}

        />
      </section>
      <section id="calendly-section" className={styles.calendly}>
        <h2>Book Your Free Consultation</h2>
        <p>Schedule a 30-minute consultation with Leonidas to discuss your goals.</p>
        <CalendlyEmbed />
      </section>
      <Footer />
    </div>
  )
}
