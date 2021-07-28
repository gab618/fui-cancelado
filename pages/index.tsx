import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";

export default function Home() {
  const { user, signInWithTwitter } = useAuth();
  const router = useRouter();

  async function handleLogin() {
    if (!user) {
      await signInWithTwitter();
    }
    router.push("cancelar");
  }

  return (
    <div>
      <h1>login</h1>
      <button onClick={handleLogin}>Login com Twitter</button>
    </div>
  );
}
