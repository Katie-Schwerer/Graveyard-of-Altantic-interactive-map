import React from "react";
import "./Modal.css";
import parse from "html-react-parser";
import { getShipwreckDate } from "../../support-functions/date-function";
import FocusTrap from "focus-trap-react";

function Modal({ setOpen, triggerRef, shipwreck, images, videos }) {

  const createParagraph = (sentences) => {
    return parse(sentences.join(" "));
  };

  const handleClose = () => {
    setOpen(false);
    triggerRef?.current?.focus();
  };

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  return (
    <div
      className="modal-container"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={handleEscape}
    >
      <FocusTrap>
        <div className="modal-body">
          <div className="modal-header">
            <h2 id="modal-title">{shipwreck.shipName}</h2>
            <button className="close" aria-label="Close" onClick={handleClose}>
              X
            </button>
          </div>
          <img
            src={images[0].path}
            alt={images[0].caption?.replace(/<\/?i>/g, "") || `Shipwreck of ${shipwreck.shipName}` }
          />
          <p>{createParagraph(shipwreck.description)}</p>
          <br />
          <p>Shipwreck Date: {getShipwreckDate(shipwreck.sunk)}</p>
          <p>Ship Type: {shipwreck.type}</p>
          <p>Country: {shipwreck.country ? shipwreck.country : "Unknown"}</p>
          {shipwreck.war && <p>War: {shipwreck.war}</p>}
          {shipwreck.wreckLocation && (
            <p>Wreck Location: {shipwreck.wreckLocation}</p>
          )}
          {typeof shipwreck.notes === "string" && (
            <p>Notes: {shipwreck.notes}</p>
          )}
          {images.length > 1 && (
            <div className="photo-gallery">
              <h3>Photo Gallery of {shipwreck.shipName}</h3>
              {images.map((image, index) => (
                <img
                  src={image.path}
                  alt={image.caption?.replace(/<\/?i>/g, "") || `Shipwreck of ${shipwreck.shipName}`}
                  key={index}
                />
              ))}
            </div>
          )}
          {videos.length > 0 && (
            <div className="video-gallery">
              <h3>Video Gallery of {shipwreck.shipName}</h3>
              {videos.map((image, index) => (
                <video controls width="250px" key={index}>
                  <source src={image.path} type="video/mp4" />
                </video>
              ))}
            </div>
          )}
          {shipwreck.source && <p className="source">{shipwreck.source}</p>}
        </div>
      </FocusTrap>
    </div>
  );
}

export default Modal;
