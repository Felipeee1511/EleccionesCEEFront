import React, { useState, useEffect} from "react";
import '../styles/components/modal.css';

const CustomModal = ({onClose, children}) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    onClose();

      };
      const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      };
    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => onClose()}>X</span>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default CustomModal;