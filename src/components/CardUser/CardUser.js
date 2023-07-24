import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


import "./CardUser.css";
import { Link } from 'react-router-dom';

const CardUser = ({char}) => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
      <Card className='card' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia className='media'
            component="img"
            
            image={char.image}
            alt="green iguana"
          />
          <CardContent className='content'>
            <Typography className='letra' gutterBottom variant="h5" component="div">
              {char.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {char.species} | {char.gender} 
            </Typography>
            <Typography className='letra' gutterBottom variant="h5" component="div">
              {char.id}
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
       <Link to="/shop" ><Button className='boton' size="big" color="primary"  >
         Shop
        </Button> </Link>
      </CardActions>
      
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
     
    
    </Card>
  );
}
export default CardUser;
