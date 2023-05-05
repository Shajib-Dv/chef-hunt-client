/** @format */

import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import moment from "moment";
import LazyLoad from "react-lazy-load";
import Loader from "./Shared/Loader";

const UserDetails = () => {
  const { user } = useContext(AuthContext);

  const lastLog = new Date(parseInt(user?.metadata?.lastLoginAt));
  const createdAt = new Date(parseInt(user?.metadata?.createdAt));
  if (!user) {
    return <Loader />;
  }
  return (
    <div className="md:w-4/5 mx-auto bg-[rgba(0,0,0,0.5)]  p-4 md:p-10 my-6 md:my-20 rounded-md">
      <div className="card lg:card-side bg-base-100">
        <div className="avatar flex justify-center h-64 my-6 ml-4 ">
          <div
            title={user?.displayName || "name not found"}
            className="w-64 rounded-full"
          >
            {user?.photoURL ? (
              <LazyLoad>
                <img
                  src={user?.photoURL}
                  alt="user"
                  className="inline-block h-full w-full"
                />
              </LazyLoad>
            ) : (
              <div className="avatar w-full h-full placeholder">
                <div className="bg-yellow-500 text-neutral-content rounded-full w-full">
                  <span className="text-2xl">{user?.email.slice(0, 2)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="card-body font-semibold">
          <h2 className="card-title">
            <span className="text-yellow-500">Name: </span>
            {user?.displayName || "Not added"}
          </h2>
          <p>
            <span className="text-yellow-500 font-semibold ">Email :</span>
            {user?.email}
          </p>
          <p>
            <span className="text-yellow-500 font-semibold ">Phone :</span>
            {user?.phoneNumber || "Not added"}
          </p>
          <p>
            <span className="text-yellow-500 font-semibold ">
              Account created at :
            </span>
            {moment(createdAt).format("LLLL")}
          </p>
          <p>
            <span className="text-yellow-500 font-semibold ">
              Account created time :
            </span>
            {moment(user?.metadata?.creationTime).format("LLLL")}
          </p>
          <p>
            <span className="text-yellow-500 font-semibold ">
              Last log in :
            </span>
            {moment(lastLog).format("LLLL")}
          </p>
          <p>
            <span className="text-yellow-500 font-semibold ">
              Last sign in :
            </span>
            {moment().format("LLLL")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
