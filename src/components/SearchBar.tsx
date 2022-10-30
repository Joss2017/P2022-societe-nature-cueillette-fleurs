import React, { useState } from "react";
// import { listePlantes } from "../pages/Home";
import { Plante } from "../pages/Home";

export interface SearchbarProps {
  textElementPlant: Plante;
}

// const searchValue = () => {};

const Searchbar = ({ textElementPlant }: SearchbarProps) => {
  // function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
  //   //let result = plante.filter((x:string) => x.name);
  //   let value: string[] = [];
  //   if e.currentTarget?
  //     value = [...textElementPlantFilter, e.currentTarget.value]
  //

  return (
    <div className="d-flex mt-2" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Recherche ta plante"
        // onChange={handlechange}
      />
    </div>
  );
};
export default Searchbar;
