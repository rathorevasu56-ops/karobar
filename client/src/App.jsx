import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyOTP from './pages/VerifyOTP';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import UserProfile from './pages/UserProfile';
import SearchResults from './pages/SearchResults';
import Wishlist from './pages/Wishlist';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import ManageProducts from './pages/ManageProducts';
import ManageOrders from './pages/ManageOrders';
import CreateCoupon from './pages/CreateCoupon';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import SellerDashboard from './pages/SellerDashboard';
import SellerProducts from './pages/SellerProducts';
import SellerOrders from './pages/SellerOrders';
import AddProduct from './pages/AddProduct';
import RegisterSeller from './pages/RegisterSeller';
import DeliveryTracking from './pages/DeliveryTracking';
import Notifications from './pages/Notifications';
import LiveSupport from './pages/LiveSupport';
import ProtectedRoute from './components/ProtectedRoute';
import { loginSuccess, logout } from './redux/authSlice';
import { loadUser } from "./redux/authSlice";
function App() {
  
const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadUser());
}, [dispatch]);
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/register-seller" element={<RegisterSeller />} />

          {/* Protected customer routes */}
          <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
          <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
          <Route path="/support" element={<ProtectedRoute><LiveSupport /></ProtectedRoute>} />
          <Route path="/track/:orderId" element={<ProtectedRoute><DeliveryTracking /></ProtectedRoute>} />

          {/* Seller routes */}
          <Route path="/seller" element={<SellerDashboard />} />
          <Route path="/seller/products" element={<ProtectedRoute sellerOnly><SellerProducts /></ProtectedRoute>} />
          <Route path="/seller/orders" element={<ProtectedRoute sellerOnly><SellerOrders /></ProtectedRoute>} />
          <Route path="/seller/add-product" element={<ProtectedRoute sellerOnly><AddProduct /></ProtectedRoute>} />
          <Route path="/seller/coupons" element={<ProtectedRoute sellerOnly><CreateCoupon /></ProtectedRoute>} />
          <Route path="/seller/analytics" element={<ProtectedRoute sellerOnly><AnalyticsDashboard /></ProtectedRoute>} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ProtectedRoute adminOnly><ManageProducts /></ProtectedRoute>} />
          <Route path="/admin/orders" element={<ProtectedRoute adminOnly><ManageOrders /></ProtectedRoute>} />
          <Route path="/admin/coupons" element={<ProtectedRoute adminOnly><CreateCoupon /></ProtectedRoute>} />
          <Route path="/admin/analytics" element={<ProtectedRoute adminOnly><AnalyticsDashboard /></ProtectedRoute>} />
         

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;