import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../store/products/selectors";
import { fetchProducts } from '../store/products/actions';


export default function Home() {
    const dispatch = useDispatch()
    const products = useSelector(selectProducts);

    console.log('products', products);
    
    
    // useEffect(() => {
    //     dispatch(fetchProducts());
    //   }, [dispatch]);

    return (
        <div className="App">
            <h1>Home</h1>
            <div className="wrapper">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
             <div>Five</div>
            </div>
        </div>
    )
}
