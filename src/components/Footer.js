import React from "react";

import styles from "../style";

const Footer = () => {
  return(
    <section id="footer" className={`flex w-full py-4 ${styles.basicBackgroundColor} ${styles.basicTextColor}`}>
      <p className='w-[80%] text-center text-xs mx-auto'>&copy; 2023 | Designed &amp; build from scratch by SzymonOwca</p>
    </section>
  )
};

export default Footer;