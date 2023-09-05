"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const handleTaskDelete = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    router.refresh();
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center mt-0">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 w-3/4">
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea
        </label>
        <input
          type="text"
          placeholder="Título..."
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="description" className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea
          placeholder="Describe tu tarea..."
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Crear
          </button>

          {params.id && (
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleTaskDelete}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPage;
