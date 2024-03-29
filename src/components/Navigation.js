import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  const hooks = [
    "useState",
    "UseStateObject",
    "useEffect",
    "useEffectCleanUp",
    "useLayoutEffect",
    "useRef",
    "useRef1",
    "useReducer",
    "useContext",
    "useMemo",
    "useCallback",
    "FetchApi",
    "TaskManager"
    // "Test"
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React Hooks
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {hooks.map((index, item) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={`/${index}`}
                    >
                      {index}
                    </Link>
                  </li>
                );
              })}
              {/* <li className="nav-item">
          <Link className="nav-link" to="/">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/">Disabled</Link>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
