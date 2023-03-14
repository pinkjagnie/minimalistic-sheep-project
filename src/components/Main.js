import React from "react";

import styles from "../style";

const Main = () => {
  return(
    <section className={`min-h-screen ${styles.mainBackgroundColor} ${styles.mainTextColor}`}>
      {/* pt-20 poniżej obniża zawartość sekcji poniżej Navbar comp. */}
      <div className="pt-20 px-4"> 
        <h1 className="text-center font-bold text-3xl py-4">Beep, beep, <br/>I am a sheep</h1>
        <div className="w-[90%] pt-4 mx-auto">
          <p>Baranek Shaun, baranek Shaun,</p>
          <p className="pt-2">Ci co nie bacząc według niego robią błąd.</p>
          <p className="pt-2">Pamiętaj więc, jeśli masz chęć</p>
          <p className="pt-2">Rozbawi Cię baranek Shaun.</p>

          <p className="pt-4">Baranek Shaun, baranek Shaun,</p>
          <p className="pt-2">Jego pomysły i twardziela wbiją w kąt.</p>
          <p className="pt-2">I nie mów pass, już wielki czas,</p>
          <p className="pt-2">Zaprasza nas baranek Shaun.</p>
        </div>
      </div>
    </section>
  )
};

export default Main;