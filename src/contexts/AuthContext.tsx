import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { IAuthContext } from "../interfaces/IAuthContext";
import { IUserLogin } from "../interfaces/IUserLogin";
import Api from "../services/api";
import { IUser } from "../interfaces/IUser";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth need to be used inside as a child of AuthProvider');
    }
    return context;
}

interface IAuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [userLogin, setUserLogin] = useState<IUserLogin | null>(null);
    
    const fetchSessionData = async (token: string) => {
        try {
            const response = await Api.get("/private/sessions/me", {
                headers: {
                    Authorization: token
                },
            });

            if (response.status == 200) {
                setUser(response.data);
            } else {
                setUser(null);
            }

        } catch (error) {
            console.log("error when fetch session data", error);
            setUser(null);
        }
    }
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchSessionData(token);
        }
    }, []);

    const login = async (userData: IUserLogin) => {
        try {
            const response = await Api.post("/public/sessions", { ...userData });
            localStorage.setItem("token", response.data.token);
            setUser(response.data);
            return true;
        } catch (e) {
            return false;
        }
    };

    const logout = () => {
        setUser(null);
    }

    const authContextValue: IAuthContext = {
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};