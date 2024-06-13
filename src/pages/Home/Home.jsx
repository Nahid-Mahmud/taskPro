import TaskForm from "../../components/home/TaskForm";

const Home = () => {
  // usestate for form data

  return (
    <div className="bg-primary min-h-screen p-10">
      {/* create a form  */}
      <TaskForm />
    </div>
  );
};

export default Home;
