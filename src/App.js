import "./App.css";
import products from "./products";

const titleStore = "Pc Store";
const desc = "Where you will find the newest pc parts for your build";

function App() {
  const productsList = products.map((product) => {
    return (
      <div>
        <img className="image-size" src={product.image} alt="" />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>{titleStore}</h1>
        </div>
        <div>
          <p>{desc}</p>
        </div>
        <div>
          <img
            className="bg-size"
            src="https://www.athomepc.co.uk/img/layerslider/homePageHeader/after.jpg"
            alt=""
          />
        </div>

        <div>{productsList}</div>
      </header>
    </div>
  );
}

export default App;
