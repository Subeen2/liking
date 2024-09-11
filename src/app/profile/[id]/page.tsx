import { useRouter } from "next/router";

export default function UserProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // 여기에 API 호출이나 데이터를 받아오는 로직을 추가할 수 있습니다.
  // 예를 들어, 특정 ID에 해당하는 사용자 정보를 가져올 수 있습니다.
  return (
    <div>
      <h1>User Profile</h1>
      <p>Profile ID: {id}</p>
      <a href={`/profile/${id}/edit`}>Edit Profile</a>
    </div>
  );
}
