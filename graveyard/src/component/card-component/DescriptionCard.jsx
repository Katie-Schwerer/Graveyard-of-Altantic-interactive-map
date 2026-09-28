import React, {useState, useEffect} from "react";
import { createPortal } from "react-dom";
import Modal from "../popup-component/Modal";
import { getShipWreckYear } from "../../support-functions/date-function";
import './NormalCard.css'

function DescriptionCard({ shipwreck }) {
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!shipwreck) return;
    let mediaImage = [];
    let mediaVideo = [];

    const mediaList = shipwreck.media || [];

    for (let i = 0; i < mediaList.length; i++) {
      if (mediaList[i]?.type === "image") {
        mediaImage.push(shipwreck.media[i]);
      } else {
        mediaVideo.push(shipwreck.media[i]);
      }
    }
    setImage(mediaImage);
    setVideo(mediaVideo);
  }, [shipwreck]);

  if (!shipwreck) return null;
  return (
    <>
      <div className="ship-card">
        {image.length > 0 && <img src={image[0].path} alt={image[0].caption ? image[0].caption.replace(/<\/?i>/g, "") : `Shipwreck of ${shipwreck.shipName}`} />}
        <div className={image.length > 0 ? "head-descr" : "head"}>
          <p>{shipwreck.type}</p>
          <p>
            Year:{" "}
            {shipwreck.sunk ? getShipWreckYear(shipwreck.sunk) : "Unknown"}
          </p>
        </div>
        <h3>{shipwreck.shipName}</h3>
        <div className="bottom">
          <button onClick={() => setIsOpen(true)}>
            Get More Information on {shipwreck.shipName}
          </button>
        </div>
      </div>

      {isOpen && createPortal(
        <Modal setOpen={setIsOpen} shipwreck={shipwreck} images={image} videos={video}/>,
        document.body
      )}
    </>
  );
}

export default DescriptionCard;
