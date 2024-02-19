import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/home";
import Result from "../pages/result";
import Signin from "../pages/signin";
import Create from "../pages/create";
import Reset from "../pages/Reset";
import Shoppinga from "../pages/shoppinga";
import Shoppingb from "../pages/shoppingb";
import Shipping from "../pages/shipping";
import Check from "../pages/check";
import Checkb from "../pages/checkb";
import Checkc from "../pages/checkc";
import Checkd from "../pages/checkd";
import Modal from "../components/receipt/Modal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/Result", element: <Result /> },
      { path: "/signin", element: <Signin />  },
      { path: "/signup", element: <Create />  },
      { path: "/reset", element: <Reset />  },
      { path: "/shoppinga", element: <Shoppinga  />  },
      { path: "/shoppingb", element: <Shoppingb />   },
      { path: "/shipping", element: <Shipping />   },
      { path: "/check", element: <Check/>   },
      { path: "/checkb", element: <Checkb />   },
      { path: "/checkc", element: <Checkc />   },
      { path: "/checkd", element: <Checkd />   },
      { path: "/modal", element: <Modal />   },


    ],
  },
]);
