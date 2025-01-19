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
  return (
    <div className="sharing">
      <FontAwesomeIcon icon={faFacebook} />
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
  