import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface CardProps {
  name: string;
  description: string | null;
  numberOfStars: number;
  username: string;
  avatarImage: string;
}

const Card = ({
  name,
  description,
  numberOfStars,
  username,
  avatarImage,
}: CardProps) => {
  return (
    <div className="border p-6 m-2">
      <h1 className="font-bold text-xl">{name}</h1>
      <p className="my-2">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={avatarImage}
            alt={`Avatar image of ${username}`}
            width={200}
            height={200}
            className="max-w-[20px] inline rounded-full"
          />
          <p className="inline mx-2">{username}</p>
        </div>
        <div className="flex items-center">
          <FaStar className="inline" />

          <p className="inline ml-1 mt-1">{numberOfStars}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
