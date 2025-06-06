"use client"

import React from "react"
import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react"

interface PartnerProps {
  name: string
  logo: string
  width?: number
}

export default function PartnersSection() {
  const partners: PartnerProps[] = [
    {
      name: "CNN en Español",
      logo: "/images/partners/cnn.png",
      width: 160,
    },
    {
      name: "Despierta América",
      logo: "/images/partners/despierta.png",
      width: 170,
    },
    {
      name: "Telemundo",
      logo: "/images/partners/telemundo.png",
      width: 180,
    },
    {
      name: "Primer Impacto",
      logo: "/images/partners/primer.png",
      width: 170,
    },
    {
      name: "Sábado Gigante",
      logo: "/images/partners/sabado-gigante_1.png",
      width: 160,
    },
    {
      name: "American Immigration Lawyers Association",
      logo: "/images/partners/aila.jpg",
      width: 180,
    },
    {
      name: "Better Business Bureau",
      logo: "/images/partners/bbb.png",
      width: 160,
    },
    {
      name: "Hoy Día",
      logo: "/images/partners/hoydia.png",
      width: 160,
    },
  ]

  return (
    <Box as="section" py={16} bg="white">
      <Container maxW="container.xl">
        <Flex 
          direction="column" 
          align="center"
          mb={12}
        >
          <Heading 
            as="h2" 
            size="xl" 
            mb={4} 
            textAlign="center"
            color="brand.primary"
          >
            Nuestros Aliados
          </Heading>
          <Text 
            fontSize="lg" 
            color="gray.600" 
            maxW="container.md" 
            textAlign="center"
          >
            Medios y organizaciones con los que hemos trabajado a lo largo de nuestra trayectoria
          </Text>
        </Flex>
        
        <SimpleGrid 
          columns={{ base: 2, md: 4 }} 
          spacing={10} 
          justifyItems="center"
        >
          {partners.map((partner, index) => (
            <Flex 
              key={index} 
              justify="center" 
              align="center" 
              h="100px"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                maxW={`${partner.width}px`}
                maxH="80px"
                objectFit="contain"
              />
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}