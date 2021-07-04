import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

const Nav = () =>
{
    return (
      <Router>
        <nav className="nav">
          <img
            src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
            alt=""
          />
          <div className="mission">
            CYF Glossary is a unique place that documents technical terms that
            are used and/or searched within different classes of CYF. It ensures
            that all our students can understand and utilize what is meant by
            the terminology, acronyms, and phrases used inside Code Your Future
            with a clear definition, materials and external resources 2:32 and
            let's try that text
          </div>

          <div className="login">Login</div>
        </nav>
      </Router>
    );
}

export default Nav;