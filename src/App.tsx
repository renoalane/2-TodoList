import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import { TodoProvider } from "./TodoContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

function App() {
  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  );
}

export default App;
