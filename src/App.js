import Footer from "./component/footer";
import Header from "./component/header";
import { Products } from "./component/products";
import Container from "@mui/material/Container";

function App() {
  const data = [
    {
      id: 1,
      name: "Produto 1",
      price: 10.0,
      image: "https://placehold.co/150x150",
    },
    {
      id: 2,
      name: "Produto 2",
      price: 20.0,
      image: "https://placehold.co/150x150",
    },
    {
      id: 3,
      name: "Produto 3",
      price: 30.0,
      image: "https://placehold.co/150x150",
    },
    {
      id: 4,
      name: "Produto 4",
      price: 40.0,
      image: "https://placehold.co/150x150",
    },
  ];

  return (
    <Container sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header title="Loja de produtos" />
      <Products title="Lista de Produtos" data={data} />
      <Footer>Todos os direitos reservados</Footer>
    </Container>
  );
}

export default App;
