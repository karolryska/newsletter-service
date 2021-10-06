import { Link } from "react-router-dom";

const Navigation = () => (
    <nav>
        <Link to="/">campaigns</Link>
        <Link to="/subscribers">subscribers</Link>
    </nav>
)

export default Navigation;