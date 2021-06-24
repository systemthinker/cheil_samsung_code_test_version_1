import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../store/products/selectors";

import { fetchProducts } from "../store/products/actions";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/SamsungLanding.webp";
import { selectColor } from "../store/color/selectors";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const color = useSelector(selectColor);

  console.log("products", products);
  console.log("color state is ", color);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div
          className="backgroundImageDivHome"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="backgroundImageDivColumn">
            <h1>Galaxy Overzicht</h1>
            <h2 className="backgroundImageText">
              {" "}
              mooie aanbiedingen op smartphones en tablets
            </h2>
          </div>
        </div>
        <div className="wrapperProductCards">
          {products.map((product, index) => {
            return (
              <div className="product" key={product.familyRecord}>
                <ProductCard {...product} id={index} color={color} />
              </div>
            );
          })}
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
