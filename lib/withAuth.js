"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import Loading from "@/components/loading";

const withAuth = (WrappedComponent, requiredRole) => {
  const verifyToken = async (token) => {
    try {
      const response = await axios.post(
        "/api/verify-token",
        {
          token,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Token verification error:", error);
      return { status: "error" };
    }
  };
  const Wrapper = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [userid, setUserid] = useState(null);

    useEffect(() => {
      const checkAuth = async () => {
        const token = Cookies.get("authToken");

        if (token) {
          const data = await verifyToken(token);
          const role = data.user.userType;
          // console.log(role);
          if (role === undefined || null) {
            router.push("/unauthorized");
          }
          if (data.status === 200) {
            if (requiredRole && role !== requiredRole) {
              router.push("/unauthorized");
            } else {
              setLoading(false);
              setUserid(data.user.userid);
            }
          }
        } else {
          router.push("/");
        }
      };

      checkAuth();
    }, [router]);

    if (loading) {
      return (
        <>
          <Loading />
        </>
      );
    }

    return <WrappedComponent {...props} userid={userid} />;
  };

  return Wrapper;
};

export default withAuth;
