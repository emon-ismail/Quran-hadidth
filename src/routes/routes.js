import { createBrowserRouter } from 'react-router-dom'
// import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
// import Login from '../components/Login'
// import Register from '../components/Register'
import Main from '../layout/Main'
import About from '../components/about'
import SurahList from '../components/SurahList'

// import Profile from '../components/Profile'
// import PrivateRoute from './PrivateRoute'
// import Courses from '../components/Courses'

// import Faq from '../components/Faq'
// import Blog from '../components/Blog'
// import Checkout from '../components/Checkout'
// import SeeDetails from '../components/SeeDetails'
// import SeeAllReview from '../components/SeeAllReview'
// import MyReview from '../components/MyReview'
// import AddService from '../components/AddService'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    // errorElement: <ErrorPage />,
   
   
    children: [
      {
        path: '/',
        element: <SurahList />,
      },
      {
        path: '/home',
        element: <SurahList />,
      },
      {
        path:'/about',
        element:<About></About>
      }
      
    //   {
    //     path: '/checkout/:id',
    //     element: <Checkout></Checkout>,
    //     loader: ({params})=> fetch(`https://assignment-11-server-fjjt0yfhy-emon-ismail.vercel.app/services/${params.id}`)
    //   },
    //   {
    //    path:'/seeMore',
    //    element:<SeeDetails></SeeDetails>
    //   },



    //   {
    //     path:'/faq',
    //     element:<Faq></Faq>
    //   },
    //   {
    //     path:'/addService',
    //     element:<AddService></AddService>
    //   },

    //   {
    //     path:'/myReview',
    //     element:<MyReview></MyReview>,
     
    //   },
    //   {
    //     path:'/blog',
    //     element:<Blog></Blog>,
    //   },
    //   {
    //     path:'/seeAllreview',
    //     element:<SeeAllReview></SeeAllReview>
    //   },
   
    //   {
    //     path: '/login',
    //     element: <Login />,
    //   },
    //   {
    //     path: '/register',
    //     element: <Register />,
    //   },
    //   {
    //     path: '/courses',
    //     element: (
    //       <PrivateRoute>
           
    //         <Courses></Courses>
    //       </PrivateRoute>
    //     ),
    //   },
    //   {
    //     path: '/profile',
    //     element: (
    //       <PrivateRoute>
    //         <Profile />
    //       </PrivateRoute>
    //     ),
    //   },
    ],
  },
])

export default router