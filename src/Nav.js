import React from "react";
import { BrowserRouter} from "react-router-dom";
import Login from './Login';

const Nav = ({setToken, open, setOpen}) =>
{
    return (
      <BrowserRouter>
        <nav className="nav">
          <img
            src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
            alt=""
          />
          <div className="mission">
            This Is Code Your Future Glossary.
            You Can find Terms And There
            Definition, Including Resources (Videos,Links and Images) For
            Further Learning.
          </div>
          <Login setToken={setToken} open={open} setOpen={setOpen} />
        </nav>
      </BrowserRouter>
    );
}

export default Nav;