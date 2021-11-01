import { createContext, ReactNode, useContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface LoginState {
    email: string;
    password: string;
}

interface UserProviderProps {
    children: ReactNode;
}

interface LoginResponse {
    user: {
        admin: boolean;
        token: string;
        email: string;
    }
}

interface SinUpData {
    name: string;
    email: string;
    password: string;
}

interface UserContextData {
    userLogin: ({ email, password }: LoginState) => Promise<LoginResponse | undefined>;
    signUp: ({ name, email, password }: SinUpData) => Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {

    const userLogin = async ({ email, password }: LoginState) => {
        try {
            const user = await api.post<LoginResponse>("/user/signin", {
                email,
                password
            })

            toast(`Bem vindo`)
            return user.data;
        } catch {
            toast.error("Não foi possível realizar o login.Tente mais tarde");
        }
    }

    const signUp = async ({ name, email, password }: SinUpData) => {
        try {
            api.post("/user/signup", {
                username: name,
                email,
                password
            });
        }catch {
            console.log("NONONONONONONONONO")
        }
    }

    return (
        <UserContext.Provider value={{ userLogin, signUp }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);

    return context;
}