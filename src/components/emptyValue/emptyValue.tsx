import Image from "next/image";
import React from "react";

interface EmptyValueProps {
  message: React.ReactNode;
}

const EmptyValue = ({ message }: EmptyValueProps) => (
  <div className="flex flex-col py-[100px] justify-center items-center">
    <Image
      src="/img/icon-empty.png"
      alt="empty"
      width={100}
      height={0}
      className="mb-5"
    />
    <div className="flex flex-col justify-center items-center text-gray-4">
      {message}
    </div>
  </div>
);

export default EmptyValue;
