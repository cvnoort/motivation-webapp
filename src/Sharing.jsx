import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook, 
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
      <FontAwesomeIcon icon={faXTwitter} />
      <FontAwesomeIcon icon={faBluesky} />
      <a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + URL} target="_blank"> <FontAwesomeIcon icon={faLinkedin} /> </a>
      <FontAwesomeIcon icon={faSlack} />
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  );
}
  
export default Sharing;
  