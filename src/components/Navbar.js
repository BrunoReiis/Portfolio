import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css"


export const Navbar = () => {
    return (
        <nav className="nav">
            <input type="checkbox" id="checkNav"></input>
            <Link to="/" className="title">
                Bruno<span>Reiis</span>
            </Link>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>

            <label for="checkNav" class="checkbtn">
                <i><FontAwesomeIcon icon={faBars} /></i>
            </label>
        </nav>


    )



    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })

        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

}