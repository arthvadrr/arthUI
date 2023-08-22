//import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import '../styles/Home.scss';

export default function Home() {
    return (
        <div className="site home">
            <Nav />
            <div className="page">
                <model-viewer id="moon"
                    src="src/assets/moon.glb"
                    camera-controls
                    disable-zoom
                />
            </div>
        </div>
    )
}