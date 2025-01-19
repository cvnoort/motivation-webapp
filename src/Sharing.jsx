import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { 
  faFacebook, 
  faXTwitter, 
  faBluesky, 
  faLinkedin, 
  faWhatsapp 
} from "@fortawesome/free-brands-svg-icons";


function Sharing() {

  const URL = window.location.href.slice(7);

  return (
    <div className="sharing">
      <a href={"https://www.facebook.com/sharer/sharer.php?u=" + URL} target="_blank"> <FontAwesomeIcon icon={faFacebook} /> </a>
      <a href={"https://twitter.com/intent/tweet?url=" + URL} target="_blank"> <FontAwesomeIcon icon={faXTwitter} /> </a>
      <FontAwesomeIcon icon={faBluesky} />
      <a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + URL} target="_blank"> <FontAwesomeIcon icon={faLinkedin} /> </a>
      <FontAwesomeIcon icon={faWhatsapp} />
      <a href={"mailto:?subject=Some%20inspiration%20for%20you&body=" + URL}> <FontAwesomeIcon icon={faEnvelope} /> </a>
    </div>
  );
}
  
export default Sharing;
  