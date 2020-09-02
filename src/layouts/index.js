import React from "react";
import Link from "gatsby-link";

export const TemplateWrapper = ({ children }) => (
  <body className="theme-base-13 sidebar-overlay">
    <div className="wrap">
      <div className="masthead">
        <div className="masthead-container">
          <h3 className="masthead-title">
            <a title="Home">{"Deborah's"}</a>{" "}
            <small>{"Doodles"}</small>
          </h3>
          <div className="masthead-nav">
            <h4 className="masthead-title">
              {"About"}
            </h4>
            <h4 className="masthead-title">
              {"Blog"}
            </h4>
          </div>
        </div>
      </div>
      <div className="container content">
        {children}
      </div>
    </div>    
  </body>
);
