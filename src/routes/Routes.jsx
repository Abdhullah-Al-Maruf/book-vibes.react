import { createBrowserRouter } from 'react-router';
import Rootlayout from '../layout/Rootlayout';
import Homepage from '../pages/home/Homepage';
import PagetoRead from '../pages/Books/PagetoRead';
import ListedBooks from '../pages/Books/ListedBooks';
import NotFoundPage from '../pages/404/NotFoundPage';


 export   const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayout,
    children:[
      
      {

      index:true ,
      Component:Homepage
    },{
      path:"/listedBook",
      Component:ListedBooks
  
    },{
      path:"/pagetoRead",
      Component:PagetoRead
    },
  
  {

    path:"*",
    Component:NotFoundPage
  }
  ]
  },
]);