import React from "react";
import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

function HelpfulResource({ link, label }) {
    // container for each resource item
    return (
      <div className="helpful-resource">
        {/* label text for the resource */}
        <p>{label}</p>
  
        {/* link opens in a new tab */}
        <OpenLink link={link} />
  
        {/* link can also be copied to clipboard */}
        <CopyLink link={link} />
      </div>
    );
  }  

export default HelpfulResource;
