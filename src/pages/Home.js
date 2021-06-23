import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../store/products/selectors";
import { fetchProducts } from "../store/products/actions";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  console.log("products", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div className="wrapper">
          {products.map((product, index) => {
            return (
              <div className="product" key={product.familyRecord}>
                <ProductCard {...product} id={index} />
              </div>
            );
          })}
        </div>
        <div className="footer">

        </div>
      </div>
    </div>
  );
}
