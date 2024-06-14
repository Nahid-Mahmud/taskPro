import { Fragment, useState } from "react";
import useGetAllTasks from "../../hooks/useGetAllTasks";

import { FaRegEdit } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Tasks = () => {
  const apiUrl = import.meta.env.VITE_SERVER_URL;
  const { allTasks = [], refetchAllTasks, isLoading } = useGetAllTasks();
  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
  });
  const [editTaskId, setEditTaskId] = useState(null);
  // console.log(allTasks);
  const handleEditClick = (task) => {
    console.log(task);
    setEditTaskId(task?._id);
    setEditTask(task);
    console.log(editTaskId);
  };

  // console.log(allTasks);
  console.log(isLoading);

  // confirm edited data to server

  const handleEditChange = (e) => {
    e.preventDefault();
    axios
      .put(`${apiUrl}/tasks/${editTaskId}`, editTask)
      .then((res) => {
        // console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        refetchAllTasks();
        setEditTaskId(null);
      });
  };
  // delete task by id

  const deleteTaskById = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${apiUrl}/tasks/${task._id}`)
          .then((res) => {
            console.log(res);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            refetchAllTasks();
          });
      }
    });
  };

  // cancel save

  const handleCancel = () => {
    setEditTaskId(null);
  };

  if (isLoading) {
    return <div className=" text-white text-center py-10 text-3xl">Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {allTasks?.map((task) => (
            <div key={task?._id} className="xl:w-1/3 md:w-1/2 w-full p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-secondary text-white relative">
                {editTaskId === task?._id ? (
                  <form onSubmit={(e) => handleEditChange(e)}>
                    <div className="mb-2">
                      <label className="text-sm font-bold">Title</label>
                      <input
                        value={editTask?.title}
                        className="text-primary rounded p-2 w-full"
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-bold">Description</label>
                      <textarea
                        value={editTask?.description}
                        className="h-36 text-primary"
                        name="description"
                        id="description"
                        onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
                      ></textarea>
                    </div>
                    <div className="absolute top-5 right-5 flex gap-2">
                      <button type="submit" className="">
                        <IoSaveOutline title="Save" className="text-2xl" />
                      </button>
                      <button onClick={handleCancel}>
                        <IoMdCloseCircleOutline title="Cancel" className="text-2xl" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <Fragment>
                    <h2 className="text-lg font-medium title-font mb-2">{task?.title}</h2>
                    <p className="leading-relaxed ">{task?.description}</p>
                    {/* edot icon */}
                    <div onClick={() => handleEditClick(task)} className="absolute top-5 right-5 cursor-pointer">
                      <FaRegEdit className="text-2xl" />
                    </div>
                    <div onClick={() => deleteTaskById(task)} className="absolute bottom-5 right-5 cursor-pointer">
                      <MdDeleteOutline className="text-2xl" />
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;
