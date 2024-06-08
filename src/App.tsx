import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Chart from "./Line_chart"

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/DevDynamics_sarveshPatil/",
      element: <Layout />,
      children: [
        {
          path: "/DevDynamics_sarveshPatil/",
          element: <Home />,
        },
        {
          path: "/DevDynamics_sarveshPatil/users",
          element: <Users />,
        },
        {
          path: "/DevDynamics_sarveshPatil/products",
          element: <Products />,
        },
        {
          path: "/DevDynamics_sarveshPatil/users/:id",
          element: <User />,
        },
        {
          path: "/DevDynamics_sarveshPatil/products/:id",
          element: <Product />,
        },
        {
          path: "/DevDynamics_sarveshPatil/chart/",
          element: <Chart />,
        },
        
      ],
    },
    {
      path: "/DevDynamics_sarveshPatil/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
