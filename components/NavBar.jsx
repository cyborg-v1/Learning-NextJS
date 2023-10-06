import Link from "next/link";
import './NavBar.css'

function NavBar() {
  return (
    <div className="text-3xl font-bold text-white flex">
      <h1 className="navbar text-slña">NextJS app</h1>
      <ul className="text-base text-slate-800 flex gap-4 justify-center content-center m-auto">
        <li>
          <Link href={"/"}>Inicio</Link>
        </li>
        <li>
          <Link href={"/tienda"}>Tienda</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
        <li>
          <Link href={"/loading"}>Cargando...</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
