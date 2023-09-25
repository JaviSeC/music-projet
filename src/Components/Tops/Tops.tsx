import React, { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";
import HeartIcon from "../IconsNextUI/HeartIcon";
import "./Tops.css"

export default function Tops() {
  // Crear un arreglo de estados, uno por cada tarjeta
  const [likedStates, setLikedStates] = useState([false, false, false]);

  // Función para cambiar el estado de una tarjeta específica
  const toggleLiked = (index: number) => {
    setLikedStates((prevLikedStates) => {
      const newLikedStates = [...prevLikedStates];
      newLikedStates[index] = !newLikedStates[index];
      return newLikedStates;
    });
  };

  return (
    <div style={{ width: "20%" }}>
      {/* Tarjeta 1 */}
      <Card
        isBlurred
        className="card1 border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Album cover"
                className="object-cover"
                height={40}
                shadow="md"
                src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695296030/pexels-clem-onojeghuo-111287_x8cozm.jpg"
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-foreground/90">Smooth Criminal</h3>
                  <p className="text-small text-foreground/80">4:13</p>
                </div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                  onPress={() => toggleLiked(0)} // Cambia el estado de la tarjeta 1
                >
                  <HeartIcon
                    className={likedStates[0] ? "[&>path]:stroke-transparent" : ""}
                    fill={likedStates[0] ? "currentColor" : "none"}
                  />
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Tarjeta 2 */}
      <Card
        isBlurred
        className="card2 border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Album cover"
                className="object-cover"
                height={40}
                shadow="md"
                src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695296030/pexels-papa-yaw-2531728_dpiwz4.jpg"
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-foreground/90">A Change Is Gonna Come</h3>
                  <p className="text-small text-foreground/80">3:55</p>
                </div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                  onPress={() => toggleLiked(1)} // Cambia el estado de la tarjeta 2
                >
                  <HeartIcon
                    className={likedStates[1] ? "[&>path]:stroke-transparent" : ""}
                    fill={likedStates[1] ? "currentColor" : "none"}
                  />
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Tarjeta 3 */}
      <Card
        isBlurred
        className="card3 border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Album cover"
                className="object-cover"
                height={40}
                shadow="md"
                src="https://res.cloudinary.com/duwenv0yr/image/upload/v1695296030/pexels-josh-sorenson-995301_gsuk6t.jpg"
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-foreground/90">In the Air Tonight</h3>
                  <p className="text-small text-foreground/80">4:26</p>
                </div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                  onPress={() => toggleLiked(2)} // Cambia el estado de la tarjeta 3
                >
                  <HeartIcon
                    className={likedStates[2] ? "[&>path]:stroke-transparent" : ""}
                    fill={likedStates[2] ? "currentColor" : "none"}
                  />
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
