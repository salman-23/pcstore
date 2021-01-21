import styled, { createGlobalStyle } from "styled-components";

// import RobotoRegular from "./fonts/Roboto/Roboto-Regular";

// export default createGlobalStyle`
//     @font-face {
//         font-family: "Roboto", sans-serif;
//         line-height: 1.6;
//         src: local('Roboto'), local('./fonts/Roboto/Roboto-Regular'),
//         font-weight: 300;
//         font-style: normal;
//     }
// `;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const ImageSize = styled.img`
  width: 300px;
  height: 300px;
`;

export const ItemsImages = styled.img`
  display: block;
  margin: 2rem auto;
  margin-left: auto;
  margin-right: auto;
`;

export const BgSize = styled.img`
  width: 900px;
  height: 500px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const PriceSize = styled.p`
  font-size: 2rem;
  color: #203647;
`;

export const AppLogo = styled.div`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
`;

export const AppHeader = styled.header`
  background-color: #eefbfb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #203647;
`;

// export const Header = styled.header`
//   background: #203647;
//   height: 5.5rem;
//   border-bottom: 3px solid #007cc7;
// `;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


// export const AppLink = ` color: #61dafb;`;

// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }
