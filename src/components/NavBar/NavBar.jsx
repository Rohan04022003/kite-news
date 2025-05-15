import React, { useContext, useState, useRef, useEffect } from 'react';
import { NewsContext } from '../../Context/NewsProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { updateApiUrl, setNewsData, setHeadlines } = useContext(NewsContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [linkActive, setLinkActive] = useState("/");
  const apiKey = import.meta.env.VITE_NEWS_API_KEY; // Correct way to access environment variables in Vite

  useEffect(() => {
    setLinkActive(location.pathname);
  }, [location]);

  const navbarRef = useRef(null);

  const updateURL = () => {
    if (input) {
      setNewsData([]);
      setHeadlines(input);
      const url = `https://newsapi.org/v2/top-headlines?q=${input}&sortBy=popularity&apiKey=${apiKey}`;
      updateApiUrl(url);
      navigate(`/${input}`);
      setInput("");
      closeNavbar();
    }
  };

  const handleCategoryClick = (category) => {
    setHeadlines(category);
    setNewsData([]);
    const url = `https://newsapi.org/v2/top-headlines?q=${category.toLowerCase()}&sortBy=popularity&apiKey=${apiKey}`;
    updateApiUrl(url);
    navigate(`/${category.toLowerCase()}`);
    closeNavbar();
  };

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  const closeNavbar = () => {
    const navbar = navbarRef.current;
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  const categories = ["Technology", "Business", "Entertainment", "Health", "Science", "Sports"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link to={"/"} onClick={() => handleCategoryClick("india")} className="navbar-brand" style={{ fontWeight: "600", letterSpacing: "1px" }}>Kite News</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarRef}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <Link
                  to={`/${category.toLowerCase()}`}
                  className={`nav-link ${linkActive === `/${category.toLowerCase()}` ? "text-light" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(category);
                  }}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <form onSubmit={(e) => { e.preventDefault(); updateURL(); }} className="d-flex" role="search">
            <input
              onKeyDown={handleKeyDown}
              onChange={(e) => setInput(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={input}
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
