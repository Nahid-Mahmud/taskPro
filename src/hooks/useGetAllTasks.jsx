import { useQuery } from "@tanstack/react-query";

const useGetAllTasks = () => {
  const apiUrl = import.meta.env.VITE_SERVER_URL;

  const {
    data: allTasks = [],
    isLoading,
    refetch: refetchAllTasks,
  } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/tasks`);
      return response.json();
    },
  });
  return { allTasks, isLoading, refetchAllTasks };
};

export default useGetAllTasks;
