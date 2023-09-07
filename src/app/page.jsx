import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

const loadTasks = async () => await prisma.task.findMany();

const HomePage = async () => {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto mt-10">
      <h1 id="Titulo" className="text-center text-4xl my-5 flex justify-center items-center">LISTA DE TAREAS<i className="fa-solid fa-pencil ml-4 text-red-800"></i></h1>
      <div className="grid grid-cols-3 gap-7" id="CardsContainer">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
