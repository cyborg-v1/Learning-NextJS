import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Aprendiendo NextJS",
  description: "Pagina principal de la app"
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
