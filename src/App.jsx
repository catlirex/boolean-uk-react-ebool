import Header from "./components/Header";
import { Route } from "react-router-dom";
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
      </main>
    </>
  );
}

export default App;
