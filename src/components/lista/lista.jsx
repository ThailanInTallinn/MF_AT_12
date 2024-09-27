import { useState } from "react";
import Item from "../item/item";
import styles from "./lista.module.css";

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
    <div
      className={styles.outerContainer}
      style={{ backgroundColor: themeOption ? "black" : "" }}
    >
      <div className={styles.headerContainer}>
        <button
          onClick={() => {
            setThemeOption(!themeOption);
          }}
        >
          {themeOption ? "Tema claro" : "Tema escuro"}
        </button>
      </div>
      <div className={styles.listaContainer}>
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
        className={styles.valorContainer}
        style={{ color: themeOption ? "white" : "black" }}
      >
        Valor total da compra: R${valorTotalVar}
      </div>
    </div>
  );
}
