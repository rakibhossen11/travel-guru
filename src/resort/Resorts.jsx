import React from "react";
import { useLoaderData } from "react-router-dom";
import Resort from "./Resort";

const Resorts = () => {
  const resorts = useLoaderData();
  console.log(resorts);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="grid grid-cols-2 mt-10">
      <div className="flex flex-col gap-3">
        {resorts.map((resort) => (
          <Resort key={resort.id} resort={resort}></Resort>
        ))}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Resorts;
