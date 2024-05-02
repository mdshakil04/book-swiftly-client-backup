import React from "react";
import LightGallery from "lightgallery/react";
import img1 from "../../../assets/Images/Barishal/girl-embroidered-dress-is-standing-yard-looking-into-sky.jpg"
import img2 from "../../../assets/Images/Barishal/medium-shot-couple-hiking-together.jpg"
import img3 from "../../../assets/Images/Barishal/shruti-singh-zk1KY3GQEZA-unsplash.jpg"

const Gallery = () => {

  return (
    <div>
      <div className="App b">
        <LightGallery
          onInit={onInit}
          speed={500}
        //   plugins={[lgThumbnail, lgZoom]}
        >
          <a href="img/img1.jpg">
            <img alt="img1" src={img1} />
          </a>
          <a href="img/img2.jpg">
            <img alt="img2" src={img2} />
          </a>
          <a href="img/img2.jpg">
            <img alt="img2" src={img3} />
          </a>
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
