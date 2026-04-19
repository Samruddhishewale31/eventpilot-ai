import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut as firebaseSignOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  User
} from "firebase/auth";
import { auth, analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

export const signInWithGoogle = async () => {
  if (!auth) throw new Error("Firebase Auth not initialized. Check your API keys.");
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    if (analytics) {
      logEvent(analytics, "login_success", { method: "google" });
      logEvent(analytics, "google_login");
    }
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export const signIn = async (email: string, pass: string) => {
  if (!auth) throw new Error("Firebase Auth not initialized. Check your API keys.");
  try {
    const result = await signInWithEmailAndPassword(auth, email, pass);
    if (analytics) logEvent(analytics, "login_success", { method: "email" });
    return result.user;
  } catch (error) {
    console.error("Error signing in", error);
    throw error;
  }
};

export const signUp = async (email: string, pass: string) => {
  if (!auth) throw new Error("Firebase Auth not initialized. Check your API keys.");
  try {
    const result = await createUserWithEmailAndPassword(auth, email, pass);
    if (analytics) logEvent(analytics, "signup_success");
    return result.user;
  } catch (error) {
    console.error("Error signing up", error);
    throw error;
  }
};

export const signOut = async () => {
  if (!auth) return;
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
    throw error;
  }
};

export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
};

export const logGuestContinue = () => {
  if (analytics) logEvent(analytics, "guest_continue");
};
