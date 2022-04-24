import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Plugins } from "./pages/Plugins";
import { About } from "./pages/About";
import { Support } from "./pages/Support";
import { Login } from "./pages/Login";
import { Impressum } from "./pages/Impressum";
import { NotFound } from "./pages/NotFound";
import { MainLayout } from "./layout/MainLayout";
import { User } from "./pages/User";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="plugins" element={<Plugins />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
