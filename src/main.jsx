import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./create-trip/index.jsx";
import Header from "./components/custom/Header.jsx";
import ViewTrip from "./view-trip/[tripid]/index.jsx";
import Footer from "./components/custom/Footer.jsx";

// Router Step 1
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  {
    path: "/view-trip/:tripId",
    element: <ViewTrip />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Router Step 2 */}
    <Header />
    <RouterProvider router={router}></RouterProvider>
    <Footer />
  </React.StrictMode>
);
