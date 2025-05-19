import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import CartPage from "../Pages/Books/CartPage";
import CheckoutPage from "../Pages/Books/CheckoutPage";
import SingleBook from "../Pages/Books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../Pages/Books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../Components/AdminLogin";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <div>Home</div>,
//       },
//       {
//         path: "/orders",
//         element: <div>Orders</div>,
//       },
//       {
//         path: "/about",
//         element: <div>About</div>,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route
          path="orders"
          element={
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          }
        />
        <Route path="about" element={<div>About</div>} />
        <Route path="cart" element={<CartPage />} />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="books">
          <Route path=":id" element={<SingleBook />} />
        </Route>
      </Route>
      {/* Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <DashboardLayout />
          </AdminRoute>
        }
      >
        <Route
          path=""
          element={
            <AdminRoute>
              <div>Dashbord Home</div>
            </AdminRoute>
          }
        />
        <Route
          path="add-new-book"
          element={
            <AdminRoute>
              <div>Add New Book</div>
            </AdminRoute>
          }
        />
        <Route
          path="edit-book/:id"
          element={
            <AdminRoute>
              <div>Edit Book</div>
            </AdminRoute>
          }
        />
        <Route
          path="manage-books"
          element={
            <AdminRoute>
              <div>Manage Books</div>
            </AdminRoute>
          }
        />
      </Route>
      <Route path="/admin" element={<AdminLogin />} />
    </>
  )
);

export default router;
