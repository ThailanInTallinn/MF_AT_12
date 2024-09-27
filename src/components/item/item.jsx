import "./item.css";
import { Card, CardContent, Typography } from "@mui/material";

export default function Item({
  numeroItem,
  valor,
  quantidade,
  descricao,
  themeOption,
}) {
  return (
    <Card sx={{ bgcolor: themeOption ? "darkblue" : "" }}>
      <CardContent>
        <Typography variant="h2" sx={{ color: themeOption ? "white" : "" }}>
          Item {numeroItem}
        </Typography>
        <Typography variant="body1" sx={{ color: themeOption ? "white" : "" }}>
          Preço {valor}
        </Typography>
        <Typography variant="body1" sx={{ color: themeOption ? "white" : "" }}>
          quantidade {quantidade}
        </Typography>
        <Typography variant="body1" sx={{ color: themeOption ? "white" : "" }}>
          Valor total do item: R${valor * quantidade}
        </Typography>
        <Typography variant="body1" sx={{ color: themeOption ? "white" : "" }}>
          {descricao}
        </Typography>
      </CardContent>
    </Card>
  );
}
