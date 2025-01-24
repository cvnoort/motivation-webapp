import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook, 
  faXTwitter, 
  faBluesky, 
  faLinkedin, 
  faWhatsapp 
} from "@fortawesome/free-brands-svg-icons";


function Sharing(props) {

  const URL = window.location.href.slice(8);
  const shareText = props.text.replaceAll(" ", "%20");

  return (
    <div className="sharing">

      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:image" content={props.image} />
        <meta property="og:description" content={props.text} />
      </Helmet>

      <a href={"https://www.facebook.com/sharer/sharer.php?u=" + URL + "&t=" + shareText} target="_blank"> <FontAwesomeIcon icon={faFacebook} /> </a>
      <a href={"https://twitter.com/intent/tweet?url=" + URL + "&text=" + shareText} target="_blank"> <FontAwesomeIcon icon={faXTwitter} /> </a>
      <a href={"https://bsky.app/intent/compose?text=" + shareText + "%20" + URL} target="_blank"> <FontAwesomeIcon icon={faBluesky} /> </a>
      <a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + URL} target="_blank"> <FontAwesomeIcon icon={faLinkedin} /> </a>
      <a href={"whatsapp://send?text=" + shareText + "%20" + URL} id="whatsapp"> <FontAwesomeIcon icon={faWhatsapp} /> </a>
      <a href={"mailto:?subject=Some%20inspiration%20for%20you&body=" + shareText + "%0D%0A%0D%0A" + URL}> <FontAwesomeIcon icon={faEnvelope} /> </a>
      <FontAwesomeIcon icon={faLink} onClick={() => {navigator.clipboard.writeText(URL)}} />

    </div>
  );
}
  
export default Sharing;
  