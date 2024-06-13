import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import useGetAllTasks from "../../hooks/useGetAllTasks";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const { refetchAllTasks, isLoading } = useGetAllTasks();

  const apiUrl = import.meta.env.VITE_SERVER_URL;

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // post data to server
    console.log(apiUrl);
    axios
      .post(`${apiUrl}/tasks`, formData)
      .then((res) => {
        // console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your task has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        refetchAllTasks();
        setFormData({
          title: "",
          description: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={onFormSubmit} className="max-w-lg mx-auto p-4 bg-secondary text-white shadow-md rounded-md ">
      <h2 className="text-xl font-bold mb-4">Add a New Todo</h2>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter todo title"
          required={true}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter todo description"
          required={true}
        />
      </div>
      <div className="flex">
        <button
          type="submit"
          name="submit"
          disabled={isLoading}
          className="bg-[#c541e2] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
