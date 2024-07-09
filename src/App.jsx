import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigate from "./pages/Navigate.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/navigate", element: <Navigate /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} basename={process.env.PUBLIC_URL} />
    </>
  );
}
export default App;
