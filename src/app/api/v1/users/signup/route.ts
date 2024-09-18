// pages/api/signup.ts

import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcrypt";
import { useId } from "react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password, nickname } = req.body;

    // 필수 값 확인
    if (!email || !password || !nickname) {
      return res
        .status(400)
        .json({ message: "필수 입력 사항이 누락되었습니다." });
    }

    try {
      // 비밀번호 해싱
      //   const hashedPassword = await bcrypt.hash(password, 10);

      // 디비에 저장

      return res.status(201).json({
        message: "회원가입 성공!",
        user: {
          uid: useId(),
          email: email,
          nickname: nickname,
        },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "회원가입 실패. 다시 시도해주세요." });
    }
  } else {
    return res.status(405).json({ message: "허용되지 않은 메서드입니다." });
  }
}
