import "./App.css";
const titleStore = "Pc Store";
const desc = "Where you will find the newest pc parts for your build";

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
        <div>
          <img
            src="https://static.techspot.com/images2/news/bigimage/2017/05/2017-05-02-image-2.jpg"
            alt=""
          />
        </div>
      </header>
    </div>
  );
}

export default App;
