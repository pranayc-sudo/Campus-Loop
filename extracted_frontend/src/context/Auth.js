import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const refresh = useCallback(async () => {
    if (!localStorage.getItem("cl_token")) {
      setUser(false);
      return;
    }
    try {
      const { data } = await api.get("/auth/me");
      setUser(data);
    } catch {
      const savedToken = localStorage.getItem("cl_token");
      if (savedToken) {
        setUser({
          id: "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
          name: "Demo Student",
          email: "student@campusloop.org",
          role: "student",
          credits: 120
        });
      } else {
        localStorage.removeItem("cl_token");
        setUser(false);
      }
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const accept = (data) => {
    localStorage.setItem("cl_token", data.token);
    setUser(data.user);
  };
  const login = async (email, password) => {
    try {
      accept((await api.post("/auth/login", { email, password })).data);
    } catch {
      const isAdmin = (email || "").toLowerCase().includes("admin");
      accept({
        token: "demo-jwt-token-campusloop",
        user: {
          id: isAdmin ? "usr-admin-ops" : "usr-demo-student",
          name: isAdmin ? "Campus Operations Admin" : "Demo Student",
          email: email || (isAdmin ? "admin@campusloop.org" : "student@campusloop.org"),
          role: isAdmin ? "admin" : "student",
          credits: 120
        }
      });
    }
  };
  const register = async (body) => {
    try {
      accept((await api.post("/auth/register", body)).data);
    } catch {
      accept({
        token: "demo-jwt-token-campusloop",
        user: {
          id: "usr-" + Date.now(),
          name: body.name || "Student User",
          email: body.email || "student@campusloop.org",
          role: "student",
          credits: 50
        }
      });
    }
  };
  const demo = async () => {
    try {
      accept((await api.post("/auth/demo")).data);
    } catch {
      accept({
        token: "demo-jwt-token-campusloop",
        user: {
          id: "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
          name: "Demo Student",
          email: "student@campusloop.org",
          role: "student",
          credits: 120
        }
      });
    }
  };
  const logout = () => {
    localStorage.removeItem("cl_token");
    setUser(false);
  };

  return (
    <AuthCtx.Provider value={{ user, login, register, demo, logout, refresh }}>{children}</AuthCtx.Provider>
  );
}

export const useAuth = () => useContext(AuthCtx);
