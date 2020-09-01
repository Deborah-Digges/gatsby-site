import React from "react";
import Link from "gatsby-link";
import css from "../index.css";

const Header = () => (
  <div>
    <div>
      <h1 className="f">
        <Link to="/" className="link dark-gray">
          Deborah's Doodles
        </Link>
      </h1>
    </div>
  </div>
);
  
export const TemplateWrapper = ({ children }) => (
  <div className="sans-serif dark-gray mh4 mh3 mw-100 mw7-l center-l">
      <Header />
      <div className="mv4">{children}</div>
  </div>
);
