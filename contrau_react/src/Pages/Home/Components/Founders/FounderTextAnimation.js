import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import { useEffect, useState } from "react";

const FadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 1s ${FadeInUpAnimation};
`;

export default function Components() {
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText2(true);
    }, 500);
    setTimeout(() => {
      setShowText3(true);
    }, 1000);
  }, []);
  return (
    <>
      <FadeInUpDiv>
        <p className="font-bold robotoFlexFont  text-[13px]  md:text-[24px]">
          Founders
        </p>
      </FadeInUpDiv>

      {/* desktop */}
      <div className="hidden xl:block leading-[1] mt-[50px]">
        {showText2 ? (
          <FadeInUpDiv>
            <p className="popinsFont md:text-[70px]  xl:text-[110px]  font-thin mb-[5px] 2xl:mb-0">
              We don’t go for Deal,
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        {showText2 ? (
          <FadeInUpDiv>
            <div className="flex items-center justify-start lg:space-x-3 2xl:space-x-5 mb-0">
              <p className="md:leading-[60px] lg:leading-[110px] md:text-[50px] xl:text-[90px] 2xl:text-[110px] popinsFont italic font-[900]  ">
                We go for{" "}
              </p>
              <div className="flex items-center justify-center">
                <p className="md:text-[70px] lg:text-[90px] 2xl:text-[110px] popinsFont italic font-[900] text-red">
                  Founders
                </p>
                <div className="bg-red w-[10px] h-[10px]   md:w-[23px] md:h-[23px] rounded-full  mt-[30px] md:mt-[27px]  xl:mt-[-41px] 2xl:mt-[57px]"></div>
              </div>
            </div>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
      </div>

      {/* tablet */}
      <div className="hidden sm:block xl:hidden leading-[1] mt-[50px]">
        {showText2 ? (
          <FadeInUpDiv>
            <p className="popinsFont text-[64px]  font-thin  mb-0">
              We don’t go for Deal,
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        {showText2 ? (
          <FadeInUpDiv>
            <p className="leading-[110px] text-[80px] ] popinsFont italic font-[900]  ">
              We go for{" "}
            </p>
            <div className="flex items-center">
              <p className="leading-[110px] text-[80px] ] popinsFont italic font-[900]   text-red">
                Founders
              </p>
              <div className="bg-red w-[20px] h-[20px]   md:w-[23px] md:h-[23px] rounded-full  mt-[30px] md:mt-[27px]  xl:mt-[-41px] 2xl:mt-[57px]"></div>
            </div>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
      </div>

      {/* mobile */}
      <div className="block sm:hidden leading-[1] mt-[27px] ">
        {showText2 ? (
          <FadeInUpDiv>
            <p className="popinsFont text-[40px] font-thin mb-0">We don't</p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}

        {showText2 ? (
          <FadeInUpDiv>
            <p className="popinsFont font-extrabold italic text-[40px] mb-0">
              We go for
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
        {showText2 ? (
          <FadeInUpDiv>
            <p className=" font-extrabold italic text-[40px] text-red">
              Founders
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
      </div>

      <div className="popinsFont text-[13px] 2xl:text-[20px]  md:text-[20px] mt-[-16px] md:mt-[4%] 2xl:mt-[76px] pt-[67px] xl:pt-0 mr-[30px] ">
        {showText3 ? (
          <FadeInUpDiv>
            <p className="mb-0">
              We don’t pursue a high follow-up investment ratio.
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
        {showText3 ? (
          <FadeInUpDiv>
            <p className="mb-0">
              Our goal is to be the first friend that founders can turn to in
              their most difficult moments.
            </p>
          </FadeInUpDiv>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
