import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App2 from "./App2_useMemo";
// import App3 from "./App3_context";
// import App4 from "./App4_useContext";
// import {DarkMode} from "./DarkMode";
// import ClassLifeCycle from "./ClassLifeCycle";
// import Wrap from "./HookLifeCycle";
import LayoutEffect from "./LayoutEffect"
// import 복습 from "./복습_useMemo"



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LayoutEffect />);
