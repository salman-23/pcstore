import "./App.css";
import products from "./products";

const titleStore = "Pc Store";
const desc = "Where you will find the newest pc parts for your build";

const productsList = products.map((product) => (
  <tr>
    <th>{product.image}</th>
    <td>{product.name}</td>
    <td>{product.price}</td>
  </tr>
));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>{titleStore}</h1>
        </div>
        <div>
          <p>{desc}</p>
        </div>
        <div></div>

        <div>
          <table className>
            <tbody>
              <tr>
                <td>{productsList}</td>
                <td>productsList</td>
              </tr>
              {/* <tr>
                <td>Name</td>
                <td>Price</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
