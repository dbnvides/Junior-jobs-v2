import React from "react";
import { Footer } from "./styles";
import { SiInstagram, SiFacebook, SiTwitter } from "react-icons/si";

export const StyledFooter = () => {
    return (
        <Footer>
            <div className="footerContainer">
                <div className="socialMediaIcons">
                    <a href="#">
                        <SiInstagram size={25} color="white" />
                    </a>
                    <a href="#">
                        <SiFacebook size={25} color="white" />
                    </a>
                    <a href="#">
                        <SiTwitter size={25} color="white" />
                    </a>
                </div>
                <div className="logoContainerFooter">
                    <a href="#">
                        <span>Júnior Jobs</span>
                    </a>
                </div>
            </div>
        </Footer>
    );
};
