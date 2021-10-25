import { useState } from "react";
import data from "./data.json";

import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="grid-container">
      <header className="App-header">
        <a href="/">React shopping cart</a>
      </header>
      <main>
        <div className="content">
          <section className="main">
            <Products products={products} />
          </section>
          <aside className="sidebar">Cart Items</aside>
        </div>
      </main>
      <footer>All right reserved to &copy; sharan</footer>
    </div>
  );
}

export default App;
