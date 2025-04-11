import AnimateSections from './shared/AnimateSections';
import VisionMissionCard from './shared/VisionMissionCard';

const VisionMission = () => {
  return (
    <div className="flex container flex-wrap gap-6 justify-center">
      <div>
        <AnimateSections delay={0.8} type="popUp">
          <VisionMissionCard
            title="Our Vision"
            description="To be the trusted partner for businesses seeking to leverage technology to improve decision-making, unlock new opportunities, and achieve transformative growth"
            imageSrc="/images/our-vision.png"
          />
        </AnimateSections>
      </div>
      <div>
        <AnimateSections delay={0.8} type="popUp">
          <VisionMissionCard
            title="Our Mission"
            description="We bridge the gap between technology and business, delivering customized ICT solutions that drive efficiency, growth, and competitive advantage."
            imageSrc="/images/our-mission.png"
          />
        </AnimateSections>
      </div>
    </div>
  );
};

export default VisionMission;
