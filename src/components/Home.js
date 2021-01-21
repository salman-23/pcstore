import "../App.css";
const titleStore = "Pc Store";
const desc = "Where you will find the newest pc parts for your build";

const HomePage = () => (
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
    </header>
  </div>
);

export default Home;
