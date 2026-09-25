import React, { useEffect, useState } from "react";
import {createPortal} from "react-dom"
import { Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { getShipWreckYear } from "../../support-functions/date-function";
import "./DescriptionPopUp.css";
import Modal from "./Modal";

function DescriptionPopUp({ shipwreck }) {
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let mediaImage = [];
    let mediaVideo = [];

    const mediaList = shipwreck.media || [];

    for (let i = 0; i < mediaList.length; i++) {
      if (mediaList[i].type === "image") {
        mediaImage.push(shipwreck.media[i]);
      } else {
        mediaVideo.push(shipwreck.media[i]);
      }
    }
    setImage(mediaImage);
    setVideo(mediaVideo);
  }, [shipwreck]);

  return (
    <>
      <Popup>
        {image.length > 0 && <img src={image[0].path} alt={image[0].caption} />}
        <div className="heading">
          <p>{shipwreck.type}</p>
        </div>
        <h4>{shipwreck.shipName}</h4>
        <div className="bottom-section">
          <p>
            Year:{" "}
            {shipwreck.sunk ? getShipWreckYear(shipwreck.sunk) : "Unknown"}
          </p>
          <button onClick={() => setIsOpen(true)}>
            Get More Information on {shipwreck.shipName}
          </button>
        </div>
      </Popup>

      {isOpen && createPortal(
        <Modal setOpen={setIsOpen} shipwreck={shipwreck} images={image} videos={video}/>,
        document.body
      )}
    </>
  );
}

export default DescriptionPopUp;
