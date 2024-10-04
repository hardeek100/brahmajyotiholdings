import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from '../components/Home';
import About from "../components/About";

import { ROUTELIST } from "./routes";
import { Flex } from 'antd';
import logo from "../media/logo.svg";
import "./router.css";


function RouteHandler() {


    return (
        <Router>

            <div className='link-container'>
                <img src={logo} className='logo'></img>

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


        </Router>
    )
}

export default RouteHandler;