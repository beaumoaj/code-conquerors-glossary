import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

const Nav = () =>
{
    return (
      <Router>
        <nav className="">
          <img
            src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
            alt=""
                />
          <div className="mission">
            Welcome to Code Your Future Glossary.
            You Can find Terms And There
            Definition, Including Resources (Videos,Links and Images) For
            Further Learning.
          </div>

            <div className="login">
               Login     
            </div>
        </nav>
      </Router>
    );
}

export default Nav;