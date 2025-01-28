import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "./index.css";
import App from "./App.jsx";
import Registration from "./Registration.jsx";
// import {router} from 'react-dom'


const root = ReactDOM.createRoot(document.getElementById("root"));
//query client
const queryClient = new QueryClient();
root.render(
  // <React.StrictMode>
   <StrictMode>
    
    <QueryClientProvider client={queryClient}> 
      <App />
    </QueryClientProvider>
   </StrictMode>
  // </React.StrictMode>
);
