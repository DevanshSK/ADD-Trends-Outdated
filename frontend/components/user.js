import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useStateContext } from "../lib/context";
// import { GetSession } from "@auth0/nextjs-auth0/";

export default function User() {
    const { setUser } = useStateContext();
    const { user, error, isLoading } = useUser();
    setUser(user);



    console.log(user);
    const route = useRouter();
    if (!user) return (
        <div className="flex flex-col items-center relative cursor-pointer" onClick={() => route.push("/api/auth/login")}>
            <FaUserCircle className="text-lg" />
            <span className="text-sm font-semibold text-gray-600">Profile</span>
        </div>
    );

    return <div className="flex flex-col items-center relative cursor-pointer">
        <img src={user.picture} alt={user.name} className="rounded-full w-[18px] h-[18px]" />
        <span className="text-sm font-semibold text-gray-600">{user["http://localhost:3000/username"] ? user["http://localhost:3000/username"] : user.given_name}</span>

    </div>

}