import { useState } from "react";

const Home = () => {
  // usestate for form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-primary min-h-screen p-10">
      {/* create a form  */}
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
            className="bg-[#c541e2] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
