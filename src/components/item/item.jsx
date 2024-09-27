import styles from "./item.module.css";

export default function Item({
  numeroItem,
  valor,
  quantidade,
  descricao,
  themeOption,
}) {
  return (
    <div
      className={styles.itemContainer}
      style={{ backgroundColor: themeOption ? "darkblue" : "" }}
    >
      <h2 style={{ color: themeOption ? "white" : "" }}>Item {numeroItem}</h2>
      <p style={{ color: themeOption ? "white" : "" }}>Preço {valor}</p>
      <p style={{ color: themeOption ? "white" : "" }}>
        quantidade {quantidade}
      </p>
      <p style={{ color: themeOption ? "white" : "" }}>
        Valor total do item: R${valor * quantidade}
      </p>
      <p style={{ color: themeOption ? "white" : "" }}>{descricao}</p>
    </div>
  );
}
