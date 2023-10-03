import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import "./Tops.css";

interface CardProps {
  imageUrl: string;
  title: string;
  artist: string;
  views: string;
  duration: string; // Nueva propiedad para la duración de la canción
}
function CardComponent(props: CardProps) {
  const { imageUrl, title, artist, views, duration } = props;
  const [liked, setLiked] = React.useState(false); // Estado para el botón "me gusta"
  const handleLikeClick = () => {
    setLiked(!liked); // Cambia el estado al hacer clic en el botón
  };
  return (

    <div className='Card-top'>
<Card variant="outlined" sx={{ width: 320, backgroundColor: '#1A1E1F'}}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={imageUrl}
            srcSet={imageUrl}
            loading="lazy"
            alt=""
            style={{ height: '165%' }}
          />
        </AspectRatio>
        <IconButton
          aria-label={`Like ${artist}`}
          size="md"
          variant="solid"
          color={liked ? "primary" : "danger"}
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
          onClick={handleLikeClick}
        >
          <Favorite />
        </IconButton>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none">
            {title}
          </Link>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions">{artist}</Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ backgroundColor: '#1A1E1F'}}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">{views}</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">{duration}</Typography> {/* Muestra la duración de la canción */}
        </CardContent>
      </CardOverflow>
    </Card>
    </div>
  );
}
export default function Tops() {
  return (

    <div className="topssongs"> Top Songs
    <div className='Cards-top'>
      <CardComponent
        imageUrl="https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/StarLord_omsbw0.jpg"
        title="Zero to Hero"
        artist="Star-Lord Band, Steve Szczepkowski, Yohann Boudreault"
        views="Views: 23K"
        duration="3:45 min"
      />
     
        <CardComponent 
          imageUrl="https://res.cloudinary.com/duwenv0yr/image/upload/v1695893709/exorci.png"
          title="Tubular Bells"
          artist="Mike Oldfield"
          views="Views: 145K"
          duration="6:02 min"
        />
         
        </div>
        </div>
  );
}