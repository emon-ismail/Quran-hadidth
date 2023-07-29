import { createBrowserRouter } from 'react-router-dom'



import Main from '../layout/Main'
import About from '../components/about'
import SurahList from '../components/SurahList'




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
      
    
    ],
  },
])

export default router