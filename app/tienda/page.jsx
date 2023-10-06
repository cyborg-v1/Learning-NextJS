import Link from "next/link";
function Tienda() {
  return (
    <div>
      <Link href={"/tienda/categorias"}>Categorias</Link>
      <h1>Tienda</h1>
    </div>
  );
}

export default Tienda;
