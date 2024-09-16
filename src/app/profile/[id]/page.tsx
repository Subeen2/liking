"use client";

import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function UserProfilePage({
  params,
}: {
  params: { id: string };
}) {
  // Redux에서 user 정보를 가져옵니다.
  const user = useSelector((state: RootState) => state.userAuth);
  const { id } = params;
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  // TODO :: 가독성 떨어지므로 데이터 형식 수정 필요
  const userUID = user.user?.user_uid;

  useEffect(() => {
    setIsMounted(true); // 컴포넌트가 마운트된 이후에만 렌더링되도록 설정
  }, []);

  // 사용자 ID와 Redux에 저장된 ID가 일치하는지 확인
  useEffect(() => {
    if (!user || userUID !== id) {
      // 사용자 정보가 없거나 ID가 일치하지 않으면 로그인 페이지로 리다이렉트
      router.push("/login");
    }
  }, [user, id, router]);

  if (!isMounted) {
    // 서버와 클라이언트가 일치할 때까지 아무것도 렌더링하지 않음
    return null;
  }

  if (!user || userUID !== id) {
    return <p>Loading...</p>; // 데이터를 불러올 때까지 로딩 표시
  }

  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-4 p-20">
      <div className="flex h-screen">
        <div className="flex rounded-xl shadow-md w-full h-48 p-10">
          <div>
            <div className="max-w-sm mx-auto p-6 bg-white rounded-full border-[0.5px] space-x-4 h-28 w-28">
              <Image
                src="/icons/face-smile-regular.svg"
                alt="유저 이미지"
                width={30}
                height={30}
              />
            </div>
            <h1>{user.user?.nickname}</h1>
          </div>
          <p>닉네임: {user.user?.nickname}</p>
          <p>이메일: {user.user?.email}</p>

          <a href={`/profile/${id}/edit`}>Edit Profile</a>
        </div>
      </div>
    </div>
  );
}
