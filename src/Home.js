import React, { useState, useEffect } from "react";
import "./Home.css";

export default function () {
  const [images, setImages] = useState([]);
  const url = "https://api.imgur.com/3/gallery/user/rising/0.json";

  const fetchImages = async () => {
    const response = await fetch(url);
    const imageBlob = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImages(imageObjectURL);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-12 text-center my-3 fw-bold">
          Discover more by clicking the images
        </h1>
        <img src={images.id} />
      </div>
    </div>
  );
}
