"use client";
import { useState } from "react";
import FloatingLabel from "../FloatingLabel/floatinglabel";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const instaLogoStyle = {
    backgroundImage: "url('/instagram-loginform-logo.png')",
    backgroundPosition: "0px -52px",
    backgroundSize: "auto",
    width: "175px",
    height: "51px",
    backgroundRepeat: "no-repeat",
    display: "inline-block",
  };

  const fbLoginButtonStyle = {
    backgroundImage: "url('/social_utility.png')",
    backgroundPosition: "-414px -259px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <article className="mx-auto flex justify-center">
      <div className="hidden lg:block w-1/3">{/* Side banner on desktop*/}</div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center md:w-1/3 w-full py-2.5">
          <div
            aria-disabled="false"
            role="button"
            tabIndex={0}
            style={{ cursor: "pointer" }}
            className="mb-3 mt-9"
          >
            <i style={instaLogoStyle}></i>
          </div>
          <div className="max-w-[350px] w-full">
            <form className="flex flex-col flex-nowrap w-full">
              <div className="mx-10 mt-5">
                <div className="mt-0 mb-1.5 flex">
                  <FloatingLabel
                    type="text"
                    name="username"
                    id="username"
                    placeholderText="Phone number, username or email address"
                    value={username}
                    changeValue={setUsername}
                  />
                </div>
                <div className="mt-0 mb-1.5 flex">
                  <FloatingLabel
                    type="password"
                    name="password"
                    id="password"
                    placeholderText="Password"
                    value={password}
                    changeValue={setPassword}
                  />
                </div>
                <div className="my-4 flex overflow-hidden">
                  <button
                    type="submit"
                    className={`${password.length > 5 ? "hover:bg-blue-500" : ""} w-full font-semibold px-4 py-[7px] bg-primary-button text-sm text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-70`}
                    disabled={password.length > 5 ? false : true}
                  >
                    Log in
                  </button>
                </div>
                <div className="flex w-full justify-between my-6">
                  <hr className="w-2/5 self-center" />
                  <span className="text-[13px] font-semibold">OR</span>
                  <hr className="w-2/5 self-center" />
                </div>
                <div className="mx-auto my-3 flex justify-center">
                  <button type="button" className="w-full focus:opacity-75">
                    <span
                      style={fbLoginButtonStyle}
                      className="inline-block w-4 h-4 relative top-[3px]"
                    ></span>
                    <span className="ml-2 text-[#385185] text-sm font-semibold">
                      Log in with Facebook
                    </span>
                  </button>
                </div>
                <div className="flex justify-center my-4">
                  <a
                    href="#"
                    className="text-[12px] leading-4 text-[#385185] hover:none focus:opacity-75"
                  >
                    Forgotten your password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex my-3">
          <div>
            <span className="inline-block my-3 text-sm">
              Don't have an account?
              <a
                href="#"
                className="inline-block mx-1 font-semibold text-blue-500"
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex my-3 mx-auto">
            <span className="inline-block text-sm">Get the app.</span>
          </div>
        </div>
      </div>
    </article>
  );
}
