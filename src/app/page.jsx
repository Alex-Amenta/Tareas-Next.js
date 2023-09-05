import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

const loadTasks = async () => await prisma.task.findMany();

const HomePage = async () => {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto mt-10">
      <h1 className="text-center text-4xl my-5">Lista de tareas📌</h1>
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
