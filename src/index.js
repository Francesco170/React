import { Hello } from "./Hello";
import  ReactDOM  from "react-dom";


const HelloElement= <Hello />


const root= document.querySelector('#root')
ReactDOM.render(HelloElement, root)

