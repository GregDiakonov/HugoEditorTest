import hugo from "../img/hugo_logo.png";
import {Link} from "react-router-dom";
import "./IntroHeader.css";

function IntroHeader() {
    return (
        <header className="IntroH">
            <div >
                <img className="Logo" src={hugo} alt="Hugo"/>
            </div>
            <nav className="navigation">
                <Link to="/editor" className="IntroHeaderBtn" style={{color: "#FFF"}}>Create</Link>
                <Link to="/" className="IntroHeaderBtn" style={{color: "#FFF"}}>Help</Link>
                <Link to="/" className="IntroHeaderBtn" style={{color: "#FFF"}}>Test Account</Link>
            </nav>
        </header>
    )
}

export default IntroHeader;