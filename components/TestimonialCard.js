import React from 'react'
import styles from '../styles/Home.module.css'

const TestimonialCard = ({ name, text, image }) => {
  return (
    <div className={styles.testimonialCard}>
      <img src={image} alt={name} />
      <p>"{text}"</p>
      <h3>{name}</h3>
    </div>
  )
}

export default TestimonialCard
