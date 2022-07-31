import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import FooterParagraf from "./FooterParagraf";
function Footer(){
    return(
        <div className="footer">
            <FooterLogo/>
            <FooterMenu/>
            <FooterParagraf/>
        </div>
    )
}

export default Footer;