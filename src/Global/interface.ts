
export interface AccessProps {
    text : string
    functionName: any
    option: string
    optionPath: string
}

export interface InputProps {
    email: string
    password: string
}

export type AppContextType = {
    user: string;
}