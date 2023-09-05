"use client";

import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
  const router = useRouter();

  return (
    <div
      className="bg-slate-900 p-3 flex flex-col h-full justify-between"
    >
      <h2 className="font-bold text-2xl mb-3">{task.title}</h2>
      <p>{task.description}</p>
      <div className="flex items-baseline justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12 text-sm"
        onClick={() => {
          router.push("/tasks/edit/" + task.id);
        }}
      >
        Editar
      </button>
      <p className="text-slate-400 text-sm">{new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
     
    </div>
  );
};

export default TaskCard;
