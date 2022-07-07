import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupTextAnimation from "./GroupTextAnimation";
import { getPartnersList } from "../../../../reducers/homeSlice";
import "./group.css";

export default function Group() {
  const dispatch = useDispatch();

  const partners = useSelector((state) => state.homeSlice.partners);

  useEffect(() => {
    dispatch(getPartnersList());
  }, []);

  const [offset, setOffset] = useState(null);
  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="bg-partnersContactBg overflow-hidden">
        <div className="mx-[34px] md:mx-[117px] 2xl:mx-[300px] pb-[65px] mt-[84px] md:mt-[318px]">
          {/* desktop animation */}
          <div className="md:block hidden md:w-[1320px] md:h-[498px]">
            {/* start animation */}
            {offset > 100 ? <GroupTextAnimation /> : <></>}
            {/* end animation */}
          </div>

          {/* mobile animation */}
          <div className="md:hidden block w-[292px] h-[474.5px]">
            {/* start animation */}
            {offset > 100 ? <GroupTextAnimation /> : <></>}
            {/* end animation */}
          </div>
        </div>
      </div>
      <div className="bg-partnersContactBg overflow-hidden">
        <div className="hidden md:block ">
          {/* logo */}
          <div className="overflow-hidden flex  relative h-[179px] items-center">
            <div className="right-left1 absolute flex justify-center items-center ">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[173px] h-[173px] object-contain opacity-80 hover:opacity-100 mx-[2rem]"
                    key={i}
                  />
                );
              })}
            </div>
            <div className=" right-left2 absolute flex justify-center items-center ">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[173px] h-[173px] object-contain opacity-80 hover:opacity-100 mx-[2rem]"
                    key={i}
                  />
                );
              })}
            </div>
            <div className=" right-left3 absolute flex justify-center items-center ">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[173px] h-[173px] object-contain opacity-80 hover:opacity-100 mx-[2rem]"
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden flex  relative h-[179px] items-center my-[60px]">
            <div className="left-right1 absolute flex justify-center items-center">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[173px] h-[173px] object-contain opacity-80 hover:opacity-100 mx-[2rem]"
                    key={i}
                  />
                );
              })}
            </div>
            <div className=" left-right2 absolute flex justify-center items-center">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[173px] h-[173px] object-contain opacity-80 hover:opacity-100 mx-[2rem]"
                    key={i}
                  />
                );
              })}
            </div>
            <div className=" left-right3 absolute flex justify-center items-center">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[173px] h-[173px] object-contain opacity-80 hover:opacity-100 mx-[2rem]"
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden flex  relative h-[179px] items-center ">
            <div className="absolute right-left1 flex justify-center items-center">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[173px] h-[173px] object-contain opacity-80 hover:opacity-100  mx-[2rem]"
                    key={i}
                  />
                );
              })}
            </div>
            <div className="absolute right-left2 flex justify-center items-center">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[173px] h-[173px] object-contain opacity-80 hover:opacity-100  mx-[2rem]"
                    key={i}
                  />
                );
              })}
            </div>
            <div className="absolute right-left3 flex justify-center items-center">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[173px] h-[173px] object-contain opacity-80 hover:opacity-100 mx-[2rem]"
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          {/* logo */}
          <div className="flex items-center justify-center mt-[20px] ">
            <button className="mb-[129px] text-[24px] mt-[129px]  px-[40px] py-[15px] border border-white text-white hover:bg-white hover:text-black transition-all">
              View all 1000+ partners
            </button>
          </div>
        </div>
        <div className="block md:hidden ">
          {/* logo */}
          <div className="overflow-hidden flex  relative h-[80px] items-center ">
            <div className="mobile-right-left1 absolute flex justify-center items-center ">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[80px] h-[80px] object-contain opacity-80 hover:opacity-100 mx-[5px]"
                    key={i}
                  />
                );
              })}
            </div>
            <div className="mobile-right-left2 absolute flex justify-center items-center ">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[80px] h-[80px] object-contain opacity-80 hover:opacity-100 mx-[5px]"
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden flex  relative h-[80px] items-center my-[40px] ">
            <div className="mobile-left-right1 absolute flex justify-center items-center ">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[80px] h-[80px] object-contain opacity-80 hover:opacity-100 mx-[5px]"
                    key={i}
                  />
                );
              })}
            </div>
            <div className="mobile-left-right2 absolute flex justify-center items-center ">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[80px] h-[80px] object-contain opacity-80 hover:opacity-100 mx-[5px]"
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden flex  relative h-[80px] items-center ">
            <div className="mobile-right-left1 absolute flex justify-center items-center ">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[80px] h-[80px] object-contain opacity-80 hover:opacity-100 mx-[5px]"
                    key={i}
                  />
                );
              })}
            </div>
            <div className="mobile-right-left2 absolute flex justify-center items-center ">
              {partners?.map((logo, i) => {
                return (
                  <img
                    src={logo?.acf?.image}
                    alt={logo?.acf?.name}
                    className="w-[80px] h-[80px] object-contain opacity-80 hover:opacity-100 mx-[5px]"
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          {/* logo */}
          <div className="flex items-cener justify-center mt-[76px] mb-[76px]">
            <button className="px-[50px] py-[15px] text-white border hover:bg-white hover:text-black transition-all">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
