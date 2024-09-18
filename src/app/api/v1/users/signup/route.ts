import { useId } from "react";

export async function POST(request: Request) {
  const { nickname, email, password } = await request.json();

  const userUid = useId();

  // 회원가입 성공 메시지를 반환합니다.
  return new Response(
    JSON.stringify({
      message: "회원가입 성공",
      result: {
        nickname: nickname,
        user_uid: userUid,
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  );
}
