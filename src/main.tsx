import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import { Toaster } from "sonner";

import App from "./App.tsx";
import client from "./apolloClient.ts";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Toaster />
      <App />
    </ApolloProvider>
  </StrictMode>
);
