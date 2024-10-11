import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from '../components/Home';
import About from "../components/About";

import { ROUTELIST } from "./routes";
import { Flex } from 'antd';
import logo from "../media/logo.svg";
import "./router.css";
import PortfolioInvestment from '../components/PortfolioInvestment';
import BrahmaJyotiAgroFarm from '../components/BrahmaJyotiAgroFarm';
import BrahmaJyotiGreenEnergy from '../components/BrahmaJyotiGreenEnergy';
import BrahmaJyotiFinancialSolution from '../components/BrahmaJyotiFinancialSolution';

function RouteHandler() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Check screen size initially
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Router>
            {/* Navbar always at the top for both small and large screens */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {ROUTELIST.map((r, i) => (
                                <li key={i} className="nav-item">
                                    <Link className="nav-link" to={r.path}>
                                        {r.name}
                                    </Link>
                                </li>
                            ))}
                             <li className="nav-item dropdown">
                                <a
                                    href="/home"
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Portfolio and Investment
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/brahmnajyotiagrofarmltd"><i className="fas fa-seedling" style={{color: 'yellow'}}></i> Brahma Jyoti Agro Farm Ltd</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/brahmnajyotigreenenergyltd"><i className="fas fa-solar-panel" style={{color: 'green'}}></i> Brahma Jyoti Green Energy Ltd</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/brahmnajyotifinancialsolutionltd"><i className="fas fa-money-bill" style={{color: 'green'}}></i> Brahma Jyoti Financial Solution Pvt Ltd</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main content area */}
            <div className="container mt-3">
                <Routes>
                    {ROUTELIST.map((r, i) => (
                        <Route key={i} path={r.path} element={r.element}></Route>
                    ))}
                   <Route key="brahmnajyotiagrofarmltd" path="/brahmnajyotiagrofarmltd" element={<BrahmaJyotiAgroFarm/>}></Route>
                   <Route key="brahmnajyotigreenenergyltd" path="/brahmnajyotigreenenergyltd" element={<BrahmaJyotiGreenEnergy/>}></Route>
                   <Route key="brahmnajyotifinancialsolutionltd" path="/brahmnajyotifinancialsolutionltd" element={<BrahmaJyotiFinancialSolution/>}></Route>
                </Routes>
                
            </div>
        </Router>
    );
}

export default RouteHandler;