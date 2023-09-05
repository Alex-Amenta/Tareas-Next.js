import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-violet-800">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h3 className="font-bold text-2xl">
          <Link href="/">NextCrud</Link>
        </h3>

        <ul className="flex gap-2 text-lg">
          <li className="hover:text-slate-300 mr-9">
            <Link href="/new">Nueva Tarea</Link>
          </li>
          <li className="hover:text-slate-300">
            <Link href="/about">Sobre mí</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
