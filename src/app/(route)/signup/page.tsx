"use client";

import InputField from "@/components/inputField/field/InputField";
import { useInput } from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignUp() {
  // use client + next + router 사용 시 navigation 임포트 해야 함.
  const router = useRouter();

  const [error, setError] = useState({
    nicknameError: "",
    emailError: "",
    passwordError: "",
  });

  const { values: input, handler: onChangeInput } = useInput({
    nickname: "",
    email: "",
    password: "",
  });

  const [passwordHide, setPasswordHide] = useState(true);

  const { nickname, email, password } = input;

  return (
    <div className="flex flex-col text-center py-xl">
      <h1 className="text-3xl font-bold  mb-[70px]">회원가입</h1>
      <div className="flex flex-row w-full justify-center text-left">
        <form className="flex flex-col justify-center gap-6 w-full mb-6 max-w-lg">
          <div className="flex flex-col">
            <InputField
              label="닉네임"
              type={"text"}
              value={nickname}
              name="nickname"
              placeholder="사용할 닉네임을 입력해주세요"
              onChange={onChangeInput}
              error={error.nicknameError}
            />
          </div>
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
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
