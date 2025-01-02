import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const TestimonialCard = ({ name, text, image }) => {
  return (
    <div className={styles.testimonialCard}>
      <Image src={image} alt={name} />
      <p>"{text}"</p>
      <h3>{name}</h3>
    </div>
  )
}

export default TestimonialCard
