import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from "../store/CartSlice";

export default function Cart(){
const cartProducts= useSelector((state)=> state.cart.value)
const dispatch= useDispatch();
const removeToCart =(id)=>{
    dispatch(remove(id))
}
console.log(cartProducts);


const addedItems= cartProducts.map((cartProduct)=>{
    return(
        <div  key={cartProduct.id} className="col-md-3" style={{marginBottom:"10px"} }>
        <Card  className="h-100">
        <div className="text-center">
        <Card.Img variant="top" src={cartProduct.images} style={{width:"100px", height:"130px"}} />
        </div>
        <Card.Body>
          <Card.Title>{cartProduct.title}</Card.Title>
          <Card.Text>INR : {cartProduct.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{background:"white"}}>
        <Button variant="danger" onClick={()=> removeToCart(cartProduct.id)}>Remove</Button>
        </Card.Footer>
      </Card>
      </div>
    )
    })

    return (
        <>
        <h1>Cart</h1>
        {addedItems}
        </>
    )
}
    
