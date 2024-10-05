import React from "react";
import "../router/router.css";
import pdfFile from "../media/memorandum.pdf"

const About = () => {

    return(
        <div>
            <h1 className="title">Brahma Jyoti Holding Limited (BJHL)</h1>
             <div className="align-two"> 
            <div className="container1">
                <h2>Vision</h2>
                <p>To be the most trusted Institution and GAIN
                    expertise in Trading and investment sector.
                </p>
            </div>
            <div className="container1">
                <h2>Mission</h2>
                <p>To work with honesty and provide fair dealing
                in all the Trading and investment.</p>
            </div>
            </div>
            <div className="download-container">
        <a href={pdfFile} download className="download-button">Download our memorandum</a>
      </div>
        </div>
    )
}


export default About;