import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import { AllRoutes } from "./routes";

function App() {
  return (
    <div className="app">
      <AllRoutes />
      <Toaster />
      <p className="text-center font-medium italic mb-3">
        &copy; {new Date().getFullYear()} PRO CLUB TEAM
      </p>
    </div>
  );
}

export default App;
