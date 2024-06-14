import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/HomePage.jsx"));
const FormDetails = lazy(() => import("./pages/FromPage.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Home page</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/form"
          element={
            <Suspense fallback={<div>Loading Form page...</div>}>
              <FormDetails />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
