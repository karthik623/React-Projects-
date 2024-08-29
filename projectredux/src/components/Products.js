import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/CartSlice";
import { json } from "react-router-dom";


export const Product= ()=>{
    // const [products, setProducts] = useState([])
    const dispatch= useDispatch()
    const productsFromApi= useSelector((state)=> state.cart.products)
    console.log(productsFromApi);
    
    useEffect(()=>{
        // fetch("https://fakestoreapi.com/products")
        // .then(res=> res.json())
        // .then(data => setProducts(data))
        // console.log(products);
            // const res= await fetch("https://api.escuelajs.co/api/v1/products");
            // const data= await res.json();
            dispatch(getProducts())
            //setProducts(productsFromApi)
    },[])
    
    const cards= productsFromApi.map((product)=>{ 
        return (
        <div  key={product.id} className="col-md-3" style={{marginBottom:"10px"} }>
        <Card  className="h-100">
        <div className="text-center">
        <Card.Img variant="top" src={product.images} style={{width:"100px", height:"130px"}} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR : {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{background:"white"}}>
        <Button variant="primary" onClick={()=> dispatch(add(product))}>Add to Cart</Button>
        </Card.Footer>
      </Card>
      </div>
        )
    })
    
    return (
        <div>
        <h1>Product Dashboard</h1>
        <div className="row">
        {/* {JSON.stringify(productsFromApi)} */}
        {cards}
        </div>
        </div>
    ) 
}