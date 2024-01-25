import "./App.css";
import Header from "./components/header";
import ProductsList from "./components/products/productsList";
import Caroussel from "./components/caroussel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Caroussel />
      <ProductsList />
      <Footer/>
    </div>
  );
}

export default App;