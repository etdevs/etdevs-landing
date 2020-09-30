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
      <h3>ETDevs is a comunity based in ethiopia that tries to gather developers <br/> around the country and help them connect </h3>
      <IconLabelButtons />
      <FooterEmail />
    </div>
  )
}
