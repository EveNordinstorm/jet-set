import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";
import "./HeroSection.css";
import { Button } from "./Button";

function HeroSection() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="hero-container">
      <div className="video-background">
        <video src="/videos/clouds-video.mp4" autoPlay loop muted />
      </div>
      <h1>ARE YOU READY?</h1>
      <p>Jet off to your dream destination with Jet Set holidays!</p>
      <div className="hero-btns">
        {!isAuthenticated && (
          <Button
            id="qsLoginBtn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={() => loginWithRedirect()}
          >
            GET STARTED
          </Button>
        )}

        <a href="https://youtu.be/QtYahgWFtK0?feature=shared" target="_blank">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
