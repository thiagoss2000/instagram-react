import reactDom from "react-dom";
import Pagina from "./Pagina";

const render = Pagina();
const divRoot = document.querySelector(".root");

reactDom.render(render, divRoot);