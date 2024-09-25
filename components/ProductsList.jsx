"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import ProductApi from "@/utils/ProductApi";

const ProductsList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    _getLatestProduct();
  }, []);
  const _getLatestProduct = () => {
    ProductApi.getLatestProducts().then((res) => {
      console.log(res);
      setProductList(res.data.data);
    });
  };
  return (
    <div className="container flex flex-col justify-center" id="prodcuts">
      <h2 className="text-4xl font-semibold flex items-center justify-center mb-12">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-[100px]">
        {productList.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsList;
