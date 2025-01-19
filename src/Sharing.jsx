import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook, 
  faInstagram, 
  faXTwitter, 
  faBluesky, 
  faLinkedin, 
  faSlack, 
  faWhatsapp 
} from "@fortawesome/free-brands-svg-icons";


function Sharing() {

  const URL = window.location.href.slice(7);

  return (
    <div className="sharing">
      <a href={"https://www.facebook.com/sharer/sharer.php?u=" + URL} target="_blank"> <FontAwesomeIcon icon={faFacebook} /> </a>
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faXTwitter} />
      <FontAwesomeIcon icon={faBluesky} />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faSlack} />
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  );
}
  
export default Sharing;
  