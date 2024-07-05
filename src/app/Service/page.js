import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faStore, faGlobe } from "@fortawesome/free-solid-svg-icons"; // Icons for delivery, storefront, and online
import Link from "next/link";
import styles from '../service.module.css'; 
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Service() {
    return (
      <div className={`container ${styles.serviceContainer}`}>
        <h1 className="text-center my-5">Our Services</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faTruck} size="3x" className="mb-3" />
                <h5 className="card-title">Delivery Service</h5>
                <p className="card-text">Fast and reliable delivery to your doorstep.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faStore} size="3x" className="mb-3" />
                <h5 className="card-title">Storefront Service</h5>
                <p className="card-text">Visit our physical store for in-person service.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faGlobe} size="3x" className="mb-3" />
                <h5 className="card-title">Online Service</h5>
                <p className="card-text">Access our services from anywhere online.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  