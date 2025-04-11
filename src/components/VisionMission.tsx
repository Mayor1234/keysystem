import VisionMissionCard from './shared/VisionMissionCard';

const VisionMission = () => {
  return (
    <div className="flex container flex-wrap gap-6 justify-center">
      <VisionMissionCard
        title="Our Vision"
        description="To be the trusted partner for businesses seeking to leverage technology to improve decision-making, unlock new opportunities, and achieve transformative growth"
        imageSrc="/images/our-vision.png"
      />
      <VisionMissionCard
        title="Our Mission"
        description="We bridge the gap between technology and business, delivering customized ICT solutions that drive efficiency, growth, and competitive advantage."
        imageSrc="/images/our-mission.png"
      />
    </div>
  );
};

export default VisionMission;
