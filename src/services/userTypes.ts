
export interface LoginFormInput {
  email: string|undefined;
  password: string|undefined;
}

export interface LoginError {
    success: boolean;
    error:   string;
    message: string;
    code:    string;
}

export interface LoginSuccess {
    success: boolean;
    message: string;
    data:    LoginData;
}

export interface LoginData {
    user:        User;
    accessToken: string;
}

export interface User {
    id:          string;
    fullName:    string;
    email:       string;
    role:        string;
    isActive:    boolean;
    lastLoginAt: Date;
    lastLoginIP: string;
    createdAt:   Date;
    updatedAt:   Date;
}
export interface LoginSuccess {
    success: boolean;
    message: string;
    data:    LoginData;
}

export interface LoginData {
    user:        User;
    accessToken: string;
}

export interface User {
    id:          string;
    fullName:    string;
    email:       string;
    role:        string;
    isActive:    boolean;
    lastLoginAt: Date;
    lastLoginIP: string;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface RegisterFormInput {
  fullName: string;
  email: string;
  password: string;
}
export interface RegisterSuccess {
    success: boolean;
    message: string;
    data:    RegisterData;
}

export interface RegisterData {
    id:       string;
    fullName: string;
    email:    string;
}

export interface RegisterError {
    success: boolean;
    error:   string;
    message: string;
    code:    string;
    details: Detail[];
}

export interface Detail {
    field:   string;
    message: string;
    code:    string;
}