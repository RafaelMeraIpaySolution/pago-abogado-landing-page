import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import CredentialInputs from "../components/credential-inputs";
import Top1 from "../components/top1";
import Header from "../components/header";
import FrameComponent1 from "../components/frame-component1";

const Landing: NextPage = () => {
  return (
    <div className="w-full h-[1516px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] mq1800:h-auto mq1800:min-h-[1516]">
      <div className="absolute top-[665px] left-[-238px] rounded-[50%] border-deeppink border-[0px] border-solid box-border w-[391px] h-[391px] hidden" />
      <section className="absolute top-[0px] left-[0px] w-[1920px] h-[931px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[893px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[540px] left-[1772px] rounded-[50%] border-limegreen border-[0px] border-solid box-border w-[391px] h-[391px] z-[1]" />
      </section>
      <section className="absolute top-[802px] left-[0px] w-full flex flex-col items-start justify-start max-w-full">
        <FrameComponent />
        <CredentialInputs />
      </section>
      <section className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[72px] max-w-full mq925:gap-[18px] mq1350:gap-9">
        <header className="self-stretch flex flex-col items-start justify-start max-w-full">
          <Top1 />
          <Header />
        </header>
        <FrameComponent1 />
      </section>
    </div>
  );
};

export default Landing;
