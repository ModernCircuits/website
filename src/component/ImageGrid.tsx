import React from "react";

import "./ImageGrid.css";

export interface ImageGridItem {
  img: string;
  alt: string;
}

export interface ImageGridProps {
  items: ImageGridItem[];
}

export const ImageGrid = (props: ImageGridProps) => {
  return (
    <div className="image-grid">
      {props.items.map((i) => {
        return <img src={i.img} alt={i.alt}></img>;
      })}
    </div>
  );
};
