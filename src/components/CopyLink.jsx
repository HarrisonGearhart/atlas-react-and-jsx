import React from "react";
import copyImg from '../assets/copy.svg';

function CopyLink({ link }) {
    return (
      <img
        className="copy"
        alt="copy link"
        src={copyImg}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(link);
          } catch (err) {
            console.error("copy fail", err);
          }
        }}
      />
    );
  }  

export default CopyLink;
