import Link from "next/link";

function NavBarTienda({ categorias }) {
  return (
    <div>
      <ul>
        {categorias.map((cate) => {
          return <li>
            <Link href={cate}>{cate}</Link>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default NavBarTienda;
