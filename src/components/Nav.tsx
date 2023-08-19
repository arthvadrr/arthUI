import { Link } from 'react-router-dom'
import "../styles/Nav.scss";

export default function HomeNav() {
    return (
        <nav>
            <ul>
                <div className="menu seperator"></div>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'notfound/'}>Notfound</Link>
                </li>
            </ul>
        </nav>
    )
}