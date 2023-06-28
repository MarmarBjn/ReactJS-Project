import { Link } from "react-router-dom";
import Logo from "./Logo";

const AboutMe = () => {
  const autobiography1 = `I love to capture the beauty, emotions, and authenticity of people with my camera, showcasing their individuality and creating beautiful memories.`;
  const autobiography2 = `When not immersed in the world of pictures , you can find me exploring new locations, immersing myself in different cultures, or engaging in outdoor activities. I believe that these experiences fuel my creativity and enable me to approach photography with a fresh perspective.`;

  return (
    <div className="inner">
      <p>----A FEW WORDS</p>
      <h1>About Me</h1>
      <p>Hi, my name is Marmar. I am a developer and a visual storyteller.</p>
      <p>{autobiography1}</p>
      <p>{autobiography2}</p>

      <div className="contact">
        <h1> Get In Touch</h1>
        <br />
        <Link
          to=""
          className="contactlink"
          onClick={() => (window.location = "mailto:marmar.photography@pm.me")}
        >
          Contact Me
        </Link>
        <br />
        <br />
        <Link
          to="https://www.instagram.com/marmar.photography/"
          target="_blank"
        >
          <Logo />
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
