import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useMyColleges = () => {
  const { user, loading } = useAuth();
  const {
    refetch: refetchMyColleges,
    isLoading: myCollegesLoading,
    data: myColleges = [],
  } = useQuery({
    queryKey: ["my-colleges", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://college-booker.vercel.app/my-colleges/${user?.email}`
      );
      return res.data;
    },
  });

  return [myColleges, refetchMyColleges, myCollegesLoading];
};

export default useMyColleges;
