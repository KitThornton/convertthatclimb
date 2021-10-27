import React, {Fragment} from 'react';
import './Footer.css';
import {AiOutlineLinkedin, AiOutlineHome, AiFillGithub, BiCopyright } from "react-icons/all";

export const Footer = () => {
    return (
        <Fragment>
            <div className="Footer upper">
                <a target="blank" href="https://www.linkedin.com/in/kit-thornton/"><AiOutlineLinkedin /></a>
                <span style={{display: "inline-block", width: "30px"}}/>
                <a target="blank" href="https://www.kitthornton.dev/"><AiOutlineHome /></a>
                <span style={{display: "inline-block", width: "30px"}}/>
                <a target="blank" href="https://github.com/KitThornton"><AiFillGithub /></a>
            </div>
            <div className="Footer lower">
                <BiCopyright /> Kit W. Thornton, 2021
            </div>
        </Fragment>
    )
}