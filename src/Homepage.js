import { useState } from "react";
import Gallery from "./Gallery";

const Homepage = () => {
  const [click, setClicked] = useState(false);

  return (
    <div className="inner">
      <h2>______ PHOTOGRAPHER & DIGITAL MEDIA PRODUCER</h2>
      <br />
      <h1>Marmar Photography</h1>
      <p>
        Photographer & Digital Media Producer specializing in life style, based
        in Carlisle,UK.
      </p>
      <button className="btn" id="view-work" onClick={() => setClicked(!click)}>
        View Work
      </button>
      <div> {click && <Gallery />}</div>
    </div>
  );
};

export default Homepage;
