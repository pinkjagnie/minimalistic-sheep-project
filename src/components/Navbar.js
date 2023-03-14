import React from 'react';

import { BiLogInCircle } from 'react-icons/bi';
import { GiSheep } from 'react-icons/gi';
import { FiUpload, FiUserPlus } from 'react-icons/fi';

import styles from "../style";

const Navbar = () => {
  return(
    <section className={`fixed left-0 top-0 w-full h-${styles.navbarHeight} z-20 ${styles.basicBackgroundColor} ${styles.basicTextColor}`}>
      <div className="flex justify-around">
        <div className="flex items-center justify-center">
          <GiSheep size={50} className="pr-2" />
          <h1 className={`font-bold text-lg leading-${styles.navbarHeight} pr-[4px]`}>sheep page</h1>
        </div>
        <div className="flex items-center justify-between">
          <FiUpload size={25} className="mr-2 cursor-pointer lg:mr-6" />
          <p className={`hidden lg:visible lg:block lg:mr-4 lg:font-bold lg:border-2 lg:px-4 lg:py-2 lg:rounded cursor-pointer ${styles.hoverBasicBackgroundColor} ${styles.hoverBasicTextColor}`}>Register</p>
          <FiUserPlus size={25} className="mr-2 cursor-pointer lg:hidden" />
          <p className={`hidden lg:visible lg:block lg:mr-4 lg:font-bold lg:border-2 lg:px-4 lg:py-2 lg:rounded cursor-pointer ${styles.hoverBasicBackgroundColor} ${styles.hoverBasicTextColor}`}>Login</p>
          <BiLogInCircle size={25} className="mr-2 cursor-pointer lg:hidden" />
        </div>
      </div>
    </section>
  )
};

export default Navbar;