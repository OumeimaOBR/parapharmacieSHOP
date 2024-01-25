import { useState } from "react";
import { Button, Card,  } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/cartSlice";

export default function ProductCard(props) {
  const { name, category, underCategory, brand, brandImg, id, price } = props.item;
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Card className="product-card" id={id}>
      <Card.Img variant="top" src={brandImg} style={{height:'300px', width:'100%', }}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{underCategory}</Card.Text>
        <Card.Text style={{fontWeight:'bold'}}>{brand}</Card.Text>
       
      <Card.Title>{price} dt</Card.Title>
      <Button   onClick={() => handleAddToCart(props.item)}>
      Add Product
      </Button>
    </Card.Body>
    </Card>
  );
}
