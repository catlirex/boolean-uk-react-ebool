import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Route path="/products" exact>
          {null}
        </Route>
        <Route path="/basket" exact>
          {null}
        </Route>
        <Route path="/categories" exact>
          {null}
        </Route>
      </main>
    </>
  );
}

export default App;
