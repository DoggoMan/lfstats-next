import { Avatar } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./login.module.css";

export default function Login() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <div className={styles.signedInStatus}>
      <div
        className={`nojs-show ${
          !session && loading ? styles.loading : styles.loaded
        }`}
      >
        {!session && (
          <>
            <span className={styles.notSignedInText}>
              You are not signed in
            </span>
            <a
              href={`/api/auth/signin`}
              className={styles.buttonPrimary}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
          </>
        )}
        {session?.user && (
          <>
            <Avatar
              name={session.user.name || ""}
              src={session.user.image || ""}
            />
            <span className={styles.signedInText}>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email || session.user.name}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </>
        )}
      </div>
    </div>
  );
}
