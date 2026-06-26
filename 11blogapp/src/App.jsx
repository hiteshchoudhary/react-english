import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header"
import Footer from "./components/footer/Footer"
import authService from './appwrite/auth'

function App() {
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error('Failed to initialize authentication', error);
        setAuthError(true);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700">Loading application...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {authError ? (
            <div className="mx-4 my-6 rounded bg-red-100 p-4 text-red-700">
              Authentication could not be restored. Please refresh the page or log in again.
            </div>
          ) : null}
          <Outlet />
        </main>
      </div>
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  );
}

export default App
