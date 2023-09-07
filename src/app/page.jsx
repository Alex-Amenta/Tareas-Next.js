import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const loadTasks = async () => await prisma.task.findMany();

const HomePage = async () => {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto mt-10">
      <h1 id="Titulo" className="text-center text-4xl my-5 flex justify-center items-center">LISTA DE TAREAS<FontAwesomeIcon icon={faPencil} className="ml-4 text-red-800 w-7"/></h1>
      <div className="grid grid-cols-3 gap-7" id="CardsContainer">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
