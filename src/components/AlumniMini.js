import React from 'react';
import { Link } from 'react-router-dom';

export default function AlumniMini(){
    return(
        <div className='alumniMini-section'>
            <div className="h-section">
                <h1 className="h">Alumni</h1>
                <div className="h-underline"></div>
            </div>
            <div className='inner-alumniMini-section'>
                <div className='inner-alumniMini-section-img'>
                    <img src="/img/logo1.png" className='inner-alumniMini-section-img-img'/>
                </div>
                <div className='inner-alumniMini-section-text'>
                    <p className='inner-alumniMini-section-text-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link to="/alumni" className='inner-alumniMini-section-text-button'>Read More</Link>
                </div>
            </div>
        </div>
    )
}