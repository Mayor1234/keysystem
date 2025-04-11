import Button from './shared/Button';

const GetStarted = () => {
  return (
    <div className="py-40 px-16 flex justify-center items-center bg-[#030517] bg-[radial-gradient(circle_350px_at_15%_500px,#0808e6,transparent)]">
      <div className="relative z-20 w-[1237px] h-[582px] text-white overflow-hidden py-8 px-16 bg-linear-to-r from-[#04050B] via-[#030517] via-80% to-[#181B4D] rounded-3xl border border-[#181B4D]">
        <div className="absolute -z-10 -right-1 top-0 bottom-0 rounded-xl pointer-events-none bg-[url('/images/get-started.png')] w-[330.62px] h-full bg-no-repeat p-px"></div>
        <h2 className="font-popppins font-bold text-[57.99px] text-[#ffffff] mb-3 max-w-[654px]">
          Ready to get started
        </h2>
        <p className="font-popppins text-[20px] font-normal text-[#BBBBBB] max-w-[151px] mb-5">
          Shoot us a Mail
        </p>
        <p className="text-[24px] font-popppins font-normal text-[#ffffff] mb-10 max-w-[884px]">
          Join numerous operations, organizations, and businesses as they <br />
          scale there teams, tap into new market opportunities and build <br />
          innovative produts with KeySystem Technology
          <br />
          <br />
          Join thousands of students who are ready to learn new skills or take{' '}
          <br />
          their career to the next level by enrolling in one of our training{' '}
          <br />
          programs today.
        </p>

        <Button>Send Us a Mail Now</Button>
      </div>
    </div>
  );
};

export default GetStarted;
