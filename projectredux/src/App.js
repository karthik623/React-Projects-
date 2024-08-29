import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Product } from './components/Products';
import "bootstrap/dist/css/bootstrap.min.css"
import RootLayout from "./components/RootLayout";
import Dashboard from './components/Dashboard';
import Cart from "./components/Cart"
function App() {
const router= createBrowserRouter([
  {
    index:"/",
    element:<RootLayout />,
    children:[
      {
        index: "/",
        element:<Dashboard />
      },
      {
      path:"/products",
      element:<Product />
      },
      {
        path:"/Cart",
        element:<Cart />
      }
    ]
  },
])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;