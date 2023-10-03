// import AspectRatio from '@mui/joy/AspectRatio';
// import Avatar from '@mui/joy/Avatar';
// import Card from '@mui/joy/Card';
// import CardCover from '@mui/joy/CardCover';
// import AvatarGroup from '@mui/joy/AvatarGroup';
// import Link from '@mui/joy/Link';
// import Favorite from '@mui/icons-material/Favorite';
// import Visibility from '@mui/icons-material/Visibility';

// export default function Body() {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop:'-20px'}}>
//       <Card
//         variant="plain"
//         sx={{
//           width: 800,
//           bgcolor: 'initial',
//           p: 0,
//           position: 'relative',
//           borderRadius: '20px',
//         }}
//       >
//         <AspectRatio ratio="4/3">
//           <CardCover
//             className="gradient-cover"
//             sx={{
//               position: 'relative',
//             }}
//           >
//             <img
//               src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/guardian_iobu69.jpg"
//               srcSet="https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/guardian_iobu69.jpg"
//               alt="Guardians of the Galaxy"
//               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//             />

//             {/* Contenedor para el texto superpuesto */}
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '70%', // Ajusta la posición vertical según tus necesidades
//                 left: '35%', // Ajusta la posición horizontal según tus necesidades
//                 transform: 'translate(-50%, -50%)', // Centra el contenido
//                 textAlign: 'center', // Centra el texto horizontalmente
//                 background: 'rgba(0, 0, 0, 0.5)',
//                 padding: '16px',
//                 color: 'white',
//                 fontSize: '14px', // Tamaño de fuente más pequeño
//               }}
//             >
//               <h2>Guardianes de la Galaxia: La Banda Sonora Intergaláctica</h2>
//               <p>¡Viaja a través de las estrellas con la banda sonora que te llevará al límite del espacio! Descubre la épica música que dio vida a las aventuras de los Guardianes de la Galaxia en su emocionante videojuego.</p>
//               {/* Puedes reemplazar el texto fijo con el contenido dinámico si lo deseas */}
//             </div>

//             <div
//               style={{
//                 position: 'absolute',
//                 bottom: '0',
//                 left: '0',
//                 right: '0',
//                 display: 'flex',
//                 alignItems: 'flex-end',
//                 padding: '16px',
//                 background: 'rgba(0, 0, 0, 0.5)',
//               }}
//             >
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
//                 <AvatarGroup>
//                   <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695228608/pexels-patrick-case-3682820_x2c5ng.jpg" />
//                   <Avatar alt="Travis Howard" src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695228607/pexels-kaique-rocha-555345_dsi7hh.jpg" />
//                   <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695228606/pexels-domineves-anthony-12495575_w6fpq4.jpg" />
//                   <Avatar>+3</Avatar>
//                 </AvatarGroup>
//                 <Link
//                   href="#dribbble-shot"
//                   level="body-xs"
//                   underline="none"
//                   startDecorator={<Favorite />}
//                   sx={{
//                     fontWeight: 'md',
//                     color: 'grey',
//                     '&:hover': { color: 'danger.plainColor' },
//                   }}
//                 >
//                   33K Likes
//                 </Link>
//                 <Link
//                   href="#dribbble-shot"
//                   level="body-xs"
//                   underline="none"
//                   startDecorator={<Visibility />}
//                   sx={{
//                     fontWeight: 'md',
//                     color: 'grey',
//                     '&:hover': { color: 'primary.plainColor' },
//                   }}
//                 >
//                   102.4k
//                 </Link>
//               </div>
//             </div>
//           </CardCover>
//         </AspectRatio>
//       </Card>
//     </div>
//   );
// }


//___________________________________________________________________________


import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import { useEffect, useState } from 'react';
export default function Body() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isSmallScreen = windowWidth < 600;
  const cardStyle = isSmallScreen ? { display: 'none' } : {};
  return (
    <div style={{ ...cardStyle, justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '-20px' }}>
      <Card
        variant="plain"
        sx={{
          width: 800,
          bgcolor: 'initial',
          p: 0,
          position: 'relative',
          borderRadius: '20px',
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
              src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/guardian_iobu69.jpg"
              srcSet="https://res.cloudinary.com/duwenv0yr/image/upload/v1695888871/guardian_iobu69.jpg"
              alt="Guardians of the Galaxy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Contenedor para el texto superpuesto */}
            <div
              style={{
                position: 'absolute',
                top: '70%', // Ajusta la posición vertical según tus necesidades
                left: '35%', // Ajusta la posición horizontal según tus necesidades
                transform: 'translate(-50%, -50%)', // Centra el contenido
                textAlign: 'center', // Centra el texto horizontalmente
                background: 'rgba(0, 0, 0, 0.5)',
                padding: '16px',
                color: 'white',
                fontSize: '14px', // Tamaño de fuente más pequeño
              }}
            >
              <h2>Guardianes de la Galaxia: La Banda Sonora Intergaláctica</h2>
              <p>¡Viaja a través de las estrellas con la banda sonora que te llevará al límite del espacio! Descubre la épica música que dio vida a las aventuras de los Guardianes de la Galaxia en su emocionante videojuego.</p>
              {/* Puedes reemplazar el texto fijo con el contenido dinámico si lo deseas */}
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
                  <Avatar alt="Travis Howard" src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695228607/pexels-kaique-rocha-555345_dsi7hh.jpg" />
                  <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695228606/pexels-domineves-anthony-12495575_w6fpq4.jpg" />
                  <Avatar>+3</Avatar>
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
                  href="#dribbble-shot"
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
  );
}