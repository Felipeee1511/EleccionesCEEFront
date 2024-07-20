import React, { Suspense, useState } from "react";

import RouterApp from "./router";
import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterApp />
      </Suspense>
    </>
  );
}

export default App;
