import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { user, signInWithTwitter } = useAuth();

  return (
    <div>
      <h1>login</h1>
      <button onClick={signInWithTwitter}>Login com Twitter</button>
    </div>
  );
}
