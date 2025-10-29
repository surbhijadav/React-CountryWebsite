import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { About } from "./component/pages/About";
import { Contact } from "./component/pages/Contact";
import { Country } from "./component/pages/Country";
import { Home } from "./component/pages/Home";
import { AppLayout } from "./component/Layouts/AppLayout";
import { ErrorPage } from "./component/pages/ErrorPage";
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