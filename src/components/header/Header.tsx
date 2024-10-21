"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/app/lib/features/userAuth/userAuthSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/lib/store";
import Image from "next/image";

export default function Header() {
  const user = useSelector((state: RootState) => state.userAuth);
  const dispatch = useDispatch();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  const userUID = user.user?.user_uid;

  useEffect(() => {
    setIsMounted(true); // 컴포넌트가 마운트된 이후에만 렌더링되도록 설정
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  if (!isMounted) {
    // 서버와 클라이언트가 일치할 때까지 아무것도 렌더링하지 않음
    return null;
  }

  return (
    <header className="bg-second100 mb-[100px]">
      <div className="hidden md:block">
        {user.isAuthenticated === true ? (
          <ul className="container mx-auto w-full max-w-[1024px] flex items-center justify-end gap-5 py-[18px] text-[13px] text-gray-4 text-black px-[16px] lg:px-0">
            <li>
              <a href={`/profile/${userUID}`} className="group">
                내 프로필
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </a>
            </li>
            <li className="flex gap-1 group">
              <button onClick={handleLogout}>로그아웃</button>

              <Image
                src="/icons/log-out.svg"
                alt="로그아웃 아이콘"
                width={11}
                height={11}
                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              />
            </li>
          </ul>
        ) : (
          <ul className="container mx-auto w-full max-w-[1024px] flex items-center justify-end gap-5 py-[18px] text-[13px] text-gray-4 text-black px-[16px] lg:px-0">
            <li>
              <a href="/login">로그인</a>
            </li>
            <li>
              <a href="/signup">회원가입</a>
            </li>
          </ul>
        )}
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
