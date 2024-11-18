import Image from "next/image";

interface userProfile {
  nickname: string | undefined;
  email: string | undefined;
  id: number | string;
  cardClickHandler: React.MouseEventHandler<HTMLDivElement>;
}

const ProfileCard = ({
  nickname,
  email,
  id,
  cardClickHandler,
}: userProfile) => {
  return (
    <div
      className="flex rounded-xl shadow-md w-full h-48 p-10"
      onClick={cardClickHandler}
    >
      <div className="max-w-sm mx-10 p-6 bg-white rounded-full border-[0.5px] space-x-4 h-28 w-28">
        <Image
          src="/icons/face-smile-regular.svg"
          alt="유저 이미지"
          width={30}
          height={30}
        />
      </div>
      <div className="flex-row gap-2">
        <h2>
          <strong>{nickname}</strong>
        </h2>
        <p>이메일: {email}</p>

        <a href={`/profile/${id}/edit`}>Edit Profile</a>
        <div className="flex gap-5">
          <p>팔로워</p>
          <p>팔로잉</p>
          <p>즐겨찾기</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
