import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  FaShoppingCart, FaUser, FaBars, FaHeart,
  FaChartBar, FaStore, FaHome, FaBoxOpen,
  FaSearch, FaChevronDown, FaBell, FaMapMarkerAlt,
} from "react-icons/fa";
import { logout } from "../redux/authSlice";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";


const CATEGORIES = [
  { label: "Home", to: "/", icon: <FaHome /> },

  { label: "Men", to: "/" },

  { label: "Women", to: "/" },

  { label: "Kids", to: "/" },

  { label: "Footwear", to: "/" },

  { label: "Accessories", to: "/" },

  { label: "New Arrivals", to: "/" },

  { label: "Sale 🔥", to: "/" },

  { label: "Seller", to: "/seller", icon: <FaStore /> },
];



const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo =
  JSON.parse(localStorage.getItem("userInfo"));
  const cartItems = useSelector((state) => state?.cart?.cartItems) || [];
  const user =
  JSON.parse(localStorage.getItem("userInfo"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {

  localStorage.removeItem("userInfo");

  dispatch(logout());

  navigate("/login");

  window.location.reload();
};

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="sticky top-0 z-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── TOP BAR ── */}
      <div style={{ background: "#1a2e44", color: "#fff" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", height: "70px" }}>

            {/* LOGO */}
            <Link to="/" style={{
              color: "#fff", textDecoration: "none", fontSize: "28px",
              fontWeight: 800, letterSpacing: "-0.5px", flexShrink: 0,
            }}>
              karo<span style={{ color: "#f90" }}>bar</span>
            </Link>

            {/* DELIVER TO */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0, cursor: "pointer", marginLeft: "8px" }}>
              <FaMapMarkerAlt style={{ color: "#f90", fontSize: "15px" }} />
              <div>
                <div style={{ fontSize: "11px", color: "#aaa" }}>Deliver to</div>
                <div style={{ fontWeight: 600, color: "#fff", fontSize: "13px" }}>India</div>
              </div>
            </div>

            {/* SEARCH BAR */}
            <div style={{ flex: 1, display: "flex", margin: "0 16px" }}>
              <div style={{ display: "flex", width: "100%", borderRadius: "8px", overflow: "hidden", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
                <select style={{
                  background: "#e8e8e8", border: "none", padding: "0 12px",
                  fontSize: "13px", color: "#333", cursor: "pointer", outline: "none",
                  borderRight: "1px solid #ccc", minWidth: "90px",
                }}>
                  <option>All</option>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
                  <option>Footwear</option>
                </select>
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  style={{
                    flex: 1, border: "none", padding: "12px 16px",
                    fontSize: "15px", outline: "none", color: "#333",
                  }}
                />
                <button style={{ background: "#f90", border: "none", padding: "0 20px", cursor: "pointer" }}>
                  <FaSearch style={{ color: "#333", fontSize: "18px" }} />
                </button>
              </div>
            </div>

            {/* RIGHT ICONS */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexShrink: 0 }}>

              {/* NOTIFICATIONS */}
              <Link to="/" style={{ color: "#fff", position: "relative" }}>
                <FaBell size={22} />
              </Link>

              {/* WISHLIST */}
              <Link to="/wishlist" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "7px" }}>
                <FaHeart size={22} />
                <div style={{ fontSize: "13px", lineHeight: 1.3 }}>
                  <div style={{ color: "#aaa", fontSize: "11px" }}>Your</div>
                  <div style={{ fontWeight: 600 }}>Wishlist</div>
                </div>
              </Link>

              {/* ORDERS */}
              <Link to="/orders" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "7px" }}>
                <FaBoxOpen size={22} />
                <div style={{ fontSize: "13px", lineHeight: 1.3 }}>
                  <div style={{ color: "#aaa", fontSize: "11px" }}>Returns &</div>
                  <div style={{ fontWeight: 600 }}>Orders</div>
                </div>
              </Link>

              {/* CART */}
              <Link to="/cart" style={{ color: "#fff", textDecoration: "none", position: "relative", display: "flex", alignItems: "center", gap: "7px" }}>
                <div style={{ position: "relative" }}>
                  <FaShoppingCart size={26} />
                  {cartItems.length > 0 && (
                    <span style={{
                      position: "absolute", top: "-9px", right: "-9px",
                      background: "#f90", color: "#111", borderRadius: "50%",
                      width: "20px", height: "20px", fontSize: "11px", fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {cartItems.length}
                    </span>
                  )}
                </div>
                <span style={{ fontWeight: 700, fontSize: "15px" }}>Cart</span>
              </Link>

              {/* USER DROPDOWN */}
              {userInfo ? (
                <div ref={dropdownRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: "8px", color: "#fff",
                    }}
                  >
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "50%",
                      background: "#f90", display: "flex", alignItems: "center",
                      justifyContent: "center", fontWeight: 700, fontSize: "15px", color: "#111",
                    }}>
                      {userInfo.name?.[0]?.toUpperCase()}
                    </div>
                    <div style={{ textAlign: "left", fontSize: "13px", lineHeight: 1.3 }}>
                      <div style={{ color: "#aaa", fontSize: "11px" }}>Hello,</div>
                      <div style={{ fontWeight: 600 }}>{userInfo.name.split(" ")[0]}</div>
                    </div>
                    <FaChevronDown size={11} style={{ opacity: 0.7 }} />
                  </button>

                  {dropdownOpen && (
                    <div style={{
                      position: "absolute", right: 0, top: "calc(100% + 12px)",
                      background: "#fff", borderRadius: "10px", minWidth: "220px",
                      boxShadow: "0 6px 24px rgba(0,0,0,0.18)", overflow: "hidden", zIndex: 100,
                    }}>
                      <div style={{ padding: "14px 18px", borderBottom: "1px solid #eee", background: "#fafafa" }}>
                        <div style={{ fontWeight: 600, color: "#111", fontSize: "15px" }}>{userInfo.name}</div>
                        <div style={{ color: "#888", fontSize: "13px" }}>{userInfo.email}</div>
                      </div>
                      {[
                        { label: "My Profile", to: "/profile" },
                        { label: "My Orders", to: "/orders" },
                        { label: "Wishlist", to: "/wishlist" },
                        { label: "Notifications", to: "/notifications" },
                        { label: "Admin Panel", to: "/admin" },
                        { label: "Analytics", to: "/admin/analytics" },
                      ].map(({ label, to }) => (
                        <Link key={to} to={to}
                          onClick={() => setDropdownOpen(false)}
                          style={{ display: "block", padding: "11px 18px", color: "#333", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f0f0f0" }}
                          onMouseEnter={e => e.target.style.background = "#f5f5f5"}
                          onMouseLeave={e => e.target.style.background = "transparent"}
                        >
                          {label}
                        </Link>
                      ))}
                      <button
                        onClick={handleLogout}
                        style={{ display: "block", width: "100%", textAlign: "left", padding: "11px 18px", background: "none", border: "none", cursor: "pointer", color: "#c0392b", fontSize: "14px", fontWeight: 600 }}
                        onMouseEnter={e => e.target.style.background = "#fff5f5"}
                        onMouseLeave={e => e.target.style.background = "transparent"}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ display: "flex", gap: "10px" }}>
                  <Link to="/login" style={{
                    background: "#f90", color: "#111", padding: "9px 20px",
                    borderRadius: "7px", fontWeight: 700, fontSize: "14px", textDecoration: "none",
                  }}>Login</Link>
                  <Link to="/register" style={{
                    border: "1px solid #fff", color: "#fff", padding: "9px 16px",
                    borderRadius: "7px", fontSize: "14px", textDecoration: "none",
                  }}>Register</Link>
                </div>
              )}

              {/* MOBILE HAMBURGER */}
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
                style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}
              >
                <FaBars size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── CATEGORY STRIP ── */}
      <div style={{ background: "#233d56", borderTop: "1px solid #2e4f6b" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 28px" }}>
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2px", overflowX: "auto", scrollbarWidth: "none" }}>
            {CATEGORIES.map(({ label, to, icon }) => (
              <Link
                key={to}
                to={to}
                style={{
                  color: "#e0e8f0", textDecoration: "none", padding: "11px 16px",
                  fontSize: "14px", fontWeight: 500, whiteSpace: "nowrap",
                  display: "flex", alignItems: "center", gap: "6px", borderRadius: "4px",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                {icon && <span style={{ fontSize: "13px", opacity: 0.85 }}>{icon}</span>}
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile search */}
          <div className="md:hidden" style={{ padding: "10px 0" }}>
            <div style={{ display: "flex", borderRadius: "7px", overflow: "hidden", background: "#fff" }}>
              <input
                type="text"
                placeholder="Search products..."
                style={{ flex: 1, border: "none", padding: "11px 14px", fontSize: "15px", outline: "none" }}
              />
              <button style={{ background: "#f90", border: "none", padding: "0 16px", cursor: "pointer" }}>
                <FaSearch style={{ color: "#333", fontSize: "16px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        user={userInfo}
        onLogout={handleLogout}
      />
    </nav>
  );
};

export default Navbar;