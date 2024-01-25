import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import {dataList} from "../../data/dataList";
import ProductCard from "./productCard";

export default function ProductsList() {
  
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
      setProducts(dataList)
  }, []);

 
  const handleChange = (event) => setSearch(event.target.value);

 
  let tabCateg = [];
  products.map((element) => {
    if (!tabCateg.includes(element.category))
      tabCateg = [...tabCateg, element.category];
  });

  return (
    <Container>
      <div style={{display:'flex', "justify-content": "center"}}>
        <div>
          <Form.Select aria-label="Default select example" value={category} onChange={(e) => { setCategory(e.target.value);}}>
            <option key="index" value="All">All</option>
            {tabCateg.map((element , id) => (
              <option key={id} value={element}>
                {element}
              </option>
            ))}
          </Form.Select>
        </div>
        <div style={{width:'55.5%', marginBottom:"70px"}}>
          <InputGroup className="mb-3" required onChange={handleChange} >
            <Form.Control placeholder="Search your product" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <Button variant="outline-secondary" id="button-addon2">Search</Button>
          </InputGroup>
        </div>
 
      </div>
     
      <Container>
      <Row xs={1} md={3} lg={4} style={{"justify-content": "center"}}>
        {products
        .filter((element) => element.name.toLowerCase().includes(search.toLowerCase()))
        .filter((element) => element.category === category || category === "All")
        .map((product, index)=>(
        <div className="m-2">
              <ProductCard key={product.id} item={product}/>
              </div>
        ))}
        </Row>
      </Container>
    </Container>  
  );
}
