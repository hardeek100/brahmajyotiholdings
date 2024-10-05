import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from '../components/Home';
import About from "../components/About";

import { ROUTELIST } from "./routes";
import { Flex } from 'antd';
import logo from "../media/logo.svg";
import "./router.css";


function RouteHandler() {
    const [isSmallScreen, setisSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setisSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Check screen size initially
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Router>
            {isSmallScreen ?
            
                (<>
                <div className='side-nav'>
                    <img src={logo} className='logo' alt='logo'></img>

                    {ROUTELIST.map((r, i) => (

                        <Link key={i} to={r.path} className='link-item'>{r.name}</Link>
                    ))}
                </div>
                <div className='page-side'>
                            <Routes>

                                {ROUTELIST.map((r, i) => (
                                    <Route key={i} path={r.path} element={r.element}></Route>
                                ))}



                            </Routes>
                        </div>
                </>
                ) :

                (
                    <div>
                        <div className='link-container'>
                            <img src={logo} className='logo' alt='logo'></img>

                            {ROUTELIST.map((r, i) => (

                                <Link key={i} to={r.path} className='link-item'>{r.name}</Link>
                            ))}
                        </div>
                        <div className='page'>
                            <Routes>

                                {ROUTELIST.map((r, i) => (
                                    <Route key={i} path={r.path} element={r.element}></Route>
                                ))}



                            </Routes>
                        </div>
                    </div>

                )}




        </Router>
    )
}

export default RouteHandler;