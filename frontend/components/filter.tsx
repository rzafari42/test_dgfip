'use client'
import React, { use, useState, useEffect } from "react";
import { IProduct } from "@/interfaces/IProduct";

const FilterProducts = ({items, filterOptions, filter, setFilter} : {items : IProduct[], filterOptions: string[], filter : string , setFilter : any }) => {
  return (
    <div>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        {
            filterOptions.map((element : string) => {
                return (
                    <option value={element} key={filterOptions.indexOf(element)}>
                        {element}
                    </option>
                )
            })
        }
        </select>
    </div>
  );
}

export default FilterProducts;