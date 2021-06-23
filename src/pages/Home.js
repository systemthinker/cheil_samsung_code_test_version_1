import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../store/products/selectors";
import { fetchProducts } from '../store/products/actions';


export default function Home() {
    const dispatch = useDispatch()
    const products = useSelector(selectProducts);

    console.log('products', products);
    dispatch(fetchProducts());
    
    useEffect(() => {
        
      }, []);

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
