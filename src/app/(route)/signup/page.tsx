import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-3xl font-bold  my-9">회원가입</h1>
      <div className="flex flex-row w-full justify-center text-left">
        <form className="flex flex-col justify-center gap-6 w-full mb-6 max-w-lg">
          <div className="flex flex-col">
            <label
              className="ml-1 mb-2 font-bold text-[16px]"
              htmlFor=":R3afnnj7puba:"
            >
              닉네임
            </label>
            <div className="relative">
              <input
                className="h-[48px] px-4 w-full rounded-lg border md:text-[16px] text-[14px] placeholder-gray-2 focus:outline-none focus:border-gray-3 transition border-gray-2"
                type="text"
                placeholder="라이킹에서 사용할 닉네임을 적어주세요"
                id=":R3afnnj7puba:"
                name="nickname"
                value=""
              />
            </div>
          </div>
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
                placeholder="라이킹에서 사용할 이메일을 적어주세요"
                id=":R3afnnj7puba:"
                name="nickname"
                value=""
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="ml-1 mb-2 font-bold text-[16px]"
              htmlFor=":R3afnnj7puba:"
            >
              비밀번호
            </label>
            <div className="relative">
              <input
                className="h-[48px] px-4 w-full rounded-lg border md:text-[16px] text-[14px] placeholder-gray-2 focus:outline-none focus:border-gray-3 transition border-gray-2"
                type="text"
                placeholder="라이킹에서 사용할 비밀번호를 적어주세요"
                id=":R3afnnj7puba:"
                name="nickname"
                value=""
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
