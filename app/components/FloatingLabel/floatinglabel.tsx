"use client";
import { HTMLInputTypeAttribute, useState } from "react";

type Props = {
  placeholderText: string;
  type: HTMLInputTypeAttribute;
  value: string;
  name: string;
  id: string;
  changeValue: (value: string) => void;
};

export default function FloatingLabel({
  placeholderText,
  type,
  value,
  name,
  id,
  changeValue,
}: Props) {
  const [isVisible, toggleVisibility] = useState<boolean>(false);

  return (
    <label
      className={`floating-label-input-container ${value && "floating-label-input-container--float"}`}
    >
      <span className="text-secondary-text">{placeholderText}</span>
      <input
        id={id}
        name={name}
        type={
          type === "password" && value.length > 0
            ? isVisible
              ? "text"
              : "password"
            : type
        }
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        className={`w-full px-2 py-2 ${type === "password" ? "pr-10" : ""} overflow-ellipsis border border-stroke leading-3 rounded-[3px] bg-secondary-bg focus:border-stroke-secondary focus:outline-none`}
      />
      {type === "password" && value.length > 0 && (
        <button
          type="button"
          onClick={() => toggleVisibility(!isVisible)}
          className="text-[13px] font-semibold absolute right-0 top-1/2 -translate-y-1/2 p-2"
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
}
