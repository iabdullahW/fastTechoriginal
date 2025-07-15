"use client";

import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";
import { MdWavingHand } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  // const [style,setStyle]=useState({display:'none'});
  const [homeDiv, setHomeDiv] = useState(false);
  const [service, setService] = useState(false);
  const [itSolution, setItSolution] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [showServicesModal, setShowServicesModal] = useState(false);
  const [showServicesModal2, setShowServicesModa2] = useState(false);
  const [showServicesModal3, setShowServicesModa3] = useState(false);
  const [showITModal, setShowITModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleHomeDiv = (tag) => {
    if (tag === "home") {
      setHomeDiv(!homeDiv);
    }
    if (tag === "service") {
      setService(!service);
    }
    if (tag === "itSolution") {
      setItSolution(!itSolution);
    }
    if (tag === "about") {
      setAbout(!about);
    }
    if (tag === "contact") {
      setContact(!contact);
    }
  };

  const changeSidebar = () => {
    setSidebar(!sidebar);
  };

  const hideSidebar = () => {
    setSidebar(false);
  };
  const handleMouseEnter = () => {
    setShowServicesModal(true);
  };
  const handleMouseEnter2 = () => {
    setShowServicesModa2(true);
  };
  const handleMouseEnter3 = () => {
    setShowServicesModa3(true);
  };

  const handleMouseLeave = () => {
    setShowServicesModal(false);
  };
  const handleMouseLeave2 = () => {
    setShowServicesModa2(false);
  };
  const handleMouseLeave3 = () => {
    setShowServicesModa3(false);
  };
  const handleMouseEnt = () => {
    setShowITModal(true);
  };

  const handleMouseLeav = () => {
    setShowITModal(false);
  };

  return (
    <>
      <div
        className={`relative max-sm:hidden ${
          activeTab === "home" ? "bg-[#F8E4EB]" : "bg-white"
        }`}
      >
        <div className="flex h-[110px] items-center justify-around">
          <div className="shadow-gray-400 flex  h-full w-[90px] items-center justify-center  rounded-b-2xl bg-gradient-to-bl from-[#9631F2] to-[#AF61F6] text-4xl font-bold text-white shadow-lg shadow-[#AF61F6l] ">
            {/* <Image src={require("/public/download-removebg-preview.png") } width={100}
      height={100}  alt="Picture of the author" /> */}
      <a href="/"> <h1 >F</h1></a>
            
            <h1>.</h1>
          </div>
          <div className="hidden w-[400px] md:block  ">
            <ul className="] flex justify-between font-medium  text-black ">
              <Link href="/" onClick={() => setActiveTab("home")}>
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link href="/mobileappdevelopment" onClick={() => setActiveTab("service")}>
                <li
                  className="relative cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Services
                  {showServicesModal && (
                    <div
                      className="absolute top-full left-0 z-50 w-[300px] rounded-lg bg-white p-4 shadow-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ul className="text-slate-600 flex flex-col gap-y-3">
                      <Link href="/mobileappdevelopment" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Mobile App Development
                        </li>
                        </Link>
                        <Link href="/softwaredevelopment" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Software Development
                        </li>
                        </Link>
                        <Link href="/socialmediamarketing" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Social Media Marketing
                        </li>
                        </Link>
                        <Link href="/graphicdesign" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Graphic Design
                        </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
              </Link>
              <Link
                href="/networkinfrastructure"
                onClick={() => setActiveTab("itSolution")}
              >
                <li
                  className="relative cursor-pointer"
                  onMouseEnter={handleMouseEnt}
                  onMouseLeave={handleMouseLeav}
                >
                  IT Solution
                  {showITModal ? (
                    <div
                      className="absolute top-full left-0 z-50 w-[300px] rounded-lg bg-white p-4 shadow-lg"
                      onMouseEnter={handleMouseEnt}
                      onMouseLeave={handleMouseLeav}
                    >
                      <ul className="text-slate-600 flex flex-col gap-y-3">
                      <Link href="/networkinfrastructure" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Network Infrastructure
                        </li>
                        </Link>
                        <Link href="/riskassessment" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        RISK ASSESSMENT
                        </li>
                        </Link>
                        <Link href="/securitysurveillance" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        SECURITY SURVEILLANCE
                        </li>
                        </Link>
                        <Link href="/signingsla" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Signing SLA
                        </li>
                        </Link>
                      </ul>
                    </div>
                  ) : null}
                </li>
              </Link>
              <Link href="/aboutUs" onClick={() => setActiveTab("about")}>
                <li className="cursor-pointer hover:text-[#9E3EF4]">
                  About Us
                </li>
              </Link>
              <Link href="/contact" onClick={() => setActiveTab("contact")}>
                <li className="cursor-pointer hover:text-[#9E3EF4]">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
          <div className="font-xl text-slate-800 flex  w-[150px] items-center justify-around border-black">
            <h3 className="text-lg font-medium text-black ">Log in</h3>
            <HiOutlineMenuAlt4
              className="cursor-pointer text-5xl text-[#9E3EF4]"
              onClick={changeSidebar}
            />
          </div>
        </div>

        {sidebar ? (
          <div className="absolute right-[0px] top-[0px] z-50 text-[#bfa3cc]  transition duration-1000">
            <div className="h-[600px] w-[300px] rounded-l-2xl  bg-[#16031F]">
              {/* <button className='px-2 py-3 text-5xl bg-yellow-500' onClick={hideSidebar}>X</button> */}
              <div className="ml-5 flex justify-end pt-2">
                <button
                  className="text-3xl  text-[#bfa3cc]"
                  onClick={hideSidebar}
                >
                  X
                </button>
              </div>
              <div className="mt-[100px] ml-[90px]">
                <h1 className="cursor-pointer text-4xl font-extrabold text-white">
                  FT.Tech
                </h1>
              </div>
              <div>
                <hr className="text-gray-600 opacity-45 m-auto mt-[40px] w-[230px]" />
              </div>
              <div>
                <ul className="mt-10 ml-8 flex flex-col gap-y-3 text-xl font-bold text-[#bfa3cc]">
                  <li className="hover:text-white">Home</li>
                  <Link href="/mobileappdevelopment" onClick={() => setActiveTab("service")}>
                <li
                  className="relative cursor-pointer"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  Services
                  {showServicesModal2 && (
                    <div
                      className="absolute top-[0px] right-64 z-50 w-[350px] rounded-lg bg-white p-4 shadow-lg"
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                    >
                      <ul className="text-slate-600 flex flex-col gap-y-3">
                      <Link href="/mobileappdevelopment" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Mobile App Development
                        </li>
                        </Link>
                        <Link href="/softwaredevelopment" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Software Development
                        </li>
                        </Link>
                        <Link href="/socialmediamarketing" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Social Media Marketing
                        </li>
                        </Link>
                        <Link href="/graphicdesign" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Graphic Design
                        </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
              </Link>
                  <Link href="/itsolution" onClick={() => setActiveTab("service")}>
                <li
                  className="relative cursor-pointer"
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  It Solution
                  {showServicesModal3 && (
                    <div
                      className="absolute top-[0px] right-64 z-50 w-[450px] rounded-lg bg-white p-4 shadow-lg"
                      onMouseEnter={handleMouseEnter3}
                      onMouseLeave={handleMouseLeave3}
                    >
                      <ul className="text-slate-600 flex flex-col gap-y-3">
                      <Link href="/mobileappdevelopment" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                       Network
                        </li>
                        </Link>
                        <Link href="/softwaredevelopment" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Software Development
                        </li>
                        </Link>
                        <Link href="/socialmediamarketing" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Social Media Marketing
                        </li>
                        </Link>
                        <Link href="/graphicdesign" onClick={() => setActiveTab("service")}>
                        <li className="cursor-pointer hover:pl-10 hover:text-[#9c3df5] hover:duration-1000">
                        Graphic Design
                        </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
              </Link>
                  <li className="hover:text-white">About Us</li>
                  <li className="flex items-center gap-x-2 ">
                    Contact Us{" "}
                    <MdWavingHand className="text-2xl text-[#FFC83D]" />
                  </li>
                </ul>
              </div>
              <div className="ml-8 mt-5 flex gap-x-3 text-[#bfa3cc] ">
                <BsInstagram className="hover:text-white" />
                <FaFacebookF className="hover:text-white" />
                <FaLinkedinIn className="hover:text-white" />
                <FaTwitter className="hover:text-white" />
                <FaYoutube className="hover:text-white" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
