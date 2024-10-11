import React from "react";
import "../router/router.css";
import pdfFile from "../media/memorandum.pdf"

const About = () => {

    return(
        <div>
            <h1 className="title">Brahma Jyoti Holding Limited (BJHL)</h1>
             
            <div className="container1">
            Its objective is to provide our clients a large spectrum of financial products and services and it is a key player for providing opportunities in the trading sectors. It is a company with a fresh new approach both in Traditional and Emerging Markets. The Company is led by a Board-of-Directors and Strong Management Team. Brahma Jyoti Holdings Ltd is poised for rapid growth. Unique Experience and insight of its Management allows the company to discover new opportunities and reveal their true potential. Brahma Jyoti Holdings Limited utilizes structured finance products to provide cost effective forms of financing that would not otherwise be readily available to clients, with an emphasis on providing long-term returns.
            </div>
            <div className="download-container">
        <a href={pdfFile} download className="download-button">Download our memorandum</a>
      </div>
        </div>
    )
}


export default About;