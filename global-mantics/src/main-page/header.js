import logo from "./logo.png";

const Header = ({subtitle}) => (
  <header className="row">
    <div className="col-md-4">
      <img src={logo} alt="" className="logo"/>
    </div>
    <div className="col-md-8">
      <h3> {subtitle}</h3>
    </div>
  </header>
);
export default Header;
