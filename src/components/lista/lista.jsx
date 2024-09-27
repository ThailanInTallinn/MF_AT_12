import { useState } from "react";
import Item from "../item/item";
import "./lista.css";
import { Container, Box, Button } from "@mui/material";

export default function Lista() {
  const [themeOption, setThemeOption] = useState(false);

  let valorTotalVar = 0;

  const itemsObject = [
    { valorUnitario: 100, quantidade: 5, descricao: "Um item incrivel" },
    {
      valorUnitario: 250,
      quantidade: 3,
      descricao: "Um item maravilhoso",
    },
    {
      valorUnitario: 300,
      quantidade: 1,
      descricao: "Um item fantastico",
    },
  ];
  return (
    <Container
      className="outerContainer"
      maxWidth="sm"
      sx={{ bgcolor: themeOption ? "black" : "" }}
    >
      <Box className="headerContainer">
        <Button
          variant="contained"
          onClick={() => {
            setThemeOption(!themeOption);
          }}
        >
          {themeOption ? "Tema claro" : "Tema escuro"}
        </Button>
      </Box>
      <div className="listaContainer">
        {itemsObject.map((item, index) => {
          valorTotalVar += item.quantidade * item.valorUnitario;
          console.log(valorTotalVar);
          return (
            <Item
              key={index}
              valor={item.valorUnitario}
              quantidade={item.quantidade}
              numeroItem={index + 1}
              descricao={item.descricao}
              themeOption={themeOption}
            />
          );
        })}
      </div>
      <div
        className="valorContainer"
        style={{ color: themeOption ? "white" : "black" }}
      >
        Valor total da compra: R${valorTotalVar}
      </div>
    </Container>
  );
}
