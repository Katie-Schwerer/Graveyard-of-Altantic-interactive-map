import React from "react";
import "./Modal.css";
import parse from "html-react-parser";
import { getShipwreckDate } from "../../support-functions/date-function";

function Modal({ setOpen, shipwreck, images, videos }) {
  const createParagraph = (sentences) => {
    return parse(sentences.join(" "));
  };
  return (
    <div className="modal-container">
      <div className="modal-body">
        <div className="modal-header">
          <h2>{shipwreck.shipName}</h2>
          <button className="close" onClick={() => setOpen(false)}>
            &times;
          </button>
        </div>
        <img
          src={images[0].path}
          alt={images[0].caption.replace("<i>", "").replace("</i>", "")}
        />
        <p>{createParagraph(shipwreck.description)}</p>
        <br />
        <p>Shipwreck Date: {getShipwreckDate(shipwreck.sunk)}</p>
        <p>Ship Type: {shipwreck.type}</p>
        <p>Country: {shipwreck.country ? shipwreck.country : "Unknown"}</p>
        {shipwreck.war && (
            <p>War: {shipwreck.war}</p>
        )}
        {shipwreck.wreckLocation && (
          <p>Wreck Location: {shipwreck.wreckLocation}</p>
        )}
        {typeof shipwreck.notes === "string" && <p>Notes: {shipwreck.notes}</p>}
        {images.length > 1 &&
          <div className="photo-gallery">
            <h3>Photo Gallery of {shipwreck.shipName}</h3>
            {images.map((image, index) => (
                <img src={image.path} alt={image.caption.replace("<i>", "").replace("</i>", "")} key={index}/>
            ))}
          </div>
        }
        {videos.length > 0 &&
          <div className="video-gallery">
            <h3>Video Gallery of {shipwreck.shipName}</h3>
            {videos.map((image, index) => (
                <video controls width="250px" key={index}>
                    <source src={image.path} type="video/mp4" />
                </video>
            ))}
          </div>
        }
        {shipwreck.source && (
            <p className="source">{shipwreck.source}</p>
        )}
      </div>
    </div>
  );
}

export default Modal;
