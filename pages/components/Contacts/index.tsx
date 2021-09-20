import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedinIn, faGithubAlt, } from "@fortawesome/free-brands-svg-icons";

import styles from "../../../styles/contacts.module.css";

const Contacts: React.FC = () => {
  return (
    <section className={styles.container}>
      <a className={styles.links} href="https://api.whatsapp.com/send?phone=5599987654321" 
        target="_blank" rel="noreferrer"
      > 
        <FontAwesomeIcon className={styles.images} icon={faWhatsapp} color="#333" size={"2x"} />
        <span className={styles.span}>Whatsapp</span>
      </a>
      <a className={styles.links} href="https://www.linkedin.com/in/eduardomoises/"
      target="_blank" rel="noreferrer"
      >
        <FontAwesomeIcon className={styles.images} icon={faLinkedinIn} color="#333" size={"2x"} />
        <span className={styles.span}>Linkedin</span>
      </a>
      <a className={styles.links} href="https://github.com/emoises"
      target="_blank" rel="noreferrer"
      >
        <FontAwesomeIcon className={styles.images} icon={faGithubAlt} color="#333" size={"2x"} />
        <span className={styles.span}>Github</span>
      </a>
    </section>
  );
};

export default Contacts;
