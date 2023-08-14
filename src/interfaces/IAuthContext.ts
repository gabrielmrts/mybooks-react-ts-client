import { ILoginResponse } from "./ILoginResponse";
import { IUser } from "./IUser";
import { IUserLogin } from "./IUserLogin";

export interface IAuthContext {
    user: IUser | null;
    login: (userData: IUserLogin) => Promise<ILoginResponse>;
    logout: () => void;
}

