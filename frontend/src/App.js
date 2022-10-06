import React from "react";

import AppRoutes from "./AppRoutes";

import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
