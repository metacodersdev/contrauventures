import React from "react";
import FounderCarousel from "./FounderCarousel";
export default function Founders() {
  return (
    <div className="mx-[34px]    lg:mx-[300px] ">
      <div className="mt-[80px] md:mt-[300px]">
        <div className="">
          <p className="font-bold robotoFlexFont  text-[13px]  md:text-[24px]">
            Founders
          </p>
          <div className="hidden md:block leading-[1] mt-[50px]">
            <p className="popinsFont text-[110px]  font-thin mb-0">
              We don’t go for Deal,
            </p>
            <div className="flex items-center justify-start space-x-5 mb-0">
              <p className="text-[110px] popinsFont italic font-[900] ">
                We go for{" "}
              </p>
              <div className="flex items-center justify-center">
                <p className="text-[110px] popinsFont italic font-[900] text-red">
                  Founders
                </p>
                <div className="bg-red w-[10px] h-[10px] xl:w-[23px] xl:h-[23px] rounded-full  mt-[30px] md:mt-[27px] xl:mt-[-41px] 2xl:mt-[57px]"></div>
              </div>
            </div>
          </div>
          <div className="block md:hidden leading-[1] mt-[27px] ">
            <p className="italic text-[40px] font-thin mb-0">We don't</p>
            <p className="italic text-[40px] font-thin  mb-0">go for Deals,</p>
            <p className="font-extrabold italic text-[40px] mb-0">We go for</p>
            <p className=" font-extrabold italic text-[40px] text-red">
              Founders
            </p>
          </div>
          <div className="popinsFont text-[13px] 2xl:text-[20px]  md:text-[20px] mt-[-16px] 2xl:mt-[76px] pt-[67px] xl:pt-0 mr-[-21px] ">
            <p className="mb-0">
              Our KPI is not the company's follow-up investment attraction
              ratio. Our KPI is the rate at which founders,
            </p>
            <p className="mb-0">
              who have already invested in the company, come to us first to
              receive seed investment. We want to be the first place founders
            </p>
            <p className="mb-0">
              call in the most desperate situations. Vietnam's victory is our
              victory.
            </p>
          </div>

          <div className="ml-[25px] md:ml-0 mb-[30px] md:mb-0  mt-[110px] md:mt-[78px] lg:mt-[200px] overflow-hidden">
            <FounderCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
