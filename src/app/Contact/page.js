import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from '../contact.module.css'; 
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Contact() {
  return (
    <div className={`container ${styles.contactContainer}`}>
      <h1 className="text-center my-5">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> 66309010012@cmtc.ac.th</p>
          <p><strong>Phone:</strong> 094 643 6051</p>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <Link href="https://www.facebook.com/profile.php?id=100081143343200">
              <li className="btn btn-outline-primary me-2">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
            </Link>
            <Link href="https://twitter.com">
              <li className="btn btn-outline-primary me-2">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </Link>
            <Link href="https://www.instagram.com/hxru_hhh/">
              <li className="btn btn-outline-primary me-2">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
