import React from 'react';
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import router from "./router";
import {RouterProvider} from "react-router-dom";

export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
