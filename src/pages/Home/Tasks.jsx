import useGetAllTasks from "../../hooks/useGetAllTasks";

const Tasks = () => {
  const { allTasks = [], isLoading } = useGetAllTasks();
  // console.log(allTasks);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {allTasks?.map((task) => (
            <div key={task?._id} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-secondary text-white">
                <h2 className="text-lg font-medium title-font mb-2">{task?.title}</h2>
                <p className="leading-relaxed ">{task?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;
