"use client"; 

import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"

import Testimonials from "@/components/home/Testimonials"
import PartnersSection from "@/components/home/PartnersSection"

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  Image,
  Divider,
} from "@chakra-ui/react"
import { Check, MapPin } from "lucide-react"
import FirmValues from "@/components/nosotros/FirmValues";
import WhatsAppButton from "@/components/contacto/WhatsappButton";

export default function NosotrosPage() {
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
              Nosotros
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              Conoce a nuestro equipo de abogados especializados en derecho migratorio
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Breadcrumb */}
      <Box bg="gray.50" py={3}>
        <Container maxW="container.xl">
          <Text color="gray.600" fontSize="sm">
            ABOGADOS DE INMIGRACIÓN JORGE RIVERA » ACERCA DE NOSOTROS
          </Text>
        </Container>
      </Box>

      {/* Attorneys Section */}
      <Box as="section" py={16}>
        <Container maxW="container.xl">
          <Flex 
            direction={{ base: "column", lg: "row" }} 
            justify="space-between" 
            align="center"
            gap={{ base: 12, lg: 0 }}
          >
            {/* Left Side - Jorge Rivera */}
            <Box w={{ base: "100%", lg: "45%" }}>
              <Heading as="h2" size="xl" color="brand.primary" mb={6}>
                Jorge Rivera
              </Heading>
              
              <VStack align="flex-start" spacing={4}>
                <HStack align="flex-start" spacing={3}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box>
                    <Text fontWeight="bold">Nacido en el Salvador.</Text>
                  </Box>
                </HStack>
                
                <HStack align="flex-start" spacing={3}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box>
                    <Text fontWeight="bold">25 años de experiencia.</Text>
                  </Box>
                </HStack>
                
                <HStack align="flex-start" spacing={3}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box>
                    <Text fontWeight="bold">Fundador de la firma Jorge Rivera y asociados.</Text>
                  </Box>
                </HStack>
                
                <HStack align="flex-start" spacing={3}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box>
                    <Text fontWeight="bold">Recibió una beca para estudios de derecho en la Universidad de Miami.</Text>
                    <Text>Se graduó con honores cum Laude.</Text>
                  </Box>
                </HStack>
                
                <HStack align="flex-start" spacing={3}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box>
                    <Text fontWeight="bold">Ha atendido casos de migrantes incluyendo los estados más importantes con:</Text>
                    <Text>California, Nueva York, Illinois, Texas, Florida, Washington, Virginia, Georgia, Alabama, entre otros.</Text>
                  </Box>
                </HStack>
                
                <HStack align="flex-start" spacing={3}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box>
                    <Text fontWeight="bold">Ha participado en otras cadenas de televisión de gran audiencia como:</Text>
                    <Text>CNN, Telemundo, Estrella TV, Azteca América y diversos medios de comunicaciones locales y de ámbito nacional.</Text>
                  </Box>
                </HStack>
              </VStack>
            </Box>
            
            {/* Center - Photo */}
            <Box w={{ base: "100%", lg: "auto" }} textAlign="center">
              <Image
                src="/images/nosotros/abogados.png"
                alt="Jorge y Carolina Rivera"
                borderRadius="md"
                boxShadow="lg"
                maxH="600px"
              />
            </Box>
            
            {/* Right Side - Carolina Rivera */}
            <Box w={{ base: "100%", lg: "45%" }}>
              <Heading as="h2" size="xl" color="brand.primary" mb={6} textAlign={{ base: "left", lg: "right" }}>
                Carolina Rivera
              </Heading>
              
              <VStack align={{ base: "flex-start", lg: "flex-end" }} spacing={4}>
                <HStack align="flex-start" spacing={3} flexDirection={{ base: "row", lg: "row-reverse" }}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box textAlign={{ base: "left", lg: "right" }}>
                    <Text fontWeight="bold">Originaria de Brasil.</Text>
                  </Box>
                </HStack>
                
                <HStack align="flex-start" spacing={3} flexDirection={{ base: "row", lg: "row-reverse" }}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box textAlign={{ base: "left", lg: "right" }}>
                    <Text fontWeight="bold">Más de 10 años de experiencia como abogada.</Text>
                  </Box>
                </HStack>
                
                <HStack align="flex-start" spacing={3} flexDirection={{ base: "row", lg: "row-reverse" }}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box textAlign={{ base: "left", lg: "right" }}>
                    <Text fontWeight="bold">Trabajó para la Corte Suprema de Apelaciones de su estado de origen, Minas Gerais en Brasil.</Text>
                  </Box>
                </HStack>
                
                <HStack align="flex-start" spacing={3} flexDirection={{ base: "row", lg: "row-reverse" }}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box textAlign={{ base: "left", lg: "right" }}>
                    <Text fontWeight="bold">Se mudó a los Estados Unidos para trabajar en el Consulado Brasileño de Miami.</Text>
                  </Box>
                </HStack>
                
                <HStack align="flex-start" spacing={3} flexDirection={{ base: "row", lg: "row-reverse" }}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box textAlign={{ base: "left", lg: "right" }}>
                    <Text fontWeight="bold">Graduada de la Maestría en Leyes en la Universidad FIU - Florida International University.</Text>
                    <Text textAlign={{ base: "left", lg: "right" }}>Con el objetivo de revalidar su título de abogada también en este país.</Text>
                  </Box>
                </HStack>
                
                <HStack align="flex-start" spacing={3} flexDirection={{ base: "row", lg: "row-reverse" }}>
                  <Icon as={Check} color="green.500" boxSize={5} mt={1} />
                  <Box textAlign={{ base: "left", lg: "right" }}>
                    <Text fontWeight="bold">Después de obtener su título en Estados Unidos, Carolina Rivera comenzó su carrera como abogada de inmigración.</Text>
                    <Text textAlign={{ base: "left", lg: "right" }}>Apoyada por su esposo, el abogado Jorge Rivera.</Text>
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Firm Values */}
      <FirmValues />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Partners Section */}
      <PartnersSection />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber="+573001234567" 
        message="Hola, me gustaría obtener más información sobre su firma de abogados."
      />

      <Footer />
    </Box>
  )
}