import { cookies } from "next/headers";
import styles from "./page.module.css";
import ComponentA from "@/components/a";
import ComponentB from "@/components/b";

export default function Home() {
  // gets the value of the cookie which was set by the middleware
  const abCookie = cookies().get("AB_COOKIE").value;

  return (
    <main className={styles.main}>
      home page
      {/* displays ComponentA if the cookie is 'a' else displays ComponentB */}
      {abCookie === "a" ? <ComponentA /> : <ComponentB />}
    </main>
  );
}
