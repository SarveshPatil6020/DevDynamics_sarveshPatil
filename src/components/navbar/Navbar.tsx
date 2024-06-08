import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>DevDynamics</span>
      </div>
      <div className="icons">
       
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
         
          <span>Sarvesh </span>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
