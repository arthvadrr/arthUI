import { Link } from 'react-router-dom'
import "../styles/Nav.scss";

export default function Nav() {
    return (
        <nav>
            <h1>arthUI</h1>
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