import { Link } from 'react-router-dom';


function Header() {
    return (
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  