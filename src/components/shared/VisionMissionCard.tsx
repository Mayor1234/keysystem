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
    <div className="w-full max-w-[625px] mx-auto rounded-xl bg-gradient-to-b from-[#01B4DE] via-[#030517] to-[#01B4DE] p-px shadow-lg hover:shadow-[0_0_25px_#00c2ff55] transition-all duration-300 relative overflow-hidden">
      <div className="absolute inset-0 border-6 border-transparent rounded-xl pointer-events-none p-px"></div>

      <div className="flex flex-col items-start gap-6 bg-gradient-to-r from-[#030517] via-[#000080] to-[#4969E1] bg-[length:300%_300%] rounded-xl p-6 sm:p-8 md:p-10 h-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto max-h-[400px] object-cover object-center rounded-md"
        />

        <div className="space-y-4">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-popppins font-bold">
            {title}
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl font-popppins max-w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionCard;
