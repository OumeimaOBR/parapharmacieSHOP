import { useState } from "react";
import {Badge, Container, Offcanvas}  from "react-bootstrap";
import { useSelector } from "react-redux";
import Cart from "./cart";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div onClick={handleShow}>
        <div style={{position:'relative'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <Badge bg="danger" style={{position:'absolute', left:'0', top:'-5px', backgroundColor:'#DC3545'}}>{cart.cartItems.length}</Badge>
        </div>
      </div>
      <Offcanvas show={show} placement="end" onHide={handleClose} >
        <Container  style={{paddingLeft:'40px', display:'flex', paddingTop:'40px', marginBottom:'0px' }}>
        <h5>Mon panier</h5>
        <div style={{display:'flex'}}>
        <h5 style={{paddingLeft:'90px',paddingRight:'8px', color:'gray', cursor:'pointer'}} onClick={handleClose}>close</h5>
            <div style={{color:'gray', paddingTop:'0px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </div>
        </div>
        </Container>
        <Offcanvas.Body>
         <Cart />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}