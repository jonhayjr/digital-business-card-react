import Headshot from '../images/JonHeadShot.jpeg';

/*Import Components*/  
import Image from './Image';
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="container">
            <div className="card">
                <Image src={Headshot} alt='Headshot of Jon Hay' className="card-img"/>
                <div className="card-body">
                    <Info/>
                    <About/>
                    <Interests/>
                </div>
                <div className="card-footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Layout;