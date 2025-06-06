
import './App.css';
import Home from './pages/Home/Home';
import Land from './pages/Land/Land';
import Detail from './pages/Detail/Detail';
// import {loader as rootLoader} from "./routes/root"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Land />,
      // loader: rootLoader,
      children: [
        {
          path: "detail/:id",
          element: <Detail/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Land /> */}
    </div>
  );
}

export default App;
