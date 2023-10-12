import React ,{useState,useEffect} from 'react';
import logoImg from '../Assets/Images/logo.png'
import '../Assets/StyleSheets/NavBar.css'
function NavBar() {
    const [logo,setLogo] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 993) {
            setLogo(true);
          } else {
            setLogo(false);
          }
        };
    
        // Add an event listener to check for window resize
        window.addEventListener('resize', handleResize);
    
        // Initial check
        handleResize();
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <nav className="navbar px-5 text-light navbar-expand-lg bg-body-tertiary d-flex justify-content-between">
      <div className="container-fluid">
      {!logo && <img src={logoImg} className='logo' alt=''></img>}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        {logo && <img src={logoImg} className='logo' alt=''></img>}
          <ul className="navbar-nav  w-50 justify-content-around">
            
            <li className="nav-item ">
              <a className="nav-link text-light" href="www.google.com">PRODUCTS</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light" href="www.google.com">WHAT'S NEW</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light" href="www.google.com">NEWSLETTER</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light" href="www.google.com">CONTACT US</a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-light buy-product" type="submit">Buy Product</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
