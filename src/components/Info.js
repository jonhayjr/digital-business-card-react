import Headshot from '../images/JonHeadShot.jpeg';

/*Import Font Awesome*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Info = () => {
    return (
        <div className="info">
            <h1 className="info-name">Jon Hay</h1>
            <p className="info-position">Frontend Developer</p>
            <a href="https://www.jonhayjr.com" target="_blank" className="info-website">jonhayjr.com</a>
            <div className="btn-container">
                <a href="mailto:jonhayjr@gmail.com" className="btn info-email-btn"><FontAwesomeIcon icon={faEnvelope} className="btn-icon"/>Email</a>
                <a href="https://www.linkedin.com/in/jonhayjr/" target="_blank" className="btn info-linkedin-btn"><FontAwesomeIcon icon={faLinkedin} className="btn-icon"/>LinkedIn</a>
            </div>
        </div>
    )
}

export default Info;