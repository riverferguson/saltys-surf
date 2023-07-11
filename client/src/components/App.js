import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import ProductPage from "./ProductPage";
import Footer from "./Footer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import Cart from "./Cart";
import ProductForm from "./ProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const onSign = (user) => setUser(user);
  const [ category, setCategory ] = useState('all')
  const [ filteredItems, setFilteredItems ] = useState([])

  useEffect(() => {
    fetch("/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      setFilteredItems(data)
    });
  }, [])

  useEffect(() => {
    const filtered = products.filter(product => {
      if (category === 'all') {
        return true;
      } else {
        return product.category === category;
      }
    });
    setFilteredItems(filtered);
  }, [products, category]);

  useEffect(() => {
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        // setUser(current => !current)
      } else {
        setUser(null)
      }
    });
  }, []);

  const deleteItem = (id) => {
    console.log(id)
    const updatedItems = products.filter(product => product.id !== id)
    setProducts(updatedItems)
  }

  const onAddItem = (newProduct) => {
    const updatedItems = [...products, newProduct]
    setProducts(updatedItems)
  }

  const handleFilter = (value) => {
    setCategory(value)
  }

  return (
    <main>
      <Nav user={user} />
      <Switch>
        <Route exact path="/signin">
          <SignIn  onSign={onSign}/>
        </Route>
        <Route path="/signout">
          <SignOut onSign={onSign} />
        </Route>
        <Route exact path="/signup">
          <SignUp  onSign={onSign}/>
        </Route>
        <Route exact path="/products">
          <ProductPage products={products} filteredItems={filteredItems} handleFilter={handleFilter} user={user} deleteItem={deleteItem}/>
        </Route>
        <Route>
          <Cart exact path='/cart'/>
        </Route>
        <Route>
          <ProductForm path="/products/new"/>
        </Route>
      </Switch>
      <Footer />
    </main>
  );
}

export default App;