import React from 'react';
import github from "../../img/icons/gitHub-black.svg";

const BtnGithub = ({link}) => {
    return (
        <>
            <a href={link} target="_blank" className="btn-outline">
                <img src={github} alt=""/>
                GitHub repo
            </a>
        </>
    );
};

export default BtnGithub;