"use client"

import React from "react"
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <Box
      as="section"
      py={16}
      bg="brand.primary"
      color="white"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: { base: "100%", md: "50%" },
        bg: "url('/placeholder.svg?height=800&width=800')",
        bgSize: "cover",
        bgPosition: "center",
        opacity: "0.1",
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={10}
        >
          <VStack align={{ base: "center", md: "flex-start" }} spacing={6} maxW={{ base: "100%", md: "60%" }}>
            <Heading as="h2" size="xl">
              ¿Necesita ayuda con su caso migratorio?
            </Heading>
            <Text fontSize="lg">
              No espere más. Nuestro equipo de expertos en inmigración está listo para ayudarle 
              a conseguir los resultados que busca. Contáctenos hoy para una consulta gratuita.
            </Text>
            <Button
              as={NextLink}
              href="/consulta"
              size="lg"
              bg="brand.secondary"
              _hover={{ bg: "orange.600" }}
              rightIcon={<ArrowRight />}
            >
              Pide tu Consulta Gratis
            </Button>
          </VStack>
          
          <Box
            bg="white"
            borderRadius="lg"
            p={6}
            boxShadow="xl"
            w={{ base: "100%", md: "35%" }}
            display={{ base: "none", md: "block" }}
          >
            <VStack spacing={4} color="gray.700">
              <Heading as="h3" size="md" color="brand.primary">
                Horarios de Atención
              </Heading>
              <Flex justify="space-between" w="full">
                <Text>Lunes - Viernes:</Text>
                <Text fontWeight="medium">8AM - 4:00PM</Text>
              </Flex>
              <Flex justify="space-between" w="full">
                <Text>Sábados:</Text>
                <Text fontWeight="medium">8AM - 12PM</Text>
              </Flex>
              <Text fontSize="sm" fontStyle="italic" mt={2}>
                Horario de la Costa Este (EST)
              </Text>
              
              <Box borderTopWidth={1} borderColor="gray.200" w="full" my={2} />
              
              <Heading as="h3" size="md" color="brand.primary">
                Contacto Rápido
              </Heading>
              <Flex justify="space-between" w="full">
                <Text>Teléfono:</Text>
                <Text fontWeight="medium">1-888-578-2276</Text>
              </Flex>
              <Flex justify="space-between" w="full">
                <Text>Email:</Text>
                <Text fontWeight="medium">info@jorgerivera.com</Text>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}