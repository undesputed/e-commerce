import React from "react";
import { IoLogInOutline } from "react-icons/io5";
import {AiOutlineSearch} from 'react-icons/ai';

import "../assets/banner.scss";

import * as logo from '../../../../public/img/logo.png';

import { Link } from "react-router-dom";
import * as ROUTES from "../../../Components/Routes/routes";

class Banner extends React.Component {
  render() {
    return (
      <section className="navSection">
        <div className="firstSection">
          <div className="firstContent">
            <div className="firstPart">
              <p>NEW ARRIVAL LAUNCH 2-3X WEEKLY</p>
            </div>
            <div className="secondPart">
              <p>EVERYTHING UNDER $50</p>
            </div>
            <div className="thirdPart">
              <p>CONTACT US AT 1234.12314.234 TO TALK TO A STYLIST</p>
            </div>
          </div>
        </div>
        <div className="secondSection">
          <div className="secondContent">
            <div className="userSection">
              <div className="signInSection">
                <IoLogInOutline size={20} className="signInIcon"/>
                <p className="signInLabel">Sign in</p>
              </div>
              <div className="line-separator1"></div>
              <div className="registerSection">
                <p className="registerLabel">Register</p>
              </div>
              <div className="line-separator2"></div>
              <div className="searchSection">
                <AiOutlineSearch size={17} className="searchIcon"/>
                <p className="searchLabel">Search</p>
              </div>
            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div className="logoSection">
            <div className="logoDiv">
              <img src={logo} alt="" className="brandLogo"/>
            </div>
          </div>
        </div>
        <div className="thirdSection"></div>
      </section>
    );
  }
}

export default Banner;
