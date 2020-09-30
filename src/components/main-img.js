import React from 'react'
import HomeImg from '../assets/etdevs-main.png';
import './component.css';
import IconLabelButtons from './footerButons';
import FooterEmail from './footer-email';

export default function Mainimg() {
  return (
    <div >
      <br /><br /><br />
      <div className="Hero" >
        <img alt="" src={HomeImg} />
      </div>
      <br /><br />
      <IconLabelButtons />
      <FooterEmail />
    </div>
  )
}
