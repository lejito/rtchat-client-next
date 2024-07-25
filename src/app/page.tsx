import { KeyIcon } from "@/components/icons/key-icon.component";
import { UserIcon } from "@/components/icons/user-icon.component";
import Link from "next/link";

export default function Login() {
  return (
    <div className="layout flex flex-col items-center justify-center">
      <h1 className="app-title">RT Chat</h1>

      <form className="form form--login">
        <h2 className="form__title">Sign in</h2>

        <div className="form__control">
          <input
            type="text"
            placeholder="Username"
            className="form__input"
            id="username"
            name="username"
          />
          <UserIcon className="form__icon" width={32} height={32} />
        </div>

        <div className="form__control">
          <input
            type="password"
            placeholder="Password"
            className="form__input"
            id="password"
            name="password"
          />
          <KeyIcon className="form__icon" width={32} height={32} />
        </div>

        <div className="form__control form__control--button">
          <button className="form__button">Join chat!</button>

          <Link className="form__link" href="/register">
            Don&apos;t have an account? Click here!
          </Link>
        </div>
      </form>
    </div>
  );
}
