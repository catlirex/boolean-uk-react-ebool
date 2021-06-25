import Header from "./components/Header";
import { Route, Redirect } from "react-router-dom";
import ProductPage from "./page/ProductsPage";
import useFetch from "./hook/useFetch";
import CategoriesPage from "./page/CategoriesPage";
import ProductDetailPage from "./page/ProductDetailPage";
import { useState } from "react";
import BasketPage from "./page/BasketPage";

function App() {
  const [productList] = useFetch("http://localhost:4000/products");
  const [basketList, setBasketList] = useState([]);

  return (
    <>
      <Header />
      <main>
        <Route path="/" exact>
          <Redirect to="/products" />
        </Route>

        <Route path="/products" exact>
          <ProductPage productList={productList} />
        </Route>
        <Route path="/categories" exact>
          <CategoriesPage />
        </Route>

        <Route path="/basket" exact>
          <BasketPage
            basketList={basketList}
            productList={productList}
            setBasketList={setBasketList}
          />
        </Route>

        <Route path="/products/:id" exact>
          <ProductDetailPage
            productList={productList}
            setBasketList={setBasketList}
            basketList={basketList}
          />
        </Route>

        <Route path="/categories/:id" exact>
          <ProductPage productList={productList} />
        </Route>

        <Route path="/404notfound" exact>
          <h2>Page not found!! What are you looking for?</h2>
        </Route>
      </main>
    </>
  );
}

export default App;
