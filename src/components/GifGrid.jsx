import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

function GifGrid({ category }) {
  //Solo se ejecutará cuando el componente es renderizado por primera vez

  const { data: images, loading } = useFetchGifs(category);
  /*  const [images, setImages] = useState([]);

  getGifs(); */

  return (
    <>
      <h4>{category}</h4>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
