import Header from "./components/Header";
import { Route } from "react-router-dom";
import ProductPage from "./page/ProductsPage";
import useFetch from "./hook/useFetch";
import CategoriesPage from "./page/CategoriesPage";

function App() {
  const [productList, setProductList] = useFetch(
    "http://localhost:4000/products"
  );

  return (
    <>
      <Header />
      <main>
        <Route path="/products">
          <ProductPage productList={productList} />
        </Route>
        <Route path="/categories" exact>
          <CategoriesPage />
        </Route>

        <Route path="/basket" exact>
          {null}
        </Route>

        <Route path="/products/:id" exact>
          {null}
        </Route>
      </main>
    </>
  );
}

export default App;
