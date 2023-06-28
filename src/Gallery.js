import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";
import img7 from "./assets/images/7.jpg";
import img8 from "./assets/images/8.jpg";
import img9 from "./assets/images/9.jpg";
import img10 from "./assets/images/10.jpg";
import img11 from "./assets/images/11.jpg";
import img12 from "./assets/images/12.jpg";

import { ImageViewer } from "react-image-viewer-dv";

const Gallery = () => {
  return (
    <div className="inner">
      <ImageViewer>
        <img src={img1} alt="image1" />
        <img src={img2} alt="image2" />
        <img src={img3} alt="image3" />
        <img src={img4} alt="image4" />
        <img src={img5} alt="image5" />
        <img src={img6} alt="image6" />
        <img src={img7} alt="image7" />
        <img src={img8} alt="image8" />
        <img src={img9} alt="image9" />
        <img src={img10} alt="image10" />
        <img src={img11} alt="image11" />
        <img src={img12} alt="image12" />
      </ImageViewer>
    </div>
  );
};

export default Gallery;
