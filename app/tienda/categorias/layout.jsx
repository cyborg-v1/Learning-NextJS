import NavBarTienda from "./NavBarCategorias";

export default function TiendaLayout({ children }) {
  return <>
  <NavBarTienda categorias={["/tienda/categorias/ropa", "/tienda/categorias/computadoras"]}></NavBarTienda>
  {children}
  </>;
}
