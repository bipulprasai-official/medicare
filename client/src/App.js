import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Residents from "./pages/Residents/Residents";
import ResidentProfile from "./pages/Resdientsprofile/ResidentProfile";
import Progressnote from "./pages/Progressnote/Progressnote";
import "./App.scss";
import PersonalCare from "./pages/Personalcare/PersonalCare";
import Layout from "./layout/Layout";
import Fluidchart from "./pages/FluidChart/Fluidchart";
import Foodchart from "./pages/FluidChart/Foodchart";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/residents/:categoryId",
    element: (
  
        <Residents />
    ),
  }, // list of residents
  {
    path: "/resident/:patientId",
    element: (
      <Layout>
        <ResidentProfile />
      </Layout>
    ),
  }, // residents dashboard
  {
    path: "/resident/:patientId/progressnote",
    element: (
      <Layout>
        <Progressnote />
      </Layout>
    ),
  },
  {
    path: "/resident/:patientId/fluidchart",
    element: (
      <Layout>
        <Fluidchart />
      </Layout>
    ),
  },
  {
    path: "/resident/:patientId/foodchart",
    element: (
      <Layout>
        <Foodchart />
      </Layout>
    ),
  },
  
  // // { path:'/other',element:<Other/>}
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
