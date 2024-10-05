import Home from "../components/Home"
import About from "../components/About"
import Joinus from "../components/Joinus"
import Contact from "../components/Contact"


export const ROUTELIST = [
    {
        path: "/",
        element: <Home/>,
        name: "Home"
    },
    {
        path: "/about",
        element: <About/>,
        name: "About Us"
    },
    {
        path: "/joinus",
        element: <Joinus/>,
        name: "Join Us"
    },
    {
        path: "/contact",
        element: <Contact/>,
        name: "Contact Us"
    }
]