import React from "react";

export const GifGridItem = (props) => {
  const { url, title } = props;
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
