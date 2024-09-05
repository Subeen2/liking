"use client";

import React, { useState } from "react";
import { emailRegEx } from "@/utils/regex";
import { useRouter } from "next/router";
import { useInput } from "@/hooks/useInput";
import InputField from "@/components/inputField/field/InputField";

export default function LogIn() {
  // 클라이언트에서만 사용
  //   const router = useRouter();
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const { values: input, handler: onChangeInput } = useInput({
    email: "",
    password: "",
  });

  // 비밀번호 show / hide
  const [passwordHide, setPasswordHide] = useState(true);

  const { email, password } = input;

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData = { email, password };

    if (!emailRegEx.test(email)) {
      setError((prev) => ({
        ...prev,
        emailError: "정확하지 않은 이메일입니다.",
      }));

      return;
    }

    // mock API 호출
    // redux에 저장

    // router.push("/");
  };

  return (
    <div className="flex flex-col text-center py-xl">
      <h1 className="text-3xl font-bold  mb-[70px]">로그인</h1>
      <div className="flex flex-row w-full justify-center text-left">
        <form
          className="flex flex-col justify-center gap-6 w-full mb-6 max-w-lg"
          onSubmit={handleLoginSubmit}
        >
          <div className="flex flex-col">
            <InputField
              label="이메일"
              type="text"
              value={email}
              name="email"
              placeholder="이메일 주소를 입력해주세요"
              onChange={onChangeInput}
              error={error.emailError}
            />
          </div>
          <div className="flex flex-col">
            <InputField
              label="비밀번호"
              type={passwordHide ? "password" : "text"}
              value={password}
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChangeInput}
              error={error.passwordError}
              setPasswordHide={setPasswordHide}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-1 py-3 text-lg bg-main400 text-white rounded-lg"
          >
            로그인
          </button>
          <a className="w-full" href="/signup">
            <button className="flex items-center justify-center text-lg border border-gray-2 py-2 rounded-3xl font-medium w-full sm:py-2 sm:text-base md:text-md">
              회원가입
            </button>
          </a>
        </form>
      </div>
    </div>
  );
}
