import './App.css';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import Users from './pages/Users/Users.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/users',
      element:<Users/>
    },
    {
      path:'/products',
      element:<Products/>
    },
  ]
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
