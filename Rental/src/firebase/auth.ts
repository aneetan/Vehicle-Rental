import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from "firebase/auth"
import { auth } from "./firebase"

interface UserDetails {
    email: string,
    password: string
}

export const doCreateUserWithEmailAndPassword = async (props: UserDetails) => {
    return createUserWithEmailAndPassword(auth, props.email, props.password);
}

export const doSignInWithEmailAndPassword = (props: UserDetails) => {
    return signInWithEmailAndPassword(auth, props.email, props.password);
}

export const doSignInWithGoogle = async() => {
    //get provider value
    const provider = new GoogleAuthProvider();
    const result = await signInWithRedirect(auth, provider); 
    //save the result to firestore (result.user) if required
    return result
}

export const doSignOut = () => {
    return auth.signOut;
}