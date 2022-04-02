import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons' 

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://twitter.com/JonHaymaker" className="social-link twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="social-icon"/></a>
            <a href="https://www.facebook.com/bigfootjon" className="social-link facebook" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="social-icon"/></a>
            <a href="https://www.instagram.com/jonhaymaker/" className="social-link instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></a>
            <a href="https://github.com/jonhayjr" className="social-link github" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="social-icon"/></a>
        </footer>
    )
}

export default Footer;