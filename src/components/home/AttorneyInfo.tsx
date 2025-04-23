"use client"

import React from "react"
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Icon,
  Stack,
} from "@chakra-ui/react"
import { Check } from "lucide-react"

export default function AttorneyInfo() {
  const benefits = [
    "26 años de experiencia",
    "Conocemos bien las leyes",
    "Le decimos la verdad",
    "Miles de casos resueltos",
    "Trabajamos en equipo",
    "Atención personalizada",
  ]

  return (
    <Box as="section" py={12} bg="white">
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 8, lg: 16 }}
          align={{ base: "center", lg: "start" }}
        >
          <Box w={{ base: "100%", lg: "60%" }} order={{ base: 2, lg: 1 }}>
            <VStack align="start" spacing={8}>
              <Heading as="h2" size="xl" color="brand.primary">
                Abogado de Inmigración Jorge Rivera
              </Heading>
              
              <Flex 
                flexWrap="wrap" 
                gap={4}
                mb={4}
              >
                {benefits.slice(0, 3).map((benefit, index) => (
                  <HStack key={index} spacing={2} minW="220px">
                    <Icon as={Check} color="blue.500" boxSize={5} />
                    <Text fontSize="md">{benefit}</Text>
                  </HStack>
                ))}
              </Flex>
              
              <Flex 
                flexWrap="wrap" 
                gap={4}
                mb={6}
              >
                {benefits.slice(3).map((benefit, index) => (
                  <HStack key={index} spacing={2} minW="220px">
                    <Icon as={Check} color="blue.500" boxSize={5} />
                    <Text fontSize="md">{benefit}</Text>
                  </HStack>
                ))}
              </Flex>
              
              <Text color="gray.600" fontSize="lg">
                El abogado Jorge Rivera es un abogado de inmigración de gran prestigio y credibilidad en el 
                mercado hispano, siendo conocido por sus increíbles éxitos en casos migratorios por más de 26 
                años.
              </Text>
              
              <Text color="gray.600" fontSize="lg">
                Muchos lo conocen por sus años de apariciones en el famoso programa "Sábado Gigante" de Don 
                Francisco donde estuvo por más de 10 años emocionando la comunidad latina con sus victorias; 
                también en programas como Primer Impacto, Despierta América y Última Hora.
              </Text>
              
              <Text color="gray.600" fontSize="lg">
                Miles de vidas cambiadas y sueños americanos fueron logrados por aquellos que confiaron su 
                caso al abogado. Él ha ofrecido asesoría legal a inmigrantes en situación de desventaja por más 
                de 26 años, a través de eventos en vivo, televisión, radio, periódicos, chats y blogs en Internet, 
                siendo una gran ayuda y apoyo a la comunidad.
              </Text>
            </VStack>
          </Box>
          
          <Flex 
            justify="center" 
            align="center" 
            w={{ base: "100%", lg: "40%" }}
            order={{ base: 1, lg: 2 }}
          >
            <Image
              src="/images/home/why.png"
              alt="Abogado Jorge Rivera"
              borderRadius="lg"
              boxShadow="xl"
              maxH="450px"
              objectFit="cover"
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}