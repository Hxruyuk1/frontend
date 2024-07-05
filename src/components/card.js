import Image from "next/image";
import Card1 from '../../public/card1.png';
import Card2 from '../../public/card2.png';
import Card3 from '../../public/card3.png';
import Card4 from '../../public/card4.png';
import Card5 from '../../public/card5.png';
import Card6 from '../../public/card6.png';
import styles from '../app/card.module.css'; // Import the custom CSS module

export default function Card() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className={`card ${styles.card}`}>
            <Image src={Card1} className={`card-img-top ${styles.cardImgTop}`} alt="Earth" />
            <div className={`card-body ${styles.cardBody}`}>
              <h5 className={`card-title ${styles.cardTitle}`}>Earth</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <Image src={Card2} className={`card-img-top ${styles.cardImgTop}`} alt="Saturn" />
            <div className={`card-body ${styles.cardBody}`}>
              <h5 className={`card-title ${styles.cardTitle}`}>Saturn</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <Image src={Card3} className={`card-img-top ${styles.cardImgTop}`} alt="Mercury" />
            <div className={`card-body ${styles.cardBody}`}>
              <h5 className={`card-title ${styles.cardTitle}`}>Mercury</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <Image src={Card4} className={`card-img-top ${styles.cardImgTop}`} alt="PISCES" />
            <div className={`card-body ${styles.cardBody}`}>
              <h5 className={`card-title ${styles.cardTitle}`}>PISCES</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <Image src={Card5} className={`card-img-top ${styles.cardImgTop}`} alt="TAURUS" />
            <div className={`card-body ${styles.cardBody}`}>
              <h5 className={`card-title ${styles.cardTitle}`}>TAURUS</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.card}`}>
            <Image src={Card6} className={`card-img-top ${styles.cardImgTop}`} alt="SCORPIO" />
            <div className={`card-body ${styles.cardBody}`}>
              <h5 className={`card-title ${styles.cardTitle}`}>SCORPIO</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
