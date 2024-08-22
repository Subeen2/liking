import React from "react";

export default function Home() {
  return (
    <div>
      <form className="flex flex-col justify-center gap-6 w-full mb-6 max-w-lg">
        <div className="flex flex-col">
          <label
            className="ml-1 mb-2 font-bold text-[18px]"
            htmlFor=":R3afnnj7puba:"
          >
            닉네임
          </label>
          <div className="relative">
            <input
              className="h-[48px] px-4 w-full rounded-lg border md:text-[18px] text-[16px] placeholder-gray-2 focus:outline-none focus:border-gray-3 transition border-gray-2"
              type="text"
              placeholder="커뮤니티에서 사용할 닉네임을 적어주세요"
              id=":R3afnnj7puba:"
              name="nickname"
              value=""
            />
          </div>
        </div>
      </form>
    </div>
  );
}
