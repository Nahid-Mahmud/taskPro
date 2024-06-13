import TaskForm from "../../components/home/TaskForm";

import Tasks from "./Tasks";

const Home = () => {
  // get all tasks

  return (
    <div className="bg-primary min-h-screen p-10">
      {/* create a form  */}
      <TaskForm />
      <Tasks />
    </div>
  );
};

export default Home;
