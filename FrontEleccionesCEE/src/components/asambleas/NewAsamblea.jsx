import React, {useState} from "react";
import CustomModal from "../CustomModal";
import "../../styles/components/form.css"
const NewAsamblea = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ingresarDatos = () =>  (
        <>
          <form className="form-new-values"> 
            <input className="input-form" type="text" placeholder="Nombre" />
            <input className="input-form" type="date" placeholder="Fecha" />
            <button className="button-form" type="submit">Crear</button>
          </form>
        </>
      );
    ;
    const handleClick = () => {
      setIsModalOpen(true);
    };
    const handleClose = () => {
      setIsModalOpen(false);
  }
    return (
      <>
      <button className="button-desplegar" onClick={handleClick} type="button">Nueva asamblea</button>
      {isModalOpen && <CustomModal onClose={handleClose}>{ingresarDatos()}</CustomModal>}
  </>
    );
  };

export default NewAsamblea;