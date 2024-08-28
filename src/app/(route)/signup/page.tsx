import React from "react";

export default function SignUp() {
  return (
    <div className="flex flex-col text-center py-xl">
      <h1 className="text-3xl font-bold  mb-[70px]">회원가입</h1>
      <div className="flex flex-row w-full justify-center text-left">
        <form className="flex flex-col justify-center gap-6 w-full mb-6 max-w-lg">
          <div className="flex flex-col">
            <label
              className="ml-1 mb-2 font-bold text-[16px]"
              htmlFor="nickname"
            >
              닉네임
            </label>
            <div className="relative">
              <input
                className="h-[48px] px-4 w-full rounded-lg border md:text-[16px] text-[14px] placeholder-gray-2 focus:outline-none focus:border-gray-3 transition border-gray-2"
                type="text"
                placeholder="라이킹에서 사용할 닉네임을 적어주세요"
                id="nickname"
                name="nickname"
                value=""
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="ml-1 mb-2 font-bold text-[16px]" htmlFor="email">
              이메일
            </label>
            <div className="relative">
              <input
                className="h-[48px] px-4 w-full rounded-lg border md:text-[16px] text-[14px] placeholder-gray-2 focus:outline-none focus:border-gray-3 transition border-gray-2"
                type="text"
                placeholder="라이킹에서 사용할 이메일을 적어주세요"
                id="email"
                name="email"
                value=""
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="ml-1 mb-2 font-bold text-[16px]"
              htmlFor="password"
            >
              비밀번호
            </label>
            <div className="relative">
              <input
                className="h-[48px] px-4 w-full rounded-lg border md:text-[16px] text-[14px] placeholder-gray-2 focus:outline-none focus:border-gray-3 transition border-gray-2"
                type="text"
                placeholder="라이킹에서 사용할 비밀번호를 적어주세요"
                id="password"
                name="password"
                value=""
              />
            </div>
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
