import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useUserData = () => {
  const { user, loading } = useAuth();

  const { refetch: refetchUser, data: userData = [] } = useQuery({
    queryKey: ["profile", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://college-booker.vercel.app/profile/update/${user?.email}`
      );
      return res.data;
    },
  });

  return [userData, refetchUser];
};

export default useUserData;
