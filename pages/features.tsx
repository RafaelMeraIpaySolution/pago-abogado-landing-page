import type { NextPage } from "next";

const Features: NextPage = () => {
  return (
    <div className="w-full h-[4066px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] text-left text-3xl text-crimson font-poppins mq1350:h-auto mq1350:min-h-[4066]">
      <img
        className="absolute top-[0px] left-[calc(50%_-_960px)] w-[1920px] h-[806px] object-cover"
        alt=""
        src="/image1@2x.png"
      />
      <div className="absolute top-[665px] left-[-238px] rounded-[50%] border-deeppink border-[0px] border-solid box-border w-[391px] h-[391px] hidden" />
      <div className="absolute top-[1788px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0))] w-[1920px] h-[806px] z-[3]">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0))] w-full h-full hidden z-[3]" />
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0))] w-full h-full z-[4]" />
      </div>
      <div className="absolute top-[730px] left-[0px] w-full h-[1884px] max-w-full mq1350:h-auto mq1350:min-h-[1884]">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[-1346px] w-[4613px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full z-[1]" />
          <img
            className="absolute top-[1058px] left-[1346px] w-[1920px] h-[806px] object-cover z-[2]"
            alt=""
            src="/image1@2x.png"
          />
        </div>
        <div className="absolute top-[109px] left-[240px] w-[1440px] flex flex-col items-start justify-start gap-[65px] max-w-full z-[5]">
          <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-primary border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
              <div className="h-[271px] flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
                <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] inline-block max-w-full mq450:text-lg mq450:leading-[24px]">
                  Payment tracking and processing
                </h3>
                <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                  Pay My Lawyer provides a robust payment processing solution
                  that ensures your transactions are handled securely and
                  efficiently. Whether your clients prefer cash, card, check, or
                  digital transfers, our platform accommodates their needs,
                  making it easy for you to manage and track payments.
                </div>
                <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-primary flex flex-row items-center justify-center p-[23px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/firrarrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-primary border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
              <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
                <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] mq450:text-lg mq450:leading-[24px]">
                  client inventory
                </h3>
                <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] text-black inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                  Organize and Manage your client data
                </h2>
                <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                  Keep all your client information in one place with our Client
                  Inventory feature. Track client details and payment histories
                  securely, making it easier to manage your caseload and provide
                  top-notch service to your clients.
                </div>
                <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-primary flex flex-row items-center justify-center p-[23px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/firrarrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-primary border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
              <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
                <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] mq450:text-lg mq450:leading-[24px]">
                  Appointment calendar
                </h3>
                <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] text-black inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                  Schedule and Manage Appointments with Ease
                </h2>
                <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                  Our integrated appointment calendar allows you to schedule,
                  track, and collect payment for client meetings, court dates,
                  and other important events directly within the platform.
                </div>
                <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-primary flex flex-row items-center justify-center p-[23px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/firrarrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-primary border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
              <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                  alt=""
                  src="/rectangle@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
                <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] inline-block max-w-full mq450:text-lg mq450:leading-[24px]">
                  legal fees financing (Buy Now Pay Later)
                </h3>
                <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] text-black inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                  Flexible Financing Options
                </h2>
                <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                  Offer qualified clients the flexibility to finance their legal
                  fees through our Buy Now Pay Later option. This feature allows
                  clients to spread out payments, making legal services more
                  accessible while ensuring you get paid promptly.
                </div>
                <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-primary flex flex-row items-center justify-center p-[23px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/firrarrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[839px] left-[240px] w-[1440px] flex flex-col items-start justify-start gap-[65px] max-w-full z-[6]">
        <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-primary border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
            <div className="h-[271px] flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
              <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] inline-block max-w-full mq450:text-lg mq450:leading-[24px]">
                Payment tracking and processing
              </h3>
              <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                Pay My Lawyer provides a robust payment processing solution that
                ensures your transactions are handled securely and efficiently.
                Whether your clients prefer cash, card, check, or digital
                transfers, our platform accommodates their needs, making it easy
                for you to manage and track payments.
              </div>
              <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-primary flex flex-row items-center justify-center p-[23px] box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/firrarrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-primary border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
            <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                alt=""
                src="/image-2@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
              <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] mq450:text-lg mq450:leading-[24px]">
                client inventory
              </h3>
              <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] text-black inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                Organize and Manage your client data
              </h2>
              <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                Keep all your client information in one place with our Client
                Inventory feature. Track client details and payment histories
                securely, making it easier to manage your caseload and provide
                top-notch service to your clients.
              </div>
              <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-primary flex flex-row items-center justify-center p-[23px] box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/firrarrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-primary border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
            <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                alt=""
                src="/image-3@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
              <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] mq450:text-lg mq450:leading-[24px]">
                Appointment calendar
              </h3>
              <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] text-black inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                Schedule and Manage Appointments with Ease
              </h2>
              <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                Our integrated appointment calendar allows you to schedule,
                track, and collect payment for client meetings, court dates, and
                other important events directly within the platform.
              </div>
              <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-primary flex flex-row items-center justify-center p-[23px] box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/firrarrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-primary border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
            <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                alt=""
                src="/rectangle@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
              <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] inline-block max-w-full mq450:text-lg mq450:leading-[24px]">
                legal fees financing (Buy Now Pay Later)
              </h3>
              <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] text-black inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                Flexible Financing Options
              </h2>
              <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                Offer qualified clients the flexibility to finance their legal
                fees through our Buy Now Pay Later option. This feature allows
                clients to spread out payments, making legal services more
                accessible while ensuring you get paid promptly.
              </div>
              <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-primary flex flex-row items-center justify-center p-[23px] box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/firrarrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="absolute top-[238.4px] left-[233px] w-[1440px] flex flex-col items-start justify-start gap-[139px] max-w-full">
        <section className="w-[1411.7px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full text-left text-41xl text-black font-pt-serif">
          <div className="flex-1 flex flex-row items-start justify-start gap-[191px] max-w-full mq1350:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[107.6px] px-0 pb-0 box-border min-w-[434px] max-w-full mq925:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full">
                <h1 className="m-0 self-stretch relative text-inherit leading-[80px] font-bold font-[inherit] z-[1] mq925:text-29xl mq925:leading-[64px] mq450:text-17xl mq450:leading-[48px]">
                  Features
                </h1>
                <div className="w-[551px] relative text-base leading-[31px] font-poppins text-gray1-200 whitespace-pre-wrap inline-block max-w-full z-[1]">{`Acccept payment using invoice, quick checkout, API’s and  payment buttons all while ensuring compliance with ABA and IOLTA account rules. `}</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-end pt-[300.3px] px-[209px] pb-[100.3px] box-border relative min-w-[527.7px] max-w-full text-[8px] text-labels-primary mq925:min-w-full mq1350:flex-1">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/group.svg"
              />
              <b className="relative leading-[68px] z-[2]">.</b>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-[65px] max-w-full z-[7] text-left text-3xl text-black font-poppins">
          <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-forestgreen border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
              <div className="h-[271px] flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                  alt=""
                  src="/image-4-2@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start relative min-w-[615px] max-w-full mq925:min-w-full">
                <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] mq450:text-lg mq450:leading-[24px]">
                  Payment processing
                </h3>
                <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-forestgreen flex flex-row items-center justify-center p-[23px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/firrarrowright.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-1 pl-0 pr-5 box-border gap-2.5 max-w-full z-[1] text-9xl">
                  <h2 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                    process all payment types. in one app.
                  </h2>
                  <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                    Pay My Lawyer provides a robust payment processing solution
                    that ensures your transactions are handled securely and
                    efficiently. Whether your clients prefer cash, card, check,
                    or digital transfers, our platform accommodates their needs,
                    making it easy for you to manage and track payments.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-forestgreen border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
              <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
                <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] mq450:text-lg mq450:leading-[24px]">{`bILLING & INVOICING`}</h3>
                <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                  Simplified Billing, Streamlined Invoicing
                </h2>
                <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                  Generate professional invoices and manage your billing
                  effortlessly with Pay My Lawyer. Our platform allows you to
                  send invoices directly to your clients, track payments, and
                  follow up with ease, helping you stay on top of your
                  financials.
                </div>
                <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-forestgreen flex flex-row items-center justify-center p-[23px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/firrarrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-forestgreen border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
              <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
                <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] mq450:text-lg mq450:leading-[24px]">
                  CLIENT INVENTORY
                </h3>
                <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                  Organize and Manage Your Client Data
                </h2>
                <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                  Keep all your client information in one place with our Client
                  Inventory feature. Track client information and payment
                  histories securely, making it easier to know who your clients
                  are and how to contact them.
                </div>
                <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-forestgreen flex flex-row items-center justify-center p-[23px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/firrarrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-forestgreen border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
              <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                  alt=""
                  src="/rectangle-2@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
                <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] mq450:text-lg mq450:leading-[24px]">
                  APPOINTMENT CALENDAR
                </h3>
                <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                  Schedule and Manage Appointments with Ease
                </h2>
                <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                  Our integrated appointment calendar allows you to schedule
                  client meetings, court dates, and other important events
                  directly within the platform. Our calendar allows you the
                  ability to directly invoice and charge for those appointments
                  requiring payment.
                </div>
                <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-forestgreen flex flex-row items-center justify-center p-[23px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/firrarrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-forestgreen border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
              <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                  alt=""
                  src="/image-8@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
                <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] mq450:text-lg mq450:leading-[24px]">
                  ATTORNEY DIRECTORY
                </h3>
                <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                  Connect Directly with potential clients
                </h2>
                <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 whitespace-pre-wrap inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                  Gain access to a comprehensive directory of attorneys within
                  the Pay My Lawyer network. Opt-in to our attorney directory
                  and be found directly by potential clients in our
                  client-facing directory.
                </div>
                <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-forestgreen flex flex-row items-center justify-center p-[23px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/firrarrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_14px_64px_4px_rgba(0,_10,_255,_0.08)] bg-white border-forestgreen border-t-[5px] border-solid box-border flex flex-col items-start justify-start pt-1 px-2.5 pb-2.5 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start p-2.5 box-border gap-10 max-w-full mq1350:flex-wrap">
              <div className="h-80 flex flex-col items-start justify-start max-w-full mq925:min-w-full mq1350:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1350:self-stretch mq1350:w-auto"
                  alt=""
                  src="/image-9@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-2.5 min-w-[615px] max-w-full mq925:min-w-full">
                <h3 className="m-0 relative text-inherit tracking-[0.86px] leading-[30px] uppercase font-semibold font-[inherit] mq450:text-lg mq450:leading-[24px]">
                  REFERRAL NETWORK
                </h3>
                <h2 className="m-0 relative text-9xl tracking-[0.86px] leading-[30px] capitalize font-semibold font-[inherit] inline-block max-w-full mq450:text-3xl mq450:leading-[24px]">
                  Build and Strengthen Your Referral Network
                </h2>
                <div className="w-[669px] relative text-xl leading-[36px] text-dimgray-100 inline-block max-w-full mq450:text-base mq450:leading-[29px]">
                  Expand your practice by joining our referral network. Easily
                  refer cases to trusted attorneys within the Pay My Lawyer
                  network and receive referrals in return. This feature helps
                  you grow your client base while ensuring your clients receive
                  the best possible legal representation.
                </div>
                <div className="w-[70px] h-[70px] !m-[0] absolute top-[174.5px] left-[876px] rounded-31xl bg-forestgreen flex flex-row items-center justify-center p-[23px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/firrarrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <header className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start max-w-full text-left text-lg text-white font-rubik">
        <div className="self-stretch h-[54px] bg-black flex flex-col items-center justify-center py-0 px-5 box-border max-w-full z-[1]">
          <div className="w-[1440px] flex flex-row items-center justify-between py-[15px] px-3.5 box-border gap-5 max-w-full">
            <div className="w-[250px] rounded-8xs bg-gray1-400 flex flex-row items-center justify-start py-1.5 pl-2.5 pr-[146px] box-border gap-2 mq450:pr-5 mq450:box-border">
              <img
                className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
                alt=""
                src="/search.svg"
              />
              <input
                className="w-[calc(100%_-_171px)] [border:none] [outline:none] font-poppins text-base bg-[transparent] flex-1 relative text-gray text-left inline-block min-w-[43px] p-0"
                placeholder="Search...."
                type="text"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[39px] max-w-full mq450:gap-[19px]">
              <div className="flex flex-row items-end justify-start gap-2.5">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/envelope-1.svg"
                />
                <a className="[text-decoration:none] relative text-[inherit]" />
              </div>
              <div className="flex flex-row items-start justify-start gap-3">
                <img
                  className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/phone-1.svg"
                />
                <a className="[text-decoration:none] relative text-[inherit]" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center py-2.5 px-5 box-border max-w-full z-[2]">
          <div className="w-[1440px] flex flex-col items-center justify-center py-2.5 pl-0 pr-2.5 box-border max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between gap-5 max-w-full">
              <div className="flex flex-row items-center justify-center py-2.5 pl-0 pr-2.5">
                <img
                  className="h-[78px] w-[74px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-1-1@2x.png"
                />
              </div>
              <div className="w-[840px] flex flex-row items-center justify-end py-5 px-0 box-border gap-[37px] max-w-full mq450:gap-[18px] mq1800:w-[187px]">
                <nav className="m-0 flex-1 flex flex-row items-center justify-end gap-5 max-w-full text-left text-base text-black font-poppins mq1800:hidden">
                  <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                    <a className="[text-decoration:none] relative text-[inherit]" />
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-center py-2.5 px-[9px] gap-2.5">
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[71px]" />
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                    <a className="[text-decoration:none] relative text-[inherit]" />
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[65px]" />
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[84px]" />
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-center py-2.5 px-[9px]">
                    <a className="[text-decoration:none] relative text-[inherit]" />
                  </div>
                </nav>
                <button className="cursor-pointer [border:none] py-2.5 px-10 bg-black rounded-8xs flex flex-row items-center justify-center hover:bg-dimgray-200">
                  <a className="[text-decoration:none] flex-1 relative text-lg font-medium font-poppins text-white text-center inline-block min-w-[70px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="absolute top-[4015.3px] left-[18px] bg-lavender w-[1920px] flex flex-row items-start justify-start py-[15px] px-[802px] box-border max-w-full z-[1] text-center text-lg text-black font-rubik">
        <div className="flex-1 relative">
          © Copyright 2024 Pay My Lawyer LLC
        </div>
      </div>
      <div className="absolute top-[3345px] left-[0px] w-full flex flex-col items-start justify-start max-w-full text-21xl text-black font-pt-serif">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-60 box-border max-w-full mq925:pl-[60px] mq925:pr-[60px] mq925:box-border mq1350:pl-[120px] mq1350:pr-[120px] mq1350:box-border">
          <div className="flex-1 shadow-[0px_1px_40px_rgba(183,_183,_183,_0.25)] rounded-mini bg-white flex flex-col items-start justify-start py-[30px] px-[39px] box-border max-w-full z-[1]">
            <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5 mq1800:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[7px] max-w-full">
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <h1 className="m-0 relative text-inherit leading-[37px] font-bold font-[inherit] mq925:text-13xl mq925:leading-[30px] mq450:text-5xl mq450:leading-[22px]">
                    Your payment is just a click away
                  </h1>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px] box-border max-w-full text-lg text-gray font-poppins">
                  <div className="relative leading-[28px]">{`Services only offered to licensed attorneys within the United States. `}</div>
                </div>
              </div>
              <div className="h-[102px] w-[207px]" />
              <button className="cursor-pointer [border:none] py-[15.5px] px-[57.5px] bg-black h-[76px] w-[351px] rounded-8xs flex flex-row items-center justify-center box-border">
                <div className="h-[45px] w-[237px] relative text-11xl font-poppins text-white text-center inline-block shrink-0">
                  Create Account
                </div>
              </button>
            </div>
          </div>
        </div>
        <footer className="self-stretch bg-ghostwhite flex flex-row items-start justify-between pt-[130px] pb-[113px] pl-[257px] pr-[222px] box-border max-w-full gap-5 mt-[-85px] text-left text-9xl text-black font-pt-serif mq925:pl-16 mq925:pr-[55px] mq925:box-border mq1350:pl-32 mq1350:pr-[111px] mq1350:box-border mq1800:flex-wrap">
          <div className="h-[627px] w-[1920px] relative bg-ghostwhite hidden max-w-full" />
          <div className="w-[314px] flex flex-col items-start justify-start gap-[23px] text-3xs font-poppins">
            <img
              className="w-[74px] h-[78px] relative object-cover z-[1]"
              alt=""
              src="/image-1@2x.png"
            />
            <div className="h-[179px] relative leading-[30px] whitespace-pre-wrap flex items-center shrink-0 z-[1]">
              Pay My Lawyer offers user-friendly, streamlined, secure payment
              processing tailored for law firms. Manage your client inventory,
              calendar, payment history, and referrals with ease. Designed by
              legal professionals for legal professionals. No subscription fees,
              just simple, transparent transaction pricing.
            </div>
            <button className="cursor-pointer [border:none] py-1.5 px-2.5 bg-colors-blue w-[87px] rounded-lgi flex flex-row items-center justify-center box-border z-[1]">
              <img
                className="h-[20.8px] w-[10.9px] relative"
                alt=""
                src="/icon-11.svg"
              />
            </button>
          </div>
          <div className="h-[32.7px] w-[32.4px] hidden" />
          <div className="w-[464px] flex flex-row items-start justify-start gap-[132px] max-w-full mq925:flex-wrap mq450:gap-[66px]">
            <div className="flex flex-col items-center justify-start gap-3.5 z-[1] mq925:flex-1">
              <h2 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[73px] mq450:text-3xl">
                Links
              </h2>
              <div className="flex flex-col items-start justify-center gap-2.5 text-base text-gray font-poppins">
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative">Home</div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative inline-block min-w-[71px]">
                    Features
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative">Pricing</div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative inline-block min-w-[73px]">
                    About Us
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[13px] min-w-[156px] z-[1]">
              <h2 className="m-0 w-[200px] relative text-inherit font-normal font-[inherit] inline-block mq450:text-3xl">{`Help & Support`}</h2>
              <div className="flex flex-col items-start justify-center gap-2.5 text-base text-gray font-poppins">
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative inline-block min-w-[33px]">FAQ</div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative inline-block min-w-[90px]">
                    Contact Us
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative inline-block min-w-[65px]">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[399px] flex flex-col items-start justify-start gap-[42px] max-w-full mq450:gap-[21px]">
            <div className="w-[359px] flex flex-col items-start justify-start gap-10 max-w-full z-[1] mq450:gap-5">
              <h2 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] mq450:text-3xl">
                Our Address
              </h2>
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px] text-lg font-poppins">
                <div className="flex flex-col items-start justify-start gap-[30px]">
                  <div className="flex flex-row items-end justify-start gap-4">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/envelope.svg"
                    />
                    <div className="relative">ceo@paymylawyer.cc</div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/phone.svg"
                    />
                    <div className="relative">(800) PayLawyer (729-5299)</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-6 mq450:flex-wrap">
                  <img
                    className="h-[23px] w-[23px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/pinlocation.svg"
                  />
                  <div className="flex-1 relative leading-[32px] inline-block min-w-[150px]">
                    <p className="m-0">1304 E Adams St.</p>
                    <p className="m-0">Brownsville, Tx. 78520</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3 text-mini text-dimgray-300 font-poppins">
              <div className="self-stretch relative tracking-[1.4px] leading-[28px] mix-blend-normal z-[1]">
                SIGN UP FOR NEWSLETTER
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[17px] mq450:flex-wrap">
                <div className="flex-1 rounded-8xs border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-3 px-5 pb-[13px] min-w-[138px] min-h-[50px] z-[1]">
                  <input
                    className="w-[138.2px] [border:none] [outline:none] font-poppins text-sm bg-[transparent] relative text-dimgray-300 text-left inline-block mix-blend-normal p-0"
                    placeholder="Email address"
                    type="text"
                  />
                  <div className="h-[50px] w-[261px] relative rounded-8xs border-black border-[1px] border-solid box-border hidden" />
                </div>
                <button className="cursor-pointer [border:none] pt-3.5 pb-4 pl-6 pr-5 bg-black rounded-8xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-dimgray-200">
                  <div className="h-[49px] w-[120px] relative rounded-8xs bg-black hidden" />
                  <div className="relative text-base font-rubik text-white text-left z-[1]">
                    Subscirbe
                  </div>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Features;
