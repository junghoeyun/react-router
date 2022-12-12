import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [input, setInput] = useState("");
  const change = e => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h2>값을 입력받아서 페이지를 이동합니다.</h2>
      <input type="text" value={input} onChange={change} />
      <Link to={`/product/${input}`}>페이지로 이동</Link>
    </div>
  );
};

export default Product;
