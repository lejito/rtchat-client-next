"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChatColor } from "@customTypes/ChatColor";
import { KeyIcon } from "@components/icons/key-icon.component";
import { UserIcon } from "@components/icons/user-icon.component";
import { PaletteIcon } from "@components/icons/palette-icon.component";

export default function Register() {
  const chatColors = useMemo<ChatColor[]>(
    () => [
      { name: "White", value: "#ecf0f1" },
      { name: "Yellow", value: "#f4d03f" },
      { name: "Blue", value: "#2e86c1" },
      { name: "Red", value: "#c0392b" },
      { name: "Green", value: "#229954" },
      { name: "Orange", value: "#e67e22" },
      { name: "Purple", value: "#884ea0" },
      { name: "Pink", value: "#f06292" },
    ],
    []
  );

  const [selectedColor, setSelectedColor] = useState<ChatColor | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * chatColors.length);
    setSelectedColor(chatColors[randomIndex]);
  }, [chatColors]);

  return (
    <div className="layout register flex flex-col items-center justify-center">
      <h1 className="app-title">RT Chat</h1>

      <div className="register__content">
        <form className="form">
          <h2 className="form__title">Register</h2>

          <div className="form__control w-full">
            <input
              type="text"
              placeholder="New username"
              className="form__input w-full"
              name="username"
              id="username"
            />
            <UserIcon className="form__icon" width={32} height={32} />
          </div>

          <div className="form__control w-full">
            <input
              type="password"
              placeholder="New password"
              className="form__input w-full"
              name="password"
              id="password"
            />
            <KeyIcon className="form__icon" width={32} height={32} />
          </div>

          <div className="form__control w-full">
            <input
              type="password"
              placeholder="Repeat password"
              className="form__input w-full"
              name="repeatPassword"
              id="repeatPassword"
            />
            <KeyIcon className="form__icon" width={32} height={32} />
          </div>

          <div className="form__control w-full">
            <fieldset className="form__fieldset max-w-full">
              <legend className="form__legend">
                <PaletteIcon
                  className="form__icon form__icon--register-color"
                  width={24}
                  height={24}
                />
                <span className="form__legend__title">
                  Chat color: {selectedColor?.name}
                </span>
              </legend>

              <div className="form__radio__list w-full flex flex-row flex-wrap content-center justify-center gap-3">
                {chatColors.map((color, index) => (
                  <div
                    className="form__radio__item flex items-center justify-center"
                    key={index}
                  >
                    <input
                      type="radio"
                      name="color"
                      id={`color${index}`}
                      value={color.value}
                      onChange={() => setSelectedColor(color)}
                      className="form__radio form__radio--register-color hidden"
                    />
                    <label
                      htmlFor={`color${index}`}
                      className={`form__radio__label form__radio__label__--register-color cursor-pointer block p-1 rounded-lg transition-all duration-300 ease-in-out ${
                        selectedColor?.value === color.value
                          ? "form__radio__label--selected"
                          : ""
                      }`}
                      style={
                        { "--chat-color": color.value } as React.CSSProperties
                      }
                    >
                      <span
                        className="form__radio__color block w-7 h-7 rounded-md"
                        style={{ backgroundColor: color.value }}
                      ></span>
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="form__control form__control--button">
            <button className="form__button">Register now!</button>
            <Link href="/" className="form__link">
              Do you have an account? Sign in!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
