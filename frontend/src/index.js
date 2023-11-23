import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {App} from "./App";

window.onload = () => {
  const root = createRoot(document.querySelector('#react_root'));
  root.render(<App />)
}
