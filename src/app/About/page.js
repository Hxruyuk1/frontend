import Image from "next/image";
import styles from '../about.module.css'; 
import starImage from '../../../public/star.png'; 
import zodiacImage from '../../../public/zodiac.png';  

export default function About() {
  return (
    <div className={`container ${styles.aboutContainer}`}>
      <h1 className={`text-center my-5 ${styles.title}`}>About Us</h1>
      <div className="row mb-5">
        <div className="col-md-6">
          <Image src={starImage} alt="Stars" className={`img-fluid rounded mb-3 ${styles.imgFluid}`} />
        </div>
        <div className="col-md-6">
          <h2 className={styles.title}>About Stars</h2>
          <p className={styles.text}>Stars are luminous spheres of plasma held together by their own gravity. They are the building blocks of galaxies and have been a source of fascination for humans for millennia. Stars vary in size, temperature, and color, and they undergo life cycles from formation to possible supernova explosions or transformation into black holes.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 order-md-2">
          <Image src={zodiacImage} alt="Zodiac Signs" className={`img-fluid rounded mb-3 ${styles.imgFluid}`} />
        </div>
        <div className="col-md-6 order-md-1">
          <h2 className={styles.title}>About Zodiac Signs</h2>
          <p className={styles.text}>The zodiac is a belt-shaped region of the sky that extends approximately 8° north or south of the ecliptic, the apparent path of the Sun across the celestial sphere over the course of the year. The paths of the Moon and visible planets also remain close to the ecliptic, so the zodiac is a convenient reference for locating celestial objects. The zodiac is divided into twelve signs, each associated with specific personality traits and astrological characteristics.</p>
        </div>
      </div>
    </div>
  );
}
