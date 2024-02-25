"use client";

import useAuth from "@/context/useAuth";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Login from "@/components/Login";

const Home = () => {
  const { authStatus } = useAuth();
  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <div className="flex flex-wrap -mx-2 mt-5 gap-y-8">
        <div className="w-full sm:w-1/2 px-2 flex justify-center flex-wrap items-center">
          <div className="relative text-center w-full flex justify-center flex-wrap">
            <div className="w-full max-w-[100px]">
              <img src="/favicon.ico" alt="Logo" />
            </div>
            <div className="w-full">
              <h1 className="font-bold text-3xl mb-4">
                Welcome to the <span className="text-primary">SportSync</span>
              </h1>
              <p className="text-white/60">
                Integrate the Sports Organization to the athletes.
                If you are Sport Enthusiastic Login to know where is sport happening 
                in you city, state or country. <br />
                Keep ahead of Sports Tournament, Get a early notification about any tournament.


                {/* Integrate secure user authentication into your Next.js web
                applications using Appwrite, an open-source backend server.
                Follow along as we demonstrate the step-by-step process of
                setting up and implementing authentication functionality,
                ensuring the highest level of security for your users. */}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 flex flex-wrap justify-end">
          {authStatus ? (
            <div className="max-w-md">
              <ProfileCard />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
