import React, { useEffect } from "react";
import styles from "./modal.module.css";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ isOpen, onClose, children, modalContentStyle }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.modalContent}`)) {
        onClose && onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} style={{ zIndex: 9999 }}>
      <div className={styles.modal}>
        <div className={`${styles.modalContent} ${modalContentStyle}`}>
          <span className={styles.closeButton} onClick={onClose}>
            <CloseIcon />
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
