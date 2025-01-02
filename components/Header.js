import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {

  const scrollToCalendly = () => {
        document.getElementById('calendly-section').scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Coach Leonidas</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
          <button className={styles.ctaButton} onClick={scrollToCalendly}>
        Book Now
      </button>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
// import React from 'react';
// import styles from '../styles/Header.module.css';

// const Header = () => {
//   const scrollToCalendly = () => {
//     document.getElementById('calendly-section').scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <a href="/">Coach Leonidas</a>
//       </div>
//       <nav>
//         <ul className={styles.navLinks}>
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/testimonials">Testimonials</a>
//           </li>
//         </ul>
//       </nav>

//     </header>
//   );
// };

// export default Header;