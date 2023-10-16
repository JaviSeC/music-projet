import React, { useEffect, useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Link from '@mui/joy/Link';
// import { Link } from 'react-router-dom';

import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import './Body.css';

export default function Body() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://res.cloudinary.com/dq2tfglqq/image/upload/v1696407521/marvel-guardians-of-the-galaxy-videojuego-6-1635158546_ro0xuz.jpg',
    'https://res.cloudinary.com/duwenv0yr/image/upload/v1695888895/Captura_de_pantalla_2023-09-28_101148_zsdx95.png',
    'https://res.cloudinary.com/duwenv0yr/image/upload/v1696521599/2_xw0gem.png',
    'https://res.cloudinary.com/duwenv0yr/image/upload/v1696521599/6_afn13s.png',
    'https://res.cloudinary.com/duwenv0yr/image/upload/v1696522458/3_qxuevb.png',
    'https://res.cloudinary.com/duwenv0yr/image/upload/v1696521599/5_ivok3s.png',
    'https://res.cloudinary.com/duwenv0yr/image/upload/v1696521599/4_m28txg.png',
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [images]);

  const isSmallScreen = windowWidth < 600;
  const cardStyle = isSmallScreen ? { display: 'none' } : {};

  return (
   <a href='/Games'>
    <div
      style={{
        ...cardStyle,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: '-20px',
      }}
    >
      <div style={{ width: 800, margin: '0 auto' }}>
        <Card
          variant="plain"
          sx={{
            width: '100%',
            bgcolor: 'initial',
            p: 0,
            position: 'relative',
            borderRadius: '20px',
            boxShadow: '0 0 10px 8px rgba(0, 0, 0, 0.5)',

          }}
        >
          <AspectRatio ratio="4/3">
            <CardCover
              className="gradient-cover"
              sx={{
                position: 'relative',
              }}
            >
              <img
                src={images[currentImageIndex]}
                alt="Guardians of the Galaxy"
                style={{ width: '100%', height: '100%', objectFit: 'revert' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '70%',
                  left: '35%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '10px',
                  padding: '16px',
                  color: 'white',
                  fontSize: '14px',
                }}
              >
                <h2>Guardianes de la Galaxia: La Banda Sonora Intergaláctica</h2>
                <p>¡Viaja a través de las estrellas con la banda sonora que te llevará al límite del espacio! Descubre la épica música que dio vida a las aventuras de los Guardianes de la Galaxia en su emocionante videojuego.</p>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px',
                  background: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <AvatarGroup>
                    <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695228608/pexels-patrick-case-3682820_x2c5ng.jpg" />
                    <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1697451117/image_720_jmnyzf.png" />
                    <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1697449843/profile-pic_6_enulfi.png" />
                    <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1697449738/profile-pic__2__480_drjnkh.png" />
                    <Avatar alt="Travis Howard" src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1697449618/perfil_360_dalewx.png" />
                    <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1697449574/54e77de3-4286-42e3-b180-77c999bd7ba2_480_fkrv6d.png" />
                    <Avatar>+1</Avatar>
                  </AvatarGroup>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Favorite />}
                    sx={{
                      fontWeight: 'md',
                      color: 'grey',
                      '&:hover': { color: 'danger.plainColor' },
                    }}
                  >
                    33K Likes
                  </Link>
                  <Link
                    // href=""
                    href="/Games"
                    // to="/Views/MusicaAnimada/MusicaAnimada/Animadas"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Visibility />}
                    sx={{
                      fontWeight: 'md',
                      color: 'grey',
                      '&:hover': { color: 'primary.plainColor' },
                    }}
                  >
                    102.4k
                  </Link>
                </div>
              </div>
            </CardCover>
          </AspectRatio>
        </Card>
      </div>
    </div>
   </a>
    
  );
}
