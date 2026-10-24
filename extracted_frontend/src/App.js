import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider, useAuth } from "@/context/Auth";
import Shell from "@/components/Shell";
import Login from "@/pages/Login";
import Overview from "@/pages/Overview";
import Scanner from "@/pages/Scanner";
import Twin from "@/pages/Twin";
import Exchange from "@/pages/Exchange";
import Roi from "@/pages/Roi";
import Wallet from "@/pages/Wallet";
import Brand from "@/pages/Brand";
import Reports from "@/pages/Reports";

function Protected() {
  const { user } = useAuth();
  if (user === null) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-xs text-mute tracking-[0.3em]" data-testid="app-loading">
        BOOTING CAMPUSLOOPâ€¦
      </div>
    );
  }
  if (!user) return <Navigate to="/login" replace />;
  return <Shell />;
}

function LoginGate() {
  const { user } = useAuth();
  if (user) return <Navigate to="/" replace />;
  return <Login />;
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginGate />} />
            <Route element={<Protected />}>
              <Route index element={<Overview />} />
              <Route path="scanner" element={<Scanner />} />
              <Route path="twin" element={<Twin />} />
              <Route path="exchange" element={<Exchange />} />
              <Route path="roi" element={<Roi />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="brand" element={<Brand />} />
              <Route path="reports" element={<Reports />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
        <Toaster theme="dark" position="bottom-right" toastOptions={{ style: { background: "#121418", border: "1px solid #22262B", borderRadius: 2, color: "#F2F4F7", fontFamily: "Manrope" } }} />
      </AuthProvider>
    </div>
  );
}

export default App;
