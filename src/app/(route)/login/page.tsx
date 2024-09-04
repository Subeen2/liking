"use client";

import React, { useState } from "react";
import { emailRegEx } from "@/utils/regex";
import { useRouter } from "next/router";
import { useInput } from "@/hooks/useInput";

export default function LogIn() {
  const router = useRouter();
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const { values: input, handler: onChangeInput } = useInput({
    email: "",
    password: "",
  });

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const loginData = { email, password };

    // if (!emailRegEx.test(email)) {
    //   setError((prev) => ({
    //     ...prev,
    //     emailError: "정확하지 않은 이메일입니다.",
    //   }));

    //   return;
    // }

    // mock API 호출
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
            <label
              className="ml-1 mb-2 font-bold text-[16px]"
              htmlFor=":R3afnnj7puba:"
            >
              이메일
            </label>
            <div className="relative">
              <input
                className="h-[48px] px-4 w-full rounded-lg border md:text-[16px] text-[14px] placeholder-gray-2 focus:outline-none focus:border-gray-3 transition border-gray-2"
                type="text"
                placeholder="이메일을 입력해주세요"
                id=":R3afnnj7puba:"
                name="email"
                onChange={onChangeInput}
                // value={email}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="ml-1 mb-2 font-bold text-[16px]"
              htmlFor=":R3afnnj7pubb:"
            >
              비밀번호
            </label>
            <div className="relative">
              <input
                className="h-[48px] px-4 w-full rounded-lg border md:text-[16px] text-[14px] placeholder-gray-2 focus:outline-none focus:border-gray-3 transition border-gray-2"
                type="text"
                placeholder="비밀번호를 입력해주세요"
                id=":R3afnnj7pubb:"
                name="password"
                onChange={onChangeInput}
                // value={password}
              />
            </div>
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
