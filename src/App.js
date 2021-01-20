import "./App.css";
const titleStore = "Pc Store";
const desc = "Where you will find the newest pc parts for your build";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title className="title">{titleStore}</title>
        <p>{desc}</p>
        <Image
          src="https://www.athomepc.co.uk/img/layerslider/homePageHeader/after.jpg"
          className="image"
          href=""
        />
      </header>
    </div>
  );
}

export default App;
