import { AppBar } from "components/AppBar/AppBar"
// import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import styled from 'styled-components'

import { Suspense } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 30px 0;
  max-width:700px;
  margin: 0 auto;
`;

export const Layout = () => {

  return (
    <Wrapper>
      <AppBar />
      <Suspense>
        <Outlet />

      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </Wrapper>
  )
}
