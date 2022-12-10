import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Web from "../Page";

import type { Data } from "../model";

export default function App({ data }: { data: Data }) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Web changeTo="/es" model={data.en} />}
          ></Route>
          <Route
            path="/es"
            element={<Web changeTo="/" model={data.es} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}