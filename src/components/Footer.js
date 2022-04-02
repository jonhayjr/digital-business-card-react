import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons' 

const Footer = () => {
    return (
        <footer className="footer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
            <FontAwesomeIcon icon={faFacebook} className="social-icon"/>
            <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
            <FontAwesomeIcon icon={faGithub} className="social-icon"/>
        </footer>
    )
}

export default Footer;