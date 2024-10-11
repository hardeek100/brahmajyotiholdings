import Home from "../components/Home"
import About from "../components/About"
import ApplyShare from "../components/Joinus"
import Contact from "../components/Contact"
import News from "../components/News"


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
        path: "/news",
        element: <News/>,
        name: "News"
    },
    {
        path: "/applyshare",
        element: <ApplyShare/>,
        name: "Apply for Share"
    },
    {
        path: "/contact",
        element: <Contact/>,
        name: "Contact Us"
    }
]