import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const services = [
  {
    title: 'Personalized Coaching',
    description: 'Tailored programs to help you achieve your fitness goals, no matter where you are in your journey.',
    icon: '/path-to-icon.png'
  },
  {
    title: 'Strength Training',
    description: 'Build muscle and strength with structured weight lifting programs.',
    icon: '/path-to-icon.png'
  },
  {
    title: 'Bodybuilding Guidance',
    description: 'Expert guidance to help you achieve your physique goals with a focus on bodybuilding.',
    icon: '/path-to-icon.png'
  }
];

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.servicesList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
          <Image src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
