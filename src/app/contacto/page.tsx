"use client"; 

import ContactForm from "@/components/home/ContactForm"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"
import { Box, Button, Container, Flex, Heading, Icon, Link, SimpleGrid, Text, VStack, HStack } from "@chakra-ui/react"
import { ArrowLeft, Clock, Mail, MapPin, Phone } from "lucide-react"


export default function ContactPage() {
  return (
    <Box>
      <Navbar />

      {/* Hero Section */}
      <Box as="section" bg="linear-gradient(to right, #2B6CB0, #4299E1)" color="white" py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={6} textAlign="center">
            <Heading as="h1" size="2xl">
              Contáctenos
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              Estamos aquí para ayudarle. Póngase en contacto con nosotros y un asesor le atenderá a la brevedad.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Information */}
      <Box as="section" py={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            <VStack align="flex-start" spacing={10}>
              <VStack align="flex-start" spacing={4}>
                <Heading as="h2" size="xl">
                  Información de Contacto
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Utilice cualquiera de estos canales para comunicarse con nuestro equipo.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
                <Box
                  p={6}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor="gray.200"
                  _hover={{ boxShadow: "md", borderColor: "blue.200" }}
                  transition="all 0.3s"
                >
                  <VStack align="flex-start" spacing={4}>
                    <Flex align="center" justify="center" bg="blue.50" w={12} h={12} borderRadius="full">
                      <Icon as={MapPin} boxSize={5} color="blue.500" />
                    </Flex>
                    <Box>
                      <Text fontWeight="bold" fontSize="lg">
                        Dirección
                      </Text>
                      <Text color="gray.600">Calle 123 #45-67</Text>
                      <Text color="gray.600">Edificio Legal, Piso 5</Text>
                      <Text color="gray.600">Bogotá, Colombia</Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  p={6}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor="gray.200"
                  _hover={{ boxShadow: "md", borderColor: "blue.200" }}
                  transition="all 0.3s"
                >
                  <VStack align="flex-start" spacing={4}>
                    <Flex align="center" justify="center" bg="blue.50" w={12} h={12} borderRadius="full">
                      <Icon as={Phone} boxSize={5} color="blue.500" />
                    </Flex>
                    <Box>
                      <Text fontWeight="bold" fontSize="lg">
                        Teléfono
                      </Text>
                      <Text color="gray.600">+57 (1) 123 4567</Text>
                      <Text color="gray.600">+57 300 123 4567 (WhatsApp)</Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  p={6}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor="gray.200"
                  _hover={{ boxShadow: "md", borderColor: "blue.200" }}
                  transition="all 0.3s"
                >
                  <VStack align="flex-start" spacing={4}>
                    <Flex align="center" justify="center" bg="blue.50" w={12} h={12} borderRadius="full">
                      <Icon as={Mail} boxSize={5} color="blue.500" />
                    </Flex>
                    <Box>
                      <Text fontWeight="bold" fontSize="lg">
                        Email
                      </Text>
                      <Text color="gray.600">info@visaco.co</Text>
                      <Text color="gray.600">soporte@visaco.co</Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  p={6}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor="gray.200"
                  _hover={{ boxShadow: "md", borderColor: "blue.200" }}
                  transition="all 0.3s"
                >
                  <VStack align="flex-start" spacing={4}>
                    <Flex align="center" justify="center" bg="blue.50" w={12} h={12} borderRadius="full">
                      <Icon as={Clock} boxSize={5} color="blue.500" />
                    </Flex>
                    <Box>
                      <Text fontWeight="bold" fontSize="lg">
                        Horario de Atención
                      </Text>
                      <Text color="gray.600">Lunes a Viernes</Text>
                      <Text color="gray.600">8:00 AM - 6:00 PM</Text>
                    </Box>
                  </VStack>
                </Box>
              </SimpleGrid>

              <Box w="full" h="300px" borderRadius="lg" overflow="hidden" borderWidth="1px" borderColor="gray.200">
                <Box
                  as="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39280650613!2d-74.24789682500001!3d4.648617349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoSwgQ29sb21iaWE!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de VisaCo"
                />
              </Box>
            </VStack>

            <Box>
              <VStack align="flex-start" spacing={6} mb={6}>
                <Heading as="h2" size="xl">
                  Envíenos un Mensaje
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Complete el formulario y nos pondremos en contacto con usted lo antes posible.
                </Text>
              </VStack>

              <Box bg="white" p={8} borderRadius="lg" boxShadow="md" borderWidth="1px" borderColor="gray.200">
                <ContactForm />
              </Box>
            </Box>
          </SimpleGrid>

          <Box mt={16}>
            <VStack spacing={8} align="center">
              <Heading as="h3" size="lg" textAlign="center">
                Atención Personalizada
              </Heading>

              <Text fontSize="lg" textAlign="center" maxW="container.md">
                Nuestro equipo de asesores legales está listo para atender sus consultas y brindarle la mejor
                orientación para sus necesidades específicas.
              </Text>

              <HStack spacing={4}>
                <Button colorScheme="blue" size="lg" as={Link} href="/precios">
                  Ver Nuestros Servicios
                </Button>
                <Button variant="outline" colorScheme="blue" size="lg" as={Link} href="/">
                  Conocer Más
                </Button>
              </HStack>
            </VStack>
          </Box>

          <Button leftIcon={<ArrowLeft />} variant="ghost" mt={10} as={Link} href="/">
            Volver al Inicio
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

