import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useColleges = () => {
  const { user, loading } = useAuth();

  const {
    refetch: collegesRefetch,

    data: colleges = [],
  } = useQuery(["colleges"], {
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://college-booker.vercel.app/colleges`);
      if (!res.ok) {
        throw new Error("Failed to fetch colleges");
      }
      return res.json();
    },
  });

  return [colleges, collegesRefetch];
};

export default useColleges;
