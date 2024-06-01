import { Outlet } from "react-router-dom";
// Xx: Outlet is a placeholder used to tell react where to load the content of the nested routes
// Xx: Outlet should be put where the nested route content should be loaded/injected

import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
