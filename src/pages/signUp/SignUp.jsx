import React from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <form className={styles.form}>
        <div className={styles.logo}>
          <img
            src="./twittter.png"
            alt="twitter-icon"
            className={styles.icon}
          />
        </div>
        <div className={styles.heading}>
          <h2>Join Twitter today</h2>
        </div>
        <article className={styles.main}>
          <button>
            <img
              src="./google.png"
              alt="google-icon"
              className={styles.googleicon}
            />
            Sign in with Google
          </button>
          <button>
            <img
              src="./apple.png"
              alt="apple-icon"
              className={styles.appleicon}
            />
            Sign in with Apple
          </button>
          <hr></hr>
          <span>Or</span>
        </article>
        <aside>
          <button>Create account</button>
          <p className={styles.termscondition}>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
          <p className={styles.login}>
            Have an account already?
            <span
              className={styles.log}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Log in
            </span>
          </p>
        </aside>
        <CloseIcon
          className={styles.closebtn}
          onClick={() => {
            navigate("/");
          }}
        />
      </form>
    </>
  );
}

export default SignUp;