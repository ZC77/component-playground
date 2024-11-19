import styles from "./dropdown.module.scss";
import { ChevronDown, CreditCard } from "react-feather";

import { useState } from "react";

export const Dropdown = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className={styles.container} onClick={() => setShowContent((show) => !show)}>
      <button className={`${styles.toggle} ${showContent && styles.active}`}>
        <span className={styles.toggleText}>Select a card</span>
        <ChevronDown className={`${styles.chevron} ${showContent && styles.active}`} />
      </button>

      {showContent && (
        <div className={styles.dropdownContent}>
          <div className={styles.dropdownItem}>
            <CreditCard />
            <div className={styles.cardDetails}>
              <span>Amex</span>
              <span className={styles.cardNumber}>•••• 1234</span>
            </div>
          </div>
          <div className={styles.dropdownItem}>
            <CreditCard />
            <div className={styles.cardDetails}>
              <span>MasterCard</span>
              <span className={styles.cardNumber}>•••• 1234</span>
            </div>
          </div>
          <div className={styles.dropdownItem}>
            <CreditCard />
            <div className={styles.cardDetails}>
              <span>Visa</span>
              <span className={styles.cardNumber}>•••• 1234</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
