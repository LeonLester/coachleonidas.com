// components/TwoColumnSection.js
import Image from 'next/image';
import styles from '../styles/TwoColumnSection.module.css'; // Import the CSS module

const TwoColumnSection = ({ imageUrl, imageAlt, title, items }) => {
  return (
    <section className={styles.twoColumnSection}>
      <div className={`${styles.column} ${styles.imageColumn}`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={400} // Set the width of the image
          height={20} // Set the height of the image
          layout='responsive'
          className={styles.image}
        />
      </div>
      <div className={`${styles.column} ${styles.textColumn}`}>
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TwoColumnSection;