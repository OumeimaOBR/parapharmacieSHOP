import carousel1 from '../assets/Caroussel/ecransSolaires.jpg';
import carousel2 from '../assets/Caroussel/mustelaProducts.jpeg';
import carousel3 from '../assets/Caroussel/nettoyants.jpg'
import carousel4 from '../assets/Caroussel/rosebaie-tunisie.jpg'
import Carousel from 'react-bootstrap/Carousel';

export default function CarousselMain() {
  
    return (
      <div>
      <Carousel style={{marginBottom:'80px'}}>
        <Carousel.Item style={{position:'relative'}}>
          <img src={carousel1} style={{width:'1320px', height:'650px'}} alt="carousel-img" />
          <div  style={{position:'absolute', top:'150px', left:'400px', width:'74%', zIndex:'2'}}>
          </div>
          <div  style={{position:'absolute', width:'700px', height:'350px', top:'150px', left:'200px', backgroundColor:'#FAFAFA', borderRadius:'20px', opacity: '0.5'}}>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel2} style={{width:'1320px', height:'650px'}} alt="carousel-img" />
          <div style={{position:'absolute', top:'150px', left:'200px', width:'74%', zIndex:'2'}}>
            </div>
          <div  style={{position:'absolute', width:'1000px', height:'350px', top:'150px', left:'400px', backgroundColor:'#FAFAFA', borderRadius:'20px', opacity: '0.5'}}>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel3} style={{width:'1320px', height:'650px'}} alt="carousel-img" />
            <div style={{position:'absolute', top:'150px', left:'200px', width:'74%', zIndex:'2'}}>
           
          </div>
          <div  style={{position:'absolute', width:'1000px', height:'350px', top:'150px', left:'200px', backgroundColor:'#FAFAFA', borderRadius:'20px', opacity: '0.5'}}>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{position:'relative'}}>
          <img src={carousel4} style={{width:'1320px', height:'650px'}} alt="carousel-img" />
          <div  style={{position:'absolute', top:'150px', left:'400px', width:'74%', zIndex:'2'}}>
          </div>
          <div  style={{position:'absolute', width:'700px', height:'350px', top:'150px', left:'200px', backgroundColor:'#FAFAFA', borderRadius:'20px', opacity: '0.5'}}>
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
    )
  }
  