import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useMyColleges = () => {
  const { user, loading } = useAuth();
  const { refetch: refetchMyColleges, data: myColleges = [] } = useQuery({
    queryKey: ["my-colleges", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/my-colleges/${user?.email}`
      );
      return res.data;
    },
  });

  return [myColleges, refetchMyColleges];
};

export default useMyColleges;
