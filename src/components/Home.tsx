import React from "react";
import "../router/router.css";
import image1 from '../media/image1.png';


const Home = () => {

    return (
        <>
        <div>
            <h1 className="title">Brahma Jyoti Holding Limited (BJHL)</h1>
            <p className="container1">Brahma Jyoti Green Energy Limited is a leading force in Nepal’s
renewable energy sector, dedicated to advancing sustainable power solutions
through its specialized focus on commercial solar power and hydropower
projects. Our company is committed to leveraging Nepal’s natural resources to
deliver innovative and efficient energy solutions that meet the growing
demand for clean energy</p>
          <img src={image1} alt="image1"/>
           


        </div>
        
        </>
    )
}


export default Home;