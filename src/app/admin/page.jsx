"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import AdminComponent from "../../../components/adminComponent";

export default function AdminPanel() {
  
  const session = useSession();

  if (session.status == "loading") {
    console.log("waiting for session to load");

    return <>
    <button onClick={() => signIn("github")}>Sign in using Github</button></>;

    // return <>You are not supposed to be here</>;
  }
  if (session.status == "authenticated") {
    if (session.data.user.email == "shantnu04@gmail.com") {
      return <>you are admin <AdminComponent/>
        <button onClick={() => signOut()}>Sign out</button> </>;
    } else {
      return <>You are not supposed to be here</>;
    }
  }
}
