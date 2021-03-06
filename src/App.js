import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/pages/Blogs";
import Home from "./components/pages/Home/Home";
import MyPortfolio from "./components/pages/MyPortfolio";
import NotFound from "./components/shared/NotFound";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Purchase from "./components/pages/Purchase";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import MyProfile from "./components/pages/Dashboard/MyProfile";
import MyOrders from "./components/pages/Dashboard/MyOrders/MyOrders";
import AddAReview from "./components/pages/Dashboard/AddAReview";
import MakeAdmin from "./components/pages/Dashboard/Admin/MakeAdmin";
import RequireAdmin from "./components/pages/Auth/RequireAdmin";
import RequireAuth from "./components/pages/Auth/RequireAuth";
import ManageOrders from "./components/pages/Dashboard/Admin/ManageOrders";
import AddPart from "./components/pages/Dashboard/Admin/AddProduct";
import ManageProducts from "./components/pages/Dashboard/Admin/ManageProducts";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route
          path="purchase/:partId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="addareview" element={<AddAReview></AddAReview>} />
          <Route path="myorders" element={<MyOrders></MyOrders>} />
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          />
          <Route path="manageorders" element={<ManageOrders></ManageOrders>} />
          <Route path="addpart" element={<AddPart></AddPart>} />
          <Route
            path="manageproducts"
            element={<ManageProducts></ManageProducts>}
          />
        </Route>
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="signin" element={<SignIn></SignIn>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App;
