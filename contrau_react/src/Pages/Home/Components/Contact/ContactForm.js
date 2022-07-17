import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import "./contactForm.scss";
import ic_file from "../../../../assets/homepage_img/ic_file.png";
import { homeServices } from "../../../../services/homeServices";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const file = data.attachFile[0];

    const dataInfor = {
      _wpcf7: 325,
      _wpcf7_version: 5.6,
      _wpcf7_locale: "en_US",
      _wpcf7_unit_tag: "wpcf7-f325-p326-o1",
      _wpcf7_container_post: 326,
      _wpcf7_posted_data_hash: "",
      title: data.title,
      email: data.email,
      message: data.message,
      phone: data.phone,
      yourName: data.yourName,
      attachFile: data?.attachFile[0],
    };

    if (file != undefined) {
      if (file?.type != "application/pdf") {
        setError("attachFile", {
          type: "filetype",
          message: "Please upload pdf file only.",
        });
        return;
      } else {
        // call api
        homeServices
          .postContactInfo(dataInfor)
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Your message has been sent successfully!",
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          });
      }
    } else {
      console.log("data", data);
      // call api
      homeServices
        .postContactInfo(data)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your message has been sent successfully!",
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    }
  };

  // reset input fields
  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset({
  //       yourname: "",
  //       phone: "",
  //       message: "",
  //       phone: "",
  //       attachFile: "",
  //       title: "",
  //       email: "",
  //     });
  //   }
  // }, [formState, reset]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Title"
            className=" lg:h-[75px]  w-full h-[40px] bg-inputBg pl-[26px]   caret-[#DB2F33] opacity-60 active:cursor-text text-[#fff] hover:opacity-100 cursor-pointer "
            id="title"
            name="title"
          />
          {errors.title?.type === "required" && (
            <p className="errorText">Please write the title !</p>
          )}
        </div>
        <div className="lg:mt-[12px] mt-[6px]">
          <input
            {...register("message", { required: true })}
            type="text"
            placeholder="Message"
            id="message"
            name="message"
            className="w-full lg:h-[191px] h-[116px] lg:pb-[117px] bg-inputBg pl-[26px] caret-[#DB2F33] opacity-60 active:cursor-text text-[#fff] hover:opacity-100 cursor-pointer "
          />
          {errors.title?.type === "required" && (
            <p className="errorText">Please write the message !</p>
          )}
        </div>
        <div className="hidden lg:block lg:mt-[12px] mt-[6px] relative ">
          <input
            {...register("attachFile")}
            type="file"
            id="file"
            name="attachFile"
            className="w-full lgl:h-[75px] bg-inputBg pt-[30px] pl-[100px] text-[#fff]  custom-file-input cursor-pointer"
          />
          <img
            src={ic_file}
            alt="file"
            className="absolute top-5 left-[30px]"
          />
          {errors.attachFile && (
            <p className="errorText"> {errors.attachFile?.message}</p>
          )}
        </div>
        <div id="contactD" className="block  lg:mt-[12px] lg:flex lg:space-x-4">
          <div className="w-full lg:w-[33%]">
            <input
              {...register("yourName", {
                required: true,
                pattern: /^[a-zA-Z ]+$/,
              })}
              type="text"
              id="yourName"
              name="yourName"
              placeholder="Your name"
              className="w-full  h-[40px]  mt-[6px] lg:mt-0 lg:h-[77px] bg-inputBg text-[#fff]  pl-[26px]  caret-[#DB2F33] opacity-60 active:cursor-text text-[#fff]  hover:opacity-100 cursor-pointer "
            />
            {errors.yourName?.type === "required" && (
              <p className="errorText ">Please write your name !</p>
            )}
            {errors.yourName?.type === "pattern" && (
              <p className="errorText ">Please check your name !</p>
            )}
          </div>
          <div className="w-full   lg:w-[33%]">
            <input
              {...register("phone", {
                required: true,
                pattern: /^\d+$/,
              })}
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="w-full  h-[40px]  mt-[6px] lg:mt-0  lg:h-[77px] bg-inputBg text-[#fff]  pl-[26px] caret-[#DB2F33] opacity-60 active:cursor-text text-[#fff]  hover:opacity-100 cursor-pointer "
            />
            {errors.phone?.type === "required" && (
              <p className="errorText ">Please write your phone number !</p>
            )}
            {errors.phone?.type === "pattern" && (
              <p className="errorText ">Please check your phone number !</p>
            )}
          </div>
          <div className="lg:w-[33%]">
            <input
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              className="w-full  h-[40px]  mt-[6px] lg:mt-0   lg:h-[77px] bg-inputBg text-[#fff] pl-[26px] caret-[#DB2F33] opacity-60 active:cursor-text text-[#fff]  hover:opacity-100 cursor-pointer "
            />
            {errors.email?.type === "required" && (
              <p className="errorText ">Please write your email !</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="errorText ">Please check your email address !</p>
            )}
          </div>
        </div>

        {/* button submit */}
        <div className="flex items-center justify-center lg:justify-end  lg:mt-[44px] mt-[33px]">
          <button
            type="submit"
            className="popinsFont mb-0 lg:text-[24px] font-semibold w-[289px] h-[58px] lg:w-[339px] lg:h-[84px] bg-white text-black hover:bg-black hover:border hover:border-white hover:text-white transition-all cursor-pointer flex items-center justify-center"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
