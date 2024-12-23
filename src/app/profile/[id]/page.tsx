"use client";

import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Modal from "@/components/modal/Modal";
import Image from "next/image";
import ProfileCard from "@/components/card/ProfileCard/ProfileCard";

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

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="grid grid-cols-1 grid-rows-2 gap-5 px-44 py-10">
      <div>
        <ProfileCard
          nickname={user.user?.nickname}
          email={user.user?.email}
          id={id}
          cardClickHandler={() => setIsModalOpen(true)}
        />
        <h1>리스트</h1>
        <Image
          className="cursor-pointer"
          src="/icons/heart.svg"
          alt="하트모양 이모티콘"
          width={20}
          height={20}
        />
        <Image
          className="cursor-pointer"
          src="/icons/heart-filled.svg"
          alt="채워진 하트모양 이모티콘"
          width={20}
          height={20}
        />

        <h1>팔로워 리스트</h1>
        <h1>팔로잉 리스트</h1>
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
