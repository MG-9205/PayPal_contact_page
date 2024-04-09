import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="text-white bg-Theme_color-blue h-[60vh]">
        <div className="flex flex-col justify-center h-[100%] md:pl-[10vw] items-center md:items-start gap-3 ">
          <div className="text-[3rem] font-normal md:w-[400px] w-[90%] mx-auto leading-tight md:mx-0">
            Connect With our sales team
          </div>
          <div className="text-[1rem] md:w-[400px] w-[90%] mx-auto md:mx-0">
            lets talk about hoe our payment solutions help grow your business.
          </div>
        </div>
      </div>
      <section className="md:flex justify-between px-[10vw]  pt-14 relative">
        <div className="md:flex hidden flex-col gap-8  pt-14">
          {/* Other ways to connect */}
          <div className="text-[2rem] font-medium w-[400px]">
            Some other ways to connect with us
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-medium">
              Want to speak with sales right away?
            </span>
            <span className="text-blue-500 text-[1.1rem] font-bold">
              Call 877-794-7639
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-medium">
              Need help with your exiting account?
            </span>
            <span className="text-blue-500 text-[1.1rem] font-bold">
              <Link to="/">
                Visit our Help Center
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-blue-500 pl-3"
                />
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-medium">
              Wants helpful business insights?
            </span>
            <span className="text-blue-500 text-[1.1rem] font-bold">
              <Link to="/">
                {" "}
                Visit our Busimess Resource Center
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-blue-500 pl-3"
                />
              </Link>
            </span>
          </div>
        </div>
        <div className="relative md:top-[-200px] z-10 top-[-150px]">
          <Form />
        </div>
      </section>
      <section className="flex w-[100%] justify-center pb-12">
        <div className="grid md:grid-cols-12 md:grid-rows-1 grid-rows-3 gap-[50px] w-[85%]">
          <div className="col-span-5 ">
            <div className="border-b-[1px] text-Theme_color-blue font-semibold">
              Small-to-Medium Business
            </div>
            <div className="grid grid-cols-2 mt-7">
              <div className="font-semibold flex flex-col gap-3">
                <div>Introduction</div>
                <div>Getting Started</div>
              </div>
              <div className="justify-self-end grid gap-y-3">
                <div className="font-semibold">All Solutions</div>
                <ul className="flex flex-col text-gray-700 gap-2">
                  <li>Accept Payments</li>
                  <li>Make Payments</li>
                  <li>Manage Risk</li>
                  <li>Accelerate Growth</li>
                  <li>Streamline Operations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="border-b-[1px] text-Theme_color-blue font-semibold">
              Enterprise
            </div>
            <div className="grid grid-cols-2 mt-7">
              <div className="font-semibold flex flex-col gap-3">
                <div>Introduction</div>
                <div>Platform Solutions</div>
              </div>
              <div className="justify-self-end grid gap-y-3">
                <div className="font-semibold">Marketplace Partners</div>
                <ul className="flex flex-col text-gray-700 gap-2">
                  <li>Accept Payments</li>
                  <li>Make Payments</li>
                  <li>Manage Risk</li>
                  <li>Accelerate Growth</li>
                  <li>Streamline Operations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2 ">
            <div className="border-b-[1px] text-Theme_color-blue font-semibold">
              More
            </div>

            <div className="font-semibold flex flex-col gap-3 mt-7">
              <div>Nonprofits</div>
              <div>Pricing</div>
              <div>Resource Center</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
