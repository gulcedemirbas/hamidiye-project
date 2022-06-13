import { useState } from "react";
import ProductList from "./components/container/ProductList.js";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js"

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>Navbar</Header>
      <ProductList setCartTotal = {setCartTotal} cartTotal = {cartTotal}>Content</ProductList>
      <Footer cartTotal = {cartTotal} open= {open} setOpen = {setOpen}>Footer</Footer>
    </>
  );
}

export default App;
