import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXing } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Socials() {
    return (
        <div className="socials">
            <a target="_blank" href="https://www.instagram.com/marian.lippold/" className="socials--instagram" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
            <a target="_blank" href="https://github.com/marian-l" className="socials--github" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a target="_blank" href="https://www.xing.com/profile/Marian_Lippold/cv" className="socials--xing" rel="noreferrer">
                <FontAwesomeIcon icon={faXing}></FontAwesomeIcon>
            </a>
            
            <a></a>
        </div>
    )
}

export default Socials;