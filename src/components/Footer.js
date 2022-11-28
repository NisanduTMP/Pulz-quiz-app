import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="footer">
            <div className="upper-footer">
                <div className="useful-links">
                    <h1 className="footer-mini-h">Useful Links</h1>
                    <Link className="useful-links-inner" to="/">
                        <i class="fa-solid fa-square footer-icons"></i>
                        <span className="useful-links-inner-span">Home</span>
                    </Link>
                    <Link className="useful-links-inner" to="/about">
                        <i class="fa-solid fa-square footer-icons"></i>
                        <span className="useful-links-inner-span">About</span>
                    </Link>
                    <Link className="useful-links-inner" to="/alumni">
                        <i class="fa-solid fa-square footer-icons"></i>
                        <span className="useful-links-inner-span">Alumni</span>
                    </Link>
                    <Link className="useful-links-inner" to="/achievements">
                        <i class="fa-solid fa-square footer-icons"></i>
                        <span className="useful-links-inner-span">Achievements</span>
                    </Link>
                    <Link className="useful-links-inner" to="/gallery">
                        <i class="fa-solid fa-square footer-icons"></i>
                        <span className="useful-links-inner-span">Gallery</span>
                    </Link>
                </div>
                <div className="socialmedia-links">
                    <h1 className="footer-mini-h">Social Medias</h1>
                    <a className="socialmedia-links-inner" href="https://www.facebook.com/" target='_blank'>
                        <i class="fa-brands fa-facebook footer-icons footer-social-media-icons"></i>
                        <span className="socialmedia-links-inner-span">Facebook</span>
                    </a>
                    <a className="socialmedia-links-inner" href="https://www.instagram.com/" target='_blank'>
                        <i class="fa-brands fa-instagram footer-icons footer-social-media-icons"></i>
                        <span className="socialmedia-links-inner-span">Instagram</span>
                    </a>
                    <a className="socialmedia-links-inner" href="https://www.youtube.com/" target='_blank'>
                        <i class="fa-brands fa-youtube footer-icons footer-social-media-icons"></i>
                        <span className="socialmedia-links-inner-span">Youtube</span>
                    </a>
                </div>
                <div className="footer-description">
                    <h1 className="footer-mini-h">ACVAS</h1>
                    <p className="footer-description-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="footer-line-break"></div>
            <div className="below-footer">
                <p className="below-footer-p">Copyright 2022 &copy; ACVAS</p>
            </div>
        </div>
    )
}