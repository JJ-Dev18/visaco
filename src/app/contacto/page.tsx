"use client"; 

import MapEmbed from "@/components/contacto/MapEmbed"
import WhatsAppButton from "@/components/contacto/WhatsappButton"
import ContactForm from "@/components/home/ContactForm"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"


import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  SimpleGrid,
} from "@chakra-ui/react"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <Box>
      <Navbar />

      {/* Hero Section */}
      <Box
        as="section"
        bg="linear-gradient(to right, #2B6CB0, #4299E1)"
        color="white"
        py={{ base: 10, md: 16 }}
        position="relative"
      >
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center">
            <Heading as="h1" size="2xl" fontWeight="bold">
              Contáctenos
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              Estamos aquí para ayudarle. Póngase en contacto con nosotros y un asesor le atenderá a la brevedad.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Box as="section" py={16} bg="white">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Flex
              direction="column"
              align="center"
              justify="center"
              bg="blue.50"
              p={8}
              borderRadius="lg"
              textAlign="center"
              height="100%"
            >
              <Flex align="center" justify="center" bg="blue.100" w={16} h={16} borderRadius="full" mb={4}>
                <Icon as={MapPin} boxSize={8} color="blue.600" />
              </Flex>
              <Heading as="h3" size="md" mb={2}>
                DIRECCIÓN
              </Heading>
              <Text>5820 Blue Lagoon Dr, Miami, FL 33126</Text>
            </Flex>

            <Flex
              direction="column"
              align="center"
              justify="center"
              bg="blue.50"
              p={8}
              borderRadius="lg"
              textAlign="center"
              height="100%"
            >
              <Flex align="center" justify="center" bg="blue.100" w={16} h={16} borderRadius="full" mb={4}>
                <Icon as={Phone} boxSize={8} color="blue.600" />
              </Flex>
              <Heading as="h3" size="md" mb={2}>
                CONTÁCTENOS
              </Heading>
              <Text>1-888-578-2276</Text>
              <Link href="tel:18885782276" passHref>
                <Button variant="link" colorScheme="blue" mt={2}>
                  Llamar ahora
                </Button>
              </Link>
            </Flex>

            <Flex
              direction="column"
              align="center"
              justify="center"
              bg="blue.50"
              p={8}
              borderRadius="lg"
              textAlign="center"
              height="100%"
            >
              <Flex align="center" justify="center" bg="blue.100" w={16} h={16} borderRadius="full" mb={4}>
                <Icon as={Clock} boxSize={8} color="blue.600" />
              </Flex>
              <Heading as="h3" size="md" mb={2}>
                HORARIO
              </Heading>
              <Text>Lunes a viernes 8:00AM a 4:30PM (EST)</Text>
              <Text>Sábados 8:00AM a 12:00PM (EST)</Text>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Map and Form Section */}
      <Box as="section" py={16} bg="gray.50">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
            <VStack align="flex-start" spacing={8}>
              <Heading as="h2" size="xl">
                Nuestra Ubicación
              </Heading>
              
              {/* Map Component */}
              <MapEmbed 
                address="5820 Blue Lagoon Dr, Miami, FL 33126"
                height="400px"
              />

              <Box w="full">
                <Heading as="h3" size="md" mb={4}>
                  Información de Contacto
                </Heading>
                
                <VStack spacing={4} align="flex-start">
                  <HStack>
                    <Icon as={MapPin} color="blue.500" />
                    <Text>5820 Blue Lagoon Dr, Miami, FL 33126</Text>
                  </HStack>
                  
                  <HStack>
                    <Icon as={Phone} color="blue.500" />
                    <Text>1-888-578-2276</Text>
                  </HStack>
                  
                  <HStack>
                    <Icon as={Mail} color="blue.500" />
                    <Text>info@visaco.co</Text>
                  </HStack>
                  
                  <HStack>
                    <Icon as={Clock} color="blue.500" />
                    <Text>Lunes a viernes 8:00AM a 4:30PM (EST)</Text>
                  </HStack>
                  
                  <HStack>
                    <Box w={6}></Box>
                    <Text>Sábados 8:00AM a 12:00PM (EST)</Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>

            <Box>
              <Heading as="h2" size="xl" mb={8}>
                Formulario de Contacto
              </Heading>
              <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
                <ContactForm />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber="+573001234567" 
        message="Hola, estoy interesado en los servicios legales de VisaCo."
      />

      <Footer />
    </Box>
  )
}