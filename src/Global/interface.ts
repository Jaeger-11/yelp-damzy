import { Timestamp } from "firebase/firestore"
import React from "react"

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
export type campgroundType = {
    name: string
    price: string
    imageUrl: string 
    description: string
    id: string
}
export type commentType = {
    comment: string,
    commentedBy: string,
    created: Timestamp
}
export type InitialStateType = {
    user: string
    uid: string
}

export type ActionType = {
    type: string
    payload?: string | object
}

export type AppProviderType = {
    children: React.ReactNode
}

export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
  };