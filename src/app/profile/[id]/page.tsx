import { RootState } from "@/app/lib/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function UserProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const router = useRouter();

  // Redux에서 user 정보를 가져옵니다.
  const user = useSelector((state: RootState) => state.userAuth);

  // TODO :: 가독성 떨어지므로 데이터 형식 수정 필요
  const userUID = user.user?.uid?.user_uid;

  // 사용자 ID와 Redux에 저장된 ID가 일치하는지 확인
  useEffect(() => {
    if (!user || userUID !== id) {
      // 사용자 정보가 없거나 ID가 일치하지 않으면 로그인 페이지로 리다이렉트
      router.push("/login");
    }
  }, [user, id, router]);

  if (!user || userUID !== id) {
    return <p>Loading...</p>; // 데이터를 불러올 때까지 로딩 표시
  }

  return (
    <div>
      <h1>기본정보</h1>
      <p>닉네임: {user.nickname}</p>
      <p>이메일: {user.email}</p>

      <a href={`/profile/${id}/edit`}>Edit Profile</a>
    </div>
  );
}
