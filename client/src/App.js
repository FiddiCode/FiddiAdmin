import './styles/global.scss ';
import Home from './pages/Home/Home.jsx ';
import Products from './pages/Products/Products.jsx';
import Users from './pages/Users/Users.jsx ';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Menu from './components/Menu/Menu';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product.jsx';
import User from './pages/User/User.jsx';
import { RouterProvider, createBrowserRouter,Outlet} from 'react-router-dom'

function App() {

  const Layout =()=>{
    return(
      <div className='main'>
        <Navbar/>
        <div className='container'>
          <div className='menuContainer'>
            <Menu/>
          </div>
          <div className='contentContainer'>
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/home',
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
        {
          path: "/users/:id",
          element: <User/>,
        },
        {
          path: "/products/:id",
          element: <Product/>,
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]);

  return   <RouterProvider router={router}/>;
}

export default App;
