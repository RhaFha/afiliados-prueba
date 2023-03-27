import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./index.css";

  import ConsultAffiliation from './projects/consult-affiliation/pages/ConsultAffiliation';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ConsultAffiliation />,
    },
  ]);

  const Routes = () => {
    return ( 
        <RouterProvider router={router} />
     );
  }
   
  export default Routes;