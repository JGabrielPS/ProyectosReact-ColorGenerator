import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [alert, setAlert] = useState(false);
  const value = rgb.join(",");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${value})` }}
      onClick={(e) => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hex}`);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
