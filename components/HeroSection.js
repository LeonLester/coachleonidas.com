import React from 'react';
import styles from '../styles/Home.module.css';

const HeroSection = () => {

  const scrollToCalendly = () => {
    document.getElementById('calendly-section').scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Transform Your Fitness Journey with Coach Leonidas</h1>
        <p>Unlock your true potential through personalized coaching. Let&apos;s get started today!</p>
        <button className={styles.ctaButton} onClick={scrollToCalendly}>
          Book Your Free Consultation
        </button>
        {/* <a
          href="https://calendly.com/leonidaskaragiannis/30min"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Your Free Consultation
        </a> */}
      </div>
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default HeroSection;
