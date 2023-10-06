import Link from "next/link";

function NavBar() {
  return (
    <div>
      <h1>NextJS app</h1>
      <ul>
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
