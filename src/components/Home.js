import { Title, Description, BgSize, AppHeader, Header } from "../styles";

const titleStore = "Pc Store";
const desc = "Where you will find the newest pc parts for your build";

const HomePage = () => {
  return (
    // <Header>
    <AppHeader>
      <div>
        <Title>{titleStore}</Title>
      </div>
      <div>
        <Description>{desc}</Description>
      </div>
      <div>
        <BgSize
          src="https://www.athomepc.co.uk/img/layerslider/homePageHeader/after.jpg"
          alt=""
        />
      </div>
    </AppHeader>
    // </Header>
  );
};

export default HomePage;
