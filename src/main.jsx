import React from "react";
import { createRoot } from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet, // Add Outlet import
} from "react-router-dom";
import Dashboard from "./Routes/Dashboard";
import Navbar from "./Components/Navbar";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet /> {/* Use Outlet to render nested routes */}
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <h1>Dashboard</h1>
          </div>
        ),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "patients",
        element: <div>Patients</div>,
      },
      {
        path: "prescription",
        element: <div>Prescription</div>,
      },
      {
        path: "appointments",
        element: <div>Appointments</div>,
      },
      {
        path: "account",
        element: <div>Account Details</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
