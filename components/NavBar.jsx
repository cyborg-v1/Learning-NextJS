import Link from "next/link"

function NavBar() {
  return (
    <div>
      <h1>NextJS app</h1>
      <ul>
        <li>
          <Link href={"/"}>Inicio</Link>
          <Link href={"/tienda"}>Tienda</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar