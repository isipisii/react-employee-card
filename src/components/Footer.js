import React from 'react';
import Facebook from './images/Facebook Icon.png';
import Github from './images/GitHub Icon.png';
import Twitter from './images/Twitter Icon.png';
import Insta from './images/Instagram Icon.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='icon-wrapper'>
        <img src={Twitter} alt='Twitter Icon'/>
        <img src={Facebook} alt='Facebook Icon' />
        <img src={Github} alt='Github Icon'/>
        <img src={Insta} alt='Instagram Icon'/>
      </div>
    </div>
  );
}

export default Footer;