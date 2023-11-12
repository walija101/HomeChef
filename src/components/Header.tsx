import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";
import DetailedMealModal from "./DetailedMealModal";

function Header() {
  const { data: session } = useSession();
  const user = session && session.user;

  const [showModal, setShowModal] = useState(false);
  const [lshowModal, setlShowModal] = useState(false);

  const [meal, setMeal] = useState(false);
  //-----------
  function closeMeal() {
    setMeal(false);
  }
  //-----------

  function closeModal() {
    setShowModal(false);
  }

  function lcloseModal() {
    setlShowModal(false);
  }

  const [drawer, setDrawer] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 500) {
        setDrawer(true);
      }
    };

    if (window) window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.name}>HomeChef</h1>
      </div>
      <nav className={styles.middle}>
        {drawer ? (
          <div>Drawer</div>
        ) : (
          <>
            <Link href="/">Home</Link>
            <Link href="/meals">Meals</Link>
            <Link href="/about">About</Link>
            {user ? <> </> : <Link href="/profile">Profile</Link>}
            <button
              onClick={() => setMeal((prev) => !prev)}
              className={styles.test}
            ></button>
          </>
        )}
      </nav>
      <div className={styles.right}>
        {!user ? (
          // Add on click
          <>
            <button onClick={() => setlShowModal((prev) => !prev)}>
              Login
            </button>
            <button
              className={styles.signupButton}
              onClick={() => setShowModal((prev) => !prev)}
            >
              Signup
            </button>
          </>
        ) : (
          // Change user to username
          <>
            <div>Hello, user!</div>
            <button onClick={() => signOut()}>Logout</button>
          </>
        )}
      </div>

      <SignUpModal modalIsOpen={showModal} closeModal={closeModal} />
      <LoginModal lmodalIsOpen={lshowModal} lcloseModal={lcloseModal} />

      <DetailedMealModal mmodalIsOpen={meal} mcloseModal={closeMeal} />
    </div>
  );
}

function Drawer() {}

export default Header;
