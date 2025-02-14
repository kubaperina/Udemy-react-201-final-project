import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ setSearchText, inputText, setInputText }) => {

  const navigate = useNavigate()

  const updateInputText = (e) => {
    setInputText(e.target.value)
  }

   const confirmSearchText =(e) => {
     e.preventDefault()
     navigate('/search')
     setSearchText(inputText)
     setInputText("")
   }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/"
                tabIndex="-1"
                aria-disabled="true"
              >
                Coming soon
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={inputText}
              onChange={updateInputText}
            />
            <button 
              className="btn btn-outline-success" 
              type="submit"
              onClick={confirmSearchText}
              >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
