// app/preguntas/page.tsx
"use client"

import Navbar from "@/components/home/Navbar"
import Footer from "@/components/home/Footer"

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
  Button,
  VStack,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  AspectRatio,
} from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"
import { Search, Phone, Mail, ArrowRight, Play } from "lucide-react"
import { faqData } from "@/components/preguntas/preguntas"
import FAQAccordion from "@/components/preguntas/FAQAccordion"

export default function PreguntasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filtrar las preguntas basadas en el término de búsqueda
  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.some(paragraph => paragraph.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box 
        bg="linear-gradient(to right, #2B6CB0, #4299E1)" 
        color="white" 
        py={16}
      >
        <Container maxW="container.xl">
          <Heading as="h1" size="2xl" mb={4}>
            Preguntas y Respuestas
          </Heading>
          <Breadcrumb separator="›" color="whiteAlpha.800">
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Preguntas Frecuentes</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
          {/* Main FAQ Content */}
          <Box gridColumn={{ base: "1", lg: "1 / span 2" }}>
            <VStack spacing={8} align="stretch">
              <Box>
                <Heading as="h2" size="xl" mb={6} color="blue.600">
                  Preguntas Frecuentes
                </Heading>
                <Text fontSize="lg" color="gray.600" mb={6}>
                  Encuentre respuestas a las preguntas más comunes sobre nuestros servicios legales y procesos migratorios. 
                  Si no encuentra lo que busca, no dude en contactarnos directamente.
                </Text>

                {/* Search Bar */}
                <InputGroup size="lg" mb={8}>
                  <Input
                    placeholder="Buscar pregunta..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    borderRadius="md"
                    borderColor="gray.300"
                    _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
                  />
                  <InputRightElement>
                    <Icon as={Search} color="gray.500" />
                  </InputRightElement>
                </InputGroup>
              </Box>

              {/* FAQ Accordion */}
              {filteredFAQs.length > 0 ? (
                <FAQAccordion items={filteredFAQs} />
              ) : (
                <Box textAlign="center" py={10} bg="gray.50" borderRadius="md">
                  <Text fontSize="lg" mb={4}>
                    No se encontraron preguntas que coincidan con su búsqueda.
                  </Text>
                  <Button 
                    colorScheme="blue" 
                    onClick={() => setSearchTerm("")}
                  >
                    Ver todas las preguntas
                  </Button>
                </Box>
              )}
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box>
            <VStack spacing={8} align="stretch">
              {/* Contact Card */}
              <Box p={6} bg="blue.50" borderRadius="lg" borderWidth="1px" borderColor="blue.100">
                <Heading as="h3" size="md" mb={4} color="blue.700">
                  ¿No encuentra su pregunta?
                </Heading>
                <Text mb={6}>
                  Si no encuentra la respuesta que busca, contáctenos directamente y uno de nuestros especialistas le ayudará.
                </Text>
                <VStack spacing={4} align="stretch">
                  <HStack>
                    <Icon as={Phone} color="blue.500" />
                    <Text>1-888-578-2276</Text>
                  </HStack>
                  <HStack>
                    <Icon as={Mail} color="blue.500" />
                    <Text>info@visaco.co</Text>
                  </HStack>
                </VStack>
                <Button 
                  as={Link} 
                  href="/contacto" 
                  colorScheme="blue" 
                  mt={6} 
                  w="full"
                >
                  Contáctenos
                </Button>
              </Box>

              {/* Consultation Card */}
              <Box p={6} bg="white" borderRadius="lg" borderWidth="1px" borderColor="gray.200">
                <Heading as="h3" size="md" mb={4}>
                  Consulta Personalizada
                </Heading>
                <Text mb={4}>
                  Solicite una consulta privada con nuestros expertos legales para discutir su caso específico.
                </Text>
                <Button 
                  as={Link} 
                  href="/contacto" 
                  colorScheme="blue" 
                  variant="outline" 
                  rightIcon={<ArrowRight size={16} />} 
                  w="full"
                >
                  Agendar Consulta
                </Button>
              </Box>

              {/* Services Card */}
              <Box p={6} bg="white" borderRadius="lg" borderWidth="1px" borderColor="gray.200">
                <Heading as="h3" size="md" mb={4}>
                  Servicios Populares
                </Heading>
                <VStack align="stretch" spacing={3}>
                  <Button 
                    as={Link} 
                    href="/servicios/visas" 
                    variant="ghost" 
                    justifyContent="flex-start" 
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Trámites de Visas
                  </Button>
                  <Button 
                    as={Link} 
                    href="/servicios/deportaciones" 
                    variant="ghost" 
                    justifyContent="flex-start" 
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Defensa en Deportación
                  </Button>
                  <Button 
                    as={Link} 
                    href="/servicios/asilo" 
                    variant="ghost" 
                    justifyContent="flex-start" 
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Asilo Político
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Videos Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading as="h2" size="xl" color="blue.600">
                Videos Informativos
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="container.md">
                Explore nuestros videos para obtener información valiosa sobre diversos temas migratorios.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <VStack align="stretch">
                <Box 
                  position="relative"
                  borderRadius="md"
                  overflow="hidden"
                >
                  <AspectRatio ratio={16/9}>
                    <Box
                      as="img"
                      src="/placeholder.svg?height=200&width=350"
                      alt="Video Thumbnail"
                      objectFit="cover"
                    />
                  </AspectRatio>
                  <Box 
                    position="absolute" 
                    top="50%" 
                    left="50%" 
                    transform="translate(-50%, -50%)"
                    bg="rgba(0,0,0,0.6)"
                    color="white"
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                  >
                    <Icon as={Play} boxSize={6} />
                  </Box>
                </Box>
                <Heading as="h3" size="md" mt={3}>
                  Nuevas acciones ejecutivas del Presidente
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  1/153 · Suscríbete a mi canal
                </Text>
              </VStack>

              <VStack align="stretch">
                <Box 
                  position="relative"
                  borderRadius="md"
                  overflow="hidden"
                >
                  <AspectRatio ratio={16/9}>
                    <Box
                      as="img"
                      src="/placeholder.svg?height=200&width=350"
                      alt="Video Thumbnail"
                      objectFit="cover"
                    />
                  </AspectRatio>
                  <Box 
                    position="absolute" 
                    top="50%" 
                    left="50%" 
                    transform="translate(-50%, -50%)"
                    bg="rgba(0,0,0,0.6)"
                    color="white"
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                  >
                    <Icon as={Play} boxSize={6} />
                  </Box>
                </Box>
                <Heading as="h3" size="md" mt={3}>
                  ¿Qué hago si inmigración me detuvo en la frontera?
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  1/126 · Suscríbete a mi canal
                </Text>
              </VStack>

              <VStack align="stretch">
                <Box 
                  position="relative"
                  borderRadius="md"
                  overflow="hidden"
                >
                  <AspectRatio ratio={16/9}>
                    <Box
                      as="img"
                      src="/placeholder.svg?height=200&width=350"
                      alt="Video Thumbnail"
                      objectFit="cover"
                    />
                  </AspectRatio>
                  <Box 
                    position="absolute" 
                    top="50%" 
                    left="50%" 
                    transform="translate(-50%, -50%)"
                    bg="rgba(0,0,0,0.6)"
                    color="white"
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                  >
                    <Icon as={Play} boxSize={6} />
                  </Box>
                </Box>
                <Heading as="h3" size="md" mt={3}>
                  ¿Qué tienen que hacer los Tepesianos y Dreamers?
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  1/16 · Suscríbete a mi canal
                </Text>
              </VStack>
            </SimpleGrid>

            <Button 
              as="a" 
              href="https://youtube.com" 
              target="_blank" 
              colorScheme="red" 
              size="lg"
              rightIcon={<ArrowRight />}
            >
              Ver más videos
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Additional Videos Grid */}
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 2, md: 6 }} spacing={4}>
          <VStack align="stretch">
            <Box 
              position="relative"
              borderRadius="md"
              overflow="hidden"
            >
              <AspectRatio ratio={1}>
                <Box
                  as="img"
                  src="/placeholder.svg?height=120&width=120"
                  alt="Video Thumbnail"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
            <Text fontSize="xs" fontWeight="medium" noOfLines={2}>
              Inmigración: Nuevas acciones ejecutivas del Presidente
            </Text>
          </VStack>

          <VStack align="stretch">
            <Box 
              position="relative"
              borderRadius="md"
              overflow="hidden"
            >
              <AspectRatio ratio={1}>
                <Box
                  as="img"
                  src="/placeholder.svg?height=120&width=120"
                  alt="Video Thumbnail"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
            <Text fontSize="xs" fontWeight="medium" noOfLines={2}>
              ¿Tengo que pedir mi record de inmigración?
            </Text>
          </VStack>

          <VStack align="stretch">
            <Box 
              position="relative"
              borderRadius="md"
              overflow="hidden"
            >
              <AspectRatio ratio={1}>
                <Box
                  as="img"
                  src="/placeholder.svg?height=120&width=120"
                  alt="Video Thumbnail"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
            <Text fontSize="xs" fontWeight="medium" noOfLines={2}>
              Extienden la Cancelación de Citas en Inmigración
            </Text>
          </VStack>

          <VStack align="stretch">
            <Box 
              position="relative"
              borderRadius="md"
              overflow="hidden"
            >
              <AspectRatio ratio={1}>
                <Box
                  as="img"
                  src="/placeholder.svg?height=120&width=120"
                  alt="Video Thumbnail"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
            <Text fontSize="xs" fontWeight="medium" noOfLines={2}>
              ¿Qué hago si inmigración me detiene en la frontera?
            </Text>
          </VStack>

          <VStack align="stretch">
            <Box 
              position="relative"
              borderRadius="md"
              overflow="hidden"
            >
              <AspectRatio ratio={1}>
                <Box
                  as="img"
                  src="/placeholder.svg?height=120&width=120"
                  alt="Video Thumbnail"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
            <Text fontSize="xs" fontWeight="medium" noOfLines={2}>
              ¿Qué pasa si falló mi cita con inmigración?
            </Text>
          </VStack>

          <VStack align="stretch">
            <Box 
              position="relative"
              borderRadius="md"
              overflow="hidden"
            >
              <AspectRatio ratio={1}>
                <Box
                  as="img"
                  src="/placeholder.svg?height=120&width=120"
                  alt="Video Thumbnail"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
            <Text fontSize="xs" fontWeight="medium" noOfLines={2}>
              Inmigrantes: ¡NO ALQUILEN una propiedad sin su permiso!
            </Text>
          </VStack>
        </SimpleGrid>

        <Box mt={8} textAlign="center">
          <Text color="gray.500" fontSize="sm">
            Navega entre nuestros videos
          </Text>
          <HStack spacing={2} justifyContent="center" mt={2}>
            <Button size="sm" variant="outline">1 / 16</Button>
            <Button size="sm" variant="outline">Siguiente »</Button>
          </HStack>
        </Box>
      </Container>

      {/* Consultation CTA */}
      <Box bg="blue.600" color="white" py={16}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" size="xl" mb={6}>
            ¿Tienes preguntas? Adquiere tu consulta
          </Heading>
          <Button 
            as={Link}
            href="/contacto"
            size="lg"
            colorScheme="orange"
            px={8}
          >
            Ordenar Consulta
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}