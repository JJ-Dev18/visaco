"use client"; 

import WhatsAppButton from "@/components/contacto/WhatsappButton"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Icon,
  Divider,
  HStack,
  Stack,
  Badge,
} from "@chakra-ui/react"
import { MessageSquare, Briefcase, Globe, Check, Clock, AlertCircle, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function ConsultaPage() {
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
              Elija la consulta de su preferencia
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              Seleccione el tipo de consulta que necesita y uno de nuestros abogados especializados le atenderá.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Consultation Types Section */}
      <Box as="section" py={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {/* Regular Consultation */}
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Box p={6} bg="blue.600" color="white" textAlign="center">
                <Icon as={MessageSquare} boxSize={16} mb={4} />
                <Heading as="h3" size="lg">
                  Consulta Regular
                </Heading>
              </Box>
              <Box p={6} bg="white">
                <VStack spacing={4} align="flex-start">
                  <Text>
                    Esta consulta se dará en 24-72 horas y le daremos asesoría legal acerca de su situación inmigratoria, se le brindará atención personalizada.
                  </Text>
                  <Text>La consulta incluye:</Text>
                  <VStack spacing={2} align="flex-start">
                    <HStack>
                      <Icon as={Check} color="green.500" />
                      <Text>Evaluación de su caso</Text>
                    </HStack>
                    <HStack>
                      <Icon as={Check} color="green.500" />
                      <Text>Recomendaciones personalizadas</Text>
                    </HStack>
                    <HStack>
                      <Icon as={Check} color="green.500" />
                      <Text>Seguimiento por email</Text>
                    </HStack>
                  </VStack>
                  <Divider my={4} />
                  <Box w="full">
                    <Text decoration="line-through" color="gray.500">
                      Antes: $250
                    </Text>
                    <HStack>
                      <Text fontWeight="bold" fontSize="2xl" color="blue.600">
                        AHORA: $150
                      </Text>
                      <Badge colorScheme="red">40% OFF</Badge>
                    </HStack>
                  </Box>
                  <Button
                    as={Link}
                    href="/contacto"
                    colorScheme="blue"
                    size="lg"
                    width="full"
                    mt={4}
                  >
                    Click aquí para realizar la consulta
                  </Button>
                </VStack>
              </Box>
            </Box>

            {/* Employment Consultation */}
            <Box 
              borderWidth="1px" 
              borderRadius="lg" 
              overflow="hidden"
              boxShadow="lg"
              borderColor="blue.200"
            >
              <Box p={6} bg="blue.800" color="white" textAlign="center">
                <Icon as={Briefcase} boxSize={16} mb={4} />
                <Heading as="h3" size="lg">
                  Consultas de empleo
                </Heading>
              </Box>
              <Box p={6} bg="white">
                <VStack spacing={4} align="flex-start">
                  <Text>
                    Ofrecemos una solución migratoria con base en un empleador, inversión o por ser un profesional especial o requisitado en los Estados Unidos.
                  </Text>
                  <Text>La consulta incluye:</Text>
                  <VStack spacing={2} align="flex-start">
                    <HStack>
                      <Icon as={Check} color="green.500" />
                      <Text>Análisis de su situación laboral</Text>
                    </HStack>
                    <HStack>
                      <Icon as={Check} color="green.500" />
                      <Text>Opciones de visas de trabajo</Text>
                    </HStack>
                    <HStack>
                      <Icon as={Check} color="green.500" />
                      <Text>Asesoría sobre requisitos</Text>
                    </HStack>
                  </VStack>
                  <Divider my={4} />
                  <Box w="full">
                    <Text decoration="line-through" color="gray.500">
                      Antes: $250
                    </Text>
                    <HStack>
                      <Text fontWeight="bold" fontSize="2xl" color="blue.600">
                        AHORA: $150
                      </Text>
                      <Badge colorScheme="red">40% OFF</Badge>
                    </HStack>
                  </Box>
                  <Button
                    as={Link}
                    href="/contacto"
                    colorScheme="blue"
                    size="lg"
                    width="full"
                    mt={4}
                  >
                    Click aquí para realizar la consulta
                  </Button>
                </VStack>
              </Box>
            </Box>

            {/* International Consultation */}
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Box p={6} bg="blue.900" color="white" textAlign="center">
                <Icon as={Globe} boxSize={16} mb={4} />
                <Heading as="h3" size="lg">
                  Consulta Internacional
                </Heading>
              </Box>
              <Box p={6} bg="white">
                <VStack spacing={4} align="flex-start">
                  <Text>
                    Eliges esta consulta es porque te encuentras fuera de los Estados Unidos. A través de e-mail o llamada telefónica coordinaremos una cita.
                  </Text>
                  <Text>La consulta incluye:</Text>
                  <VStack spacing={2} align="flex-start">
                    <HStack>
                      <Icon as={Check} color="green.500" />
                      <Text>Asesoría internacional</Text>
                    </HStack>
                    <HStack>
                      <Icon as={Check} color="green.500" />
                      <Text>Opciones de visas disponibles</Text>
                    </HStack>
                    <HStack>
                      <Icon as={Check} color="green.500" />
                      <Text>Coordinación a distancia</Text>
                    </HStack>
                  </VStack>
                  <Divider my={4} />
                  <Box w="full">
                    <Text decoration="line-through" color="gray.500">
                      Antes: $250
                    </Text>
                    <HStack>
                      <Text fontWeight="bold" fontSize="2xl" color="blue.600">
                        AHORA: $120
                      </Text>
                      <Badge colorScheme="red">52% OFF</Badge>
                    </HStack>
                  </Box>
                  <Button
                    as={Link}
                    href="/contacto"
                    colorScheme="blue"
                    size="lg"
                    width="full"
                    mt={4}
                  >
                    Click aquí para realizar la consulta
                  </Button>
                </VStack>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Satisfaction Guarantee */}
      <Box as="section" py={16} bg="gray.50">
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} spacing={10} align="center">
            <Box flex="1" textAlign="center" display={{ base: "block", md: "block" }}>
              <Box 
                width="200px" 
                height="200px" 
                borderRadius="full" 
                bg="gold" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                flexDirection="column"
                m="0 auto"
                boxShadow="lg"
                border="3px solid"
                borderColor="yellow.600"
              >
                <Text fontWeight="bold" fontSize="xl" color="blue.900">MONEY</Text>
                <Text fontWeight="bold" fontSize="xl" color="blue.900">BACK</Text>
                <Text fontWeight="bold" fontSize="md" color="blue.900">GUARANTEE</Text>
              </Box>
            </Box>
            <Box flex="2">
              <Heading as="h2" size="xl" mb={6} textAlign={{ base: "center", md: "left" }}>
                Satisfacción garantizada, o le devolvemos su dinero.
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                <Box>
                  <Heading as="h3" size="md" mb={4}>
                    Cancelación
                  </Heading>
                  <Text>
                    Si la cancelación es 24hs antes de su consulta o más, usted recibirá una devolución completa, menos el 5% del pago realizado, en concepto de gastos administrativos.
                  </Text>
                </Box>
                
                <Box>
                  <Heading as="h3" size="md" mb={4}>
                    Reprogramación
                  </Heading>
                  <Text>
                    Si pide una reprogramación de su cita con 24hs de anticipación o más, no tendrá ninguna penalidad.
                  </Text>
                </Box>
                
                <Box>
                  <Heading as="h3" size="md" mb={4}>
                    Impuntualidad
                  </Heading>
                  <Text>
                    El margen de tolerancia para comenzar la consulta es de 10 minutos. Luego de ese tiempo, usted perderá el dinero del pago realizado.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Additional Info */}
      <Box as="section" py={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <VStack align="center" spacing={4}>
              <Icon as={Clock} boxSize={12} color="blue.600" />
              <Heading as="h3" size="md" textAlign="center">
                Respuesta Rápida
              </Heading>
              <Text textAlign="center">
                Nuestro equipo legal se pondrá en contacto con usted en un plazo de 24 a 72 horas.
              </Text>
            </VStack>
            
            <VStack align="center" spacing={4}>
              <Icon as={AlertCircle} boxSize={12} color="blue.600" />
              <Heading as="h3" size="md" textAlign="center">
                Garantía de Calidad
              </Heading>
              <Text textAlign="center">
                Si no está satisfecho con nuestra asesoría, le devolvemos su dinero según nuestras políticas.
              </Text>
            </VStack>
            
            <VStack align="center" spacing={4}>
              <Icon as={RefreshCw} boxSize={12} color="blue.600" />
              <Heading as="h3" size="md" textAlign="center">
                Opciones Flexibles
              </Heading>
              <Text textAlign="center">
                Puede reprogramar su consulta con 24 horas de anticipación sin ninguna penalidad.
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber="+573001234567" 
        message="Hola, estoy interesado en solicitar una consulta legal con VisaCo."
      />

      <Footer />
    </Box>
  )
}