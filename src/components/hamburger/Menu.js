import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
    return (
        <StyledMenu open={open} onClick={() => setOpen(!open)}>
            <Link to="/about" style={{ textDecoration: "none" }}><a>About</a></Link>
            {/* <Link to="/services" style={{ textDecoration: "none" }}><a>Services</a></Link> */}
            <Link to="/contact" style={{ textDecoration: "none" }}><a>Contact us</a></Link>
        </StyledMenu>
    )
}

Menu.prototype = {
    open: bool.isRequired,
    // setOpen:func.isRequired,
};

export default Menu;