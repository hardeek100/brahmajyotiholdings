import Home from "../components/Home"
import About from "../components/About"
import Careers from "../components/Careers"
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
        path: "/careers",
        element: <Careers/>,
        name: "Careers"
    },
    {
        path: "/contact",
        element: <Contact/>,
        name: "Contact Us"
    }
]