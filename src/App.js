import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Sign_up from "./Pages/sign up/Index";
import Login from "./Pages/Login/Index";



const router = createBrowserRouter([

  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Sign_up/>
  },
 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
