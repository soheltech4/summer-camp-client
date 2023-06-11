import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useMyAddedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {refetch, data: myAddedClasses, isLoading: addedClassesLoading } = useQuery(
    ["email", user?.email],
    async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    }
  );
  return [refetch, myAddedClasses, addedClassesLoading];
};

export default useMyAddedClasses;
