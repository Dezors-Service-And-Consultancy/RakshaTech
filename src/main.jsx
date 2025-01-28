import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "./index.css";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
//query client
const queryClient = new QueryClient();
root.render(
   <StrictMode>
    
    <QueryClientProvider client={queryClient}> 
      <App />
    </QueryClientProvider>
   </StrictMode>
);
