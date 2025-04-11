import Button from './shared/Button';

const GetStarted = () => {
  return (
    <div className="py-10 md:py-40 px-5 md:px-16 flex justify-center items-center bg-[#030517] bg-[radial-gradient(circle_350px_at_15%_500px,#0808e6,transparent)]">
      <div className="relative z-20 w-full md:w-[1237px] h-full md:h-[582px] text-white overflow-hidden py-15 md:py-8 px-10 md:px-16 bg-linear-to-r from-[#04050B] via-[#030517] via-80% to-[#181B4D] rounded-3xl border border-[#181B4D] text-center md:text-start">
        <h2 className="font-popppins font-bold text-2xl sm:text-3xl lg:text-[58px] text-white mb-4 md:text-start">
          Ready to get started
        </h2>
        <p className="font-popppins text-base md:text-[20px] font-normal text-[#BBBBBB] max-w-full md:max-w-[151px] mb-5">
          Shoot us a Mail
        </p>
        <p className="text-[18px] md:text-[24px] font-popppins font-normal text-[#ffffff] mb-10 max-w-[884px]">
          Join numerous operations, organizations, and businesses as they{' '}
          <br className="hidden sm:block" />
          scale there teams, tap into new market opportunities and build{' '}
          <br className="hidden sm:block" />
          innovative produts with KeySystem Technology
          <br />
          <br />
          Join thousands of students who are ready to learn new skills or take{' '}
          <br className="hidden sm:block" />
          their career to the next level by enrolling in one of our training{' '}
          <br className="hidden sm:block" />
          programs today.
        </p>

        <Button>Send Us a Mail Now</Button>

        <div className="absolute -z-10 -right-20 lg:-right-1 top-0 lg:bottom-0 rounded-xl pointer-events-none bg-[url('/images/get-started.png')] w-[200px] md:w-[330.62px] h-full bg-no-repeat p-px" />
      </div>
    </div>
  );
};

export default GetStarted;
