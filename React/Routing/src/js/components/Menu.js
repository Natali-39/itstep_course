import {NavLink} from 'react-router-dom';

export default function Menu({links}) {
    let hrefs = links.map(function(link){
        return < NavLink to={link.path} className={({ isActive }) => (isActive ? "active" : "")} > {link.title}</NavLink> ;
    });

    return (
        <nav className="name-menu">{hrefs}
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")} > Портфолио</NavLink>
        </nav>
    );
}