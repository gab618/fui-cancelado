import { useRouter } from "next/router";
import Main from "../components/Main";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { user, signInWithTwitter } = useAuth();
  const router = useRouter();

  async function handleLogin() {
    if (!user) {
      await signInWithTwitter();
    }
    console.log("oi");

    router.push("cancelar");
  }
  return <Main handleLogin={handleLogin} />;
}
