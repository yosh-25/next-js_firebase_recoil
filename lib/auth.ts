import { useEffect, useState } from 'react';
import { atom, useRecoilValue, useRecoilState} from 'recoil';

import { User, getAuth, signInWithRedirect, signOut, GoogleAuthProvider} from "firebase/auth";
import { app } from './firebase';

type UserState = User | null;

const userState = atom<UserState>({
    key: 'userState',
    default: null,
    dangerouslyAllowMutability: true,
});

// from here

export const login = (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    return signInWithRedirect(auth, provider);
};

export const logout = (): Promise<void> => {
 const auth = getAuth(app);
 return signOut(auth);
};