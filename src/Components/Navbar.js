import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
const Navbar = () => {
  const imageUrl = require('./img/logo1.png');
    return (
        
      <nav>
      <input type ="checkbox" name ="" id ="chk1"/>
      <div className="logo">
        <Link to = "/home">
                <img src={imageUrl} style={{ width: '50px', height: '60px' }}/>
        </Link>

      </div>
          <div className="search-box">
              <form>
                  <input type ="text" name ="search" id ="srch" placeholder="Search"/>
                  <button type ="submit"><i className="fa fa-search"></i></button>
              </form>
          </div>
          <ul>
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/movies">MOVIES</Link>
              </li>
              <li>
                <Link to="/news">NEWS</Link>
              </li>
              <li>
                <Link to="/upcoming">UPCOMING</Link>
              </li>
              <li>
                <Link to="/signin">SIGN IN</Link>
              </li>
      </ul>
          <div className="menu">
              <label for="chk1">
                  <i className="fa fa-bars"></i>
              </label>
          </div>
  </nav>
    );
  };
  
  export default Navbar;