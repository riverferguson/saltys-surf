import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import ProductPage from "./ProductPage";
import Footer from "./Footer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const onSign = (user) => setUser(user);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

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
          <ProductPage products={products} />
        </Route>
        <Route>
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
}

export default App;