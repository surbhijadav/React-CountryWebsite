import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { Home } from "./pages/Home";
import { AppLayout } from "./component/Layouts/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryInfo } from "./component/Layouts/CountryInfo";

const router = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <ErrorPage />,
    children : [
      {
        path : "/",
        element : <Home />,
      },
      {
        path : "about",
        element : <About />,
      },
      {
        path : "country",
        element : <Country />,
      },
      {
        path : "country/:id",
        element : <CountryInfo />,
      },
      {
        path : "contact",
        element : <Contact />,
      },
    ]
  }
]);

const App = () => {

  return(
    <RouterProvider router={router}>
     
    </RouterProvider>
  )
};

export default App;