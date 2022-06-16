import { Fragment} from "react";
import ReactDom from 'react-dom'
import ImageSlider from "./ImageSlider";
import { SliderData } from './SliderImageData';




const Modal = ({ setModal }) => {


 
  return ReactDom.createPortal (
    <Fragment>
    <div onClick={() => setModal(false)} className="modal">    </div>
    <div className="modal-center">
      <div className="modal-content">
        <h1 className="modal-h1"> This is some content in here</h1>

        <p className="modal-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          praesentium numquam nobis sequi tenetur facere obcaecati, sunt eos,
          cumque autem expedita rerum illum iure libero suscipit itaque, non
          totam natus! Alias labore dolorum minus unde deserunt necessitatibus
          dolores tempore quod nobis distinctio, porro natus tempora assumenda
          blanditiis amet ex sint rem quibusdam qui et dolorem vero
        </p>
         <ImageSlider slides={SliderData} />;

      </div>
      </div>

      </Fragment>,document.getElementById("modal")
  );
};

export default Modal;
