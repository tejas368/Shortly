import React from 'react';
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import pinterest from "./images/pinterest.svg"
import instagram from "./images/instagram.svg"

const Social = () => {
    return (
        <section className="social-handles">
            <section className="fpart part common">
                <h2>Shortly</h2>
            </section>
            <section className="spart part common">
                <div>
                    <h4>Features</h4>
                    <article className="subarrange">
                        <a className="subhead" href="#">Link Shortening</a>
                        <a className="subhead" href="#">Branded Links</a>
                        <a className="subhead" href="#">Analytics</a>
                    </article>
                </div>
                <div>
                    <h4>Resources</h4>
                    <article className="subarrange">
                        <a className="subhead" href="#">Blog</a>
                        <a className="subhead" href="#">Developers</a>
                        <a className="subhead" href="#">Support</a>
                    </article>
                </div>
                <div>
                    <h4>Company</h4>
                    <article className="subarrange">
                        <a className="subhead" href="#">About</a>
                        <a className="subhead" href="#">Our Team</a>
                        <a className="subhead" href="#">Careers</a>
                        <a className="subhead" href="#">Contact</a>
                    </article>
                </div>
            </section>
            <section className="tpart part common">
                <a href="#">
                <img className="s-icon" src={facebook} alt={facebook}/>
                </a>
                <a href="#">
                <img className="s-icon" src={twitter} alt={twitter}/>
                </a>
                <a href="#">
                <img className="s-icon" src={pinterest} alt={pinterest}/>
                </a>
                <a href="#">
                <img className="s-icon" src={instagram} alt={instagram}/>
                </a>
            </section>
        </section>
    )
}

export default Social;