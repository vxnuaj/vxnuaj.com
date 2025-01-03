import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import ProtectedContentClient from "./ProtectedContentClient";

export default function ProtectedContent() {
  // Check for the 'authenticated' cookie
  const cookieStore = cookies();
  const isAuthenticated = cookieStore.get("authenticated");

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated || isAuthenticated.value !== "true") {
    redirect("/protected-page");
  }

  // Render the client component
  return <ProtectedContentClient />;
}
