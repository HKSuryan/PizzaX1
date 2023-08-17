import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import productOperations from '../services/product-operations';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({pizzas,setCartPizza,setTotal,total}) {
    const addPizzaToCarts=()=>{
        pizzas.isAddedInCart = true;
        pizzas.quantity += 1;
        setCartPizza(productOperations.getProductsInCart());
        total += parseFloat(pizzas.price);
        setTotal(total)
    }
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='col-4'>
    <Card variant="outlined" sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        height="194"
        image={pizzas.url}
        alt="Paella dish"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
            {pizzas.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx = {{color:"blue"}}>
            {pizzas.price}
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description</Typography>
          <Typography paragraph>
            {pizzas.desc}
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions>
        <Button size="small" color="primary" onClick={addPizzaToCarts}>
          Add To Cart
        </Button>
      </CardActions>
    </Card></div>
  );
}