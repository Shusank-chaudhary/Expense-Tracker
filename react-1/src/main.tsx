import { createRoot } from "react-dom/client";
import "./assets/css/global.css";
import RouterConfig from "./router/Router.tsx";
import AuthProvider from "./context/provider/Authprovider.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <>
   <AuthProvider>
    <Toaster richColors />
    <RouterConfig />
   </AuthProvider> 
  </>
)
