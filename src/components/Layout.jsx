import { AppBar } from "components/AppBar/AppBar"
// import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import { Suspense } from "react";


export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  )
}
