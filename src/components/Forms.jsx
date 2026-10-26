
import { useState } from "react";

const Forms = ({ data, setData }) => {
    console.log(data);
    
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.body.trim()) {
      return;
    }

    setData([
      ...data,
      {
        id: Date.now(),
        ...formData,
      },
    ]);

    setFormData({
      title: "",
      body: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 w-full max-w-2xl gap-4 md:flex md:items-center md:gap-4 bg-[#21303E] p-4 rounded-xl shadow-sm"
    >
      <input
        type="text"
        name="title"
        placeholder="Add Title..."
        value={formData.title}
        onChange={handleInputChange}
        className="w-full bg-white px-4 py-2.5 rounded-lg border border-gray-200 text-gray-800"
      />

      <input
        type="text"
        name="body"
        placeholder="Add Description..."
        value={formData.body}
        onChange={handleInputChange}
        className="w-full bg-white px-4 py-2.5 rounded-lg border border-gray-200 text-gray-800"
      />

      <button
        type="submit"
        className="w-full md:w-auto md:px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-lg cursor-pointer whitespace-nowrap"
      >
        Add Item
      </button>
    </form>
  );
};

export default Forms;
