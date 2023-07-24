import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardBooks = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={data.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.price} | {data.Category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardBooks;