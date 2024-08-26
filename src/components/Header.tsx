import React from "react";

export default function Header() {
  return (
    <header className="bg-second200">
      <div className="hidden md:block">
        <ul className="container mx-auto w-full max-w-[1024px] flex items-center justify-end gap-5 py-[18px] text-[12px] text-gray-4 text-black px-[16px] lg:px-0">
          <li>
            <a href="/login">로그인</a>
          </li>
          <li>
            <a href="/signup">회원가입</a>
          </li>
        </ul>
      </div>
      <div className="container mx-auto w-full max-w-[1024px] flex justify-between items-center py-[18px] px-[16px] lg:px-0">
        <h1 className="text-[30px] font-extrabold">
          <a href="/">
            <img
              alt="라이킹 로고"
              loading="lazy"
              width="90"
              height="42"
              decoding="async"
              data-nimg="1"
              src="/img/logo.svg?width=256&amp;quality=75"
            />
          </a>
        </h1>
        <div className="flex items-center">
          <nav className="hidden md:block">
            <h2 className="hidden">주메뉴</h2>
            <ul className="flex gap-[34px] items-center text-[18px] font-bold">
              {/* <li>
                <a className="hover:text-main-7 text-black" href="/mustpost">
                  메뉴1
                </a>
              </li>
              <li>
                <a className="hover:text-main-7 text-black" href="/grouppost">
                  메뉴2
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
