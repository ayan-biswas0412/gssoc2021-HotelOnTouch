
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  text: "black",
};

export const darkTheme = {
  body: "#000",
  text: "#ff005c",


};


export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};


	}
`;
