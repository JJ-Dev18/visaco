"use client"

import React from "react"
import {
  Box,
  Text,
  SimpleGrid,
  Center,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"

interface ValueCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  bgColor?: string;
  textColor?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ 
  title, 
  icon, 
  description,
  bgColor,
  textColor 
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false)
  const cardBg = useColorModeValue("white", "gray.700")
  const primaryColor = useColorModeValue("blue.700", "blue.200")
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <Box
      height="220px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      style={{ perspective: "1000px" }}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
      cursor="pointer"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        transition="all 0.6s ease"
        style={{ transformStyle: "preserve-3d" }}
        transform={isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
      >
        {/* Front Card - Visible by default */}
        <Flex
          direction="column"
          align="center"
          justify="center"
          p={6}
          bg={bgColor || cardBg}
          height="100%"
          width="100%"
          position="absolute"
          style={{ backfaceVisibility: "hidden" }}
          boxShadow="sm"
        >
          <Center 
            color={primaryColor} 
            fontSize="5xl" 
            mb={4}
          >
            {icon}
          </Center>
          <Text 
            fontWeight="bold" 
            fontSize="xl" 
            textAlign="center" 
            color={textColor || primaryColor}
          >
            {title}
          </Text>
        </Flex>

        {/* Back Card - Only visible on hover */}
        <Flex
          direction="column"
          align="center"
          justify="center"
          p={6}
          bg={primaryColor}
          color="white"
          height="100%"
          width="100%"
          position="absolute"
          style={{ backfaceVisibility: "hidden" }}
          transform="rotateY(180deg)"
          boxShadow="md"
        >
          <Text textAlign="center" fontSize="md">
            {description}
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default function FirmValues() {
  const values = [
    {
      title: "Equipo",
      icon: (
        <Icon viewBox="0 0 100 100" boxSize="60px" color="blue.700">
          <path
            fill="#fff"
            d="M50,30c8.3,0,15-6.7,15-15S58.3,0,50,0S35,6.7,35,15S41.7,30,50,30z M80,30c6.6,0,12-5.4,12-12s-5.4-12-12-12 s-12,5.4-12,12S73.4,30,80,30z M20,30c6.6,0,12-5.4,12-12S26.6,6,20,6S8,11.4,8,18S13.4,30,20,30z M80,36c-7.2,0-13.5,4.1-16.5,10 h-27c-3-5.9-9.3-10-16.5-10C9.6,36,0,45.6,0,56v24c0,3.3,2.7,6,6,6h8v8c0,3.3,2.7,6,6,6h60c3.3,0,6-2.7,6-6v-8h8c3.3,0,6-2.7,6-6 V56C100,45.6,90.4,36,80,36z M80,46c5.5,0,10,4.5,10,10v14H70V56C70,50.5,74.5,46,80,46z M50,46c5.5,0,10,4.5,10,10v14H40V56 C40,50.5,44.5,46,50,46z M20,46c5.5,0,10,4.5,10,10v14H10V56C10,50.5,14.5,46,20,46z M80,86H20V70h60V86z"
          />
        </Icon>
      ),
      description: "Contamos con 33 abogados y 116 empleados altamente calificados, listos para atender cualquier caso migratorio.",
      bgColor: "blue.600",
      textColor: "white",
    },
    {
      title: "Aprobamos",
      icon: (
        <Icon viewBox="0 0 100 100" boxSize="60px" color="blue.700">
          <path
            fill="#fff"
            d="M50,0C22.4,0,0,22.4,0,50c0,27.6,22.4,50,50,50c27.6,0,50-22.4,50-50C100,22.4,77.6,0,50,0z M50,90c-22.1,0-40-17.9-40-40 c0-22.1,17.9-40,40-40c22.1,0,40,17.9,40,40C90,72.1,72.1,90,50,90z M75.7,34.3L44.3,65.7L24.3,45.7c-1.6-1.6-4.1-1.6-5.7,0 c-1.6,1.6-1.6,4.1,0,5.7l22.8,22.8c0.8,0.8,1.8,1.2,2.8,1.2c1,0,2-0.4,2.8-1.2l34.3-34.3c1.6-1.6,1.6-4.1,0-5.7 C79.8,32.7,77.3,32.7,75.7,34.3z"
          />
        </Icon>
      ),
      description: "Ganamos más del 90% de los casos que recibimos, gracias a nuestra experiencia y dedicación.",
      bgColor: "blue.600",
      textColor: "white",
    },
    {
      title: "Atención Personalizada",
      icon: (
        <Icon viewBox="0 0 100 100" boxSize="60px" color="blue.700">
          <path
           fill="#fff"
            d="M95,15H75c-2.8,0-5,2.2-5,5v20c0,2.8,2.2,5,5,5h5v10c0,0.9,0.5,1.8,1.4,2.2c0.3,0.1,0.7,0.2,1,0.2c0.5,0,1-0.2,1.4-0.5 L97,45h3c2.8,0,5-2.2,5-5V25c0-2.8-2.2-5-5-5H95z M35,43.3c0.5,0.4,1,0.5,1.6,0.5c0.3,0,0.7-0.1,1-0.2c0.9-0.4,1.4-1.2,1.4-2.2V35 h5c2.8,0,5-2.2,5-5V10c0-2.8-2.2-5-5-5H5C2.2,5,0,7.2,0,10v20c0,2.8,2.2,5,5,5h3L35,43.3z M76.7,81.7c-3.3-3.3-7.5-5.2-12-5.4 c-0.3,0-0.5-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.4-0.7C63.2,73.8,63,72.4,63,71c0-1.8,0.3-3.5,0.9-5.1c0.1-0.3,0.2-0.6,0.2-0.9 c0-0.3-0.1-0.6-0.3-0.8c-1.2-1.5-1.9-3.4-1.9-5.3c0-2.2,0.9-4.4,2.4-6c0.5-0.5,0.7-1.2,0.7-1.9c0-0.7-0.3-1.3-0.8-1.8 c-2.3-2.2-3.7-5.2-3.7-8.4c0-6.5,5.3-11.7,11.8-11.7c0.9,0,1.7,0.1,2.6,0.3c2.5,0.5,5.1-0.7,6.2-3c0.9-1.8,2.5-3.2,4.4-3.9 c1.9-0.7,4-0.5,5.8,0.4c1.8,0.9,3.2,2.5,3.9,4.4c0.7,1.9,0.5,4-0.4,5.8c-0.8,1.6-2.3,2.8-4,3.3c-1.8,0.5-3.6,0.2-5.1-0.8 c-0.9-0.6-1.9-0.9-3-0.9c-3.1,0-5.7,2.6-5.7,5.7c0,1.9,0.9,3.6,2.4,4.6c0.9,0.6,1.4,1.6,1.4,2.7c0,1.1-0.5,2.1-1.4,2.7 c-0.8,0.5-1.2,1.3-1.2,2.2c0,0.8,0.3,1.5,0.9,2c1.7,1.7,2.7,4,2.7,6.5c0,1.3-0.3,2.6-0.8,3.7c-0.3,0.6-0.3,1.2-0.2,1.8 c0.1,0.6,0.4,1.1,0.9,1.5c5.1,4.3,8.1,10.6,8.1,17.2v0.7H90v-0.7C90,91.9,85.2,85.3,76.7,81.7z M43.3,76c-4.5,0.2-8.7,2.1-12,5.4 C23.2,85.3,18.4,89.9,16,95v0.7h34v-0.7c0-6.7,3-12.9,8.1-17.2c0.5-0.4,0.8-0.9,0.9-1.5c0.1-0.6,0.1-1.3-0.2-1.8 c-0.5-1.2-0.8-2.4-0.8-3.7c0-2.5,1-4.8,2.7-6.5c0.6-0.6,0.9-1.3,0.9-2c0-0.9-0.4-1.7-1.2-2.2c-0.9-0.6-1.4-1.6-1.4-2.7 c0-1.1,0.5-2.1,1.4-2.7c1.5-1,2.4-2.7,2.4-4.6c0-3.1-2.6-5.7-5.7-5.7c-1.1,0-2.1,0.3-3,0.9c-1.5,1-3.3,1.3-5.1,0.8 c-1.7-0.5-3.2-1.7-4-3.3c-0.9-1.8-1.1-3.9-0.4-5.8c0.7-1.9,2.1-3.5,3.9-4.4c1.8-0.9,3.9-1.1,5.8-0.4c1.9,0.7,3.5,2.1,4.4,3.9 c1.1,2.3,3.7,3.5,6.2,3c0.9-0.2,1.7-0.3,2.6-0.3c6.5,0,11.8,5.3,11.8,11.7c0,3.2-1.4,6.2-3.7,8.4c-0.5,0.5-0.8,1.1-0.8,1.8 c0,0.7,0.2,1.4,0.7,1.9c1.5,1.6,2.4,3.7,2.4,6c0,1.9-0.7,3.8-1.9,5.3c-0.2,0.2-0.3,0.5-0.3,0.8c0,0.3,0.1,0.6,0.2,0.9 c0.6,1.6,0.9,3.3,0.9,5.1c0,1.4-0.2,2.8-0.5,4.1c-0.1,0.3-0.2,0.5-0.4,0.7C43.8,75.9,43.6,76,43.3,76z"
          />
        </Icon>
      ),
      description: "Atención directa, cuidamos sus datos y brindamos información clara durante todo el proceso.",
      bgColor: "blue.600",
      textColor: "white",
    },
    {
      title: "Especialidad",
      icon: (
        <Icon viewBox="0 0 100 100" boxSize="60px" color="blue.700">
          <path
            fill="#fff"
            d="M92.8,31.2L68.8,7.2c-1-1-2.3-1.5-3.5-1.5H20c-2.8,0-5,2.2-5,5v78.5c0,2.8,2.2,5,5,5h60c2.8,0,5-2.2,5-5V34.7 C85,33.5,84.5,32.2,92.8,31.2z M75,83.5H25v-69h35v15c0,2.8,2.2,5,5,5h10V83.5z M70,29.5h-5v-10l5,5V29.5z M32.5,68.5v-5h35v5H32.5z M67.5,73.5v5h-35v-5H67.5z M67.5,53.5v5h-35v-5H67.5z M32.5,48.5v-5h35v5H32.5z M65,40.7c0.9,0,1.5-0.7,1.5-1.5 c0-2.2-0.6-4-1.9-5.3c-1.2-1.2-3-1.9-5.3-1.9c-0.9,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5c1.5,0,2.7,0.4,3.4,1.1 c0.7,0.7,1.1,1.9,1.1,3.4C63.5,40,64.1,40.7,65,40.7z M57.8,29.5c-0.9,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5c3.6,0,6.4,0.9,8.5,2.9 c2,2,2.9,4.9,2.9,8.5c0,0.9,0.7,1.5,1.5,1.5c0.9,0,1.5-0.7,1.5-1.5c0-4.3-1.1-7.9-3.7-10.4C66.1,30.7,62.5,29.5,57.8,29.5z M75.7,44 c0,0.9,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5c0-13.3-8.5-21.7-21.7-21.7c-0.9,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5 C68.4,25.4,75.7,32.7,75.7,44z M51.1,77.6l3.2,9.9c0.2,0.6,0.8,1,1.4,1c0.2,0,0.3,0,0.5-0.1c0.8-0.3,1.2-1.1,1-2l-3.2-9.9 c-0.3-0.8-1.1-1.2-2-1C51.3,75.9,50.9,76.8,51.1,77.6z M58.9,84.4l1.5-5c0.2-0.8-0.2-1.7-1-2c-0.8-0.2-1.7,0.2-2,1l-1.5,5 c-0.2,0.8,0.2,1.7,1,2c0.2,0,0.3,0.1,0.5,0.1C58.1,85.4,58.6,85,58.9,84.4z M46.1,75.6c-0.8-0.3-1.7,0.2-2,1l-1.5,5 c-0.2,0.8,0.2,1.7,1,2c0.2,0,0.3,0.1,0.5,0.1c0.6,0,1.2-0.4,1.4-1l1.5-5C47.3,76.8,46.9,75.9,46.1,75.6z"
          />
        </Icon>
      ),
      description: "Especialistas 100% en inmigración, dedicados exclusivamente a resolver asuntos migratorios.",
      bgColor: "blue.600",
      textColor: "white",
    },
  ]

  return (
    <Box as="section" py={12} bg="white">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} mx="auto" maxW="container.xl" px={4}>
        {values.map((value, index) => (
          <ValueCard
            key={index}
            title={value.title}
            icon={value.icon}
            description={value.description}
            bgColor={value.bgColor}
            textColor={value.textColor}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}