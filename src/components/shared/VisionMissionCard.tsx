// components/VisionMissionCard.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const VisionMissionCard: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="w-[625px] h-full rounded-xl bg-linear-to-b from-[#01B4DE] via-[#030517] via-50% to-[#01B4DE] p-px shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_#00c2ff55] relative overflow-hidden">
      <div className="absolute inset-0 border-6 border-transparent rounded-xl pointer-events-none  p-px"></div>
      <div className="flex flex-col items-start gap-4 h-[700px] bg-gradient-to-r from-[#030517] via-[#000080] via-60%% to-[#4969E1] bg-[length:300%_300%] rounded-xl p-10">
        <img
          src={imageSrc}
          width={100}
          height={100}
          alt={title}
          className="w-[500px] h-[400px] aspect-square object-center object-cover"
        />
        <div className="mb-5">
          <h2 className="text-white text-[48px] font-popppins font-bold">
            {title}
          </h2>
          <p className="text-white/80 text-[20px] max-w-[521px] font-popppins font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionCard;
