"use client"; 

import FAQ from "@/components/home/Faq"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"
import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    Heading,
    Icon,
    Link,
    SimpleGrid,
    Text,
    VStack,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react"
  import { ArrowLeft, CreditCard, DollarSign, HelpCircle } from "lucide-react"

  
  export default function PricingPage() {
    return (
      <Box>
        <Navbar />
  
        {/* Hero Section */}
        <Box as="section" bg="linear-gradient(to right, #2B6CB0, #4299E1)" color="white" py={{ base: 12, md: 20 }}>
          <Container maxW="container.xl">
            <VStack spacing={6} textAlign="center">
              <Heading as="h1" size="2xl">
                Nuestros Precios
              </Heading>
              <Text fontSize="xl" maxW="container.md">
                Ofrecemos planes transparentes y flexibles adaptados a sus necesidades legales.
              </Text>
            </VStack>
          </Container>
        </Box>
  
        {/* Main Pricing Section */}
        <Box as="section" py={16}>
          <Container maxW="container.xl">
            <VStack spacing={16}>
              {/* Service Categories */}
              <VStack spacing={8} w="full">
                <Heading as="h2" size="xl" textAlign="center">
                  Categorías de Servicios
                </Heading>
  
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
                 
                </SimpleGrid>
              </VStack>
  
              {/* Detailed Services */}
              <VStack spacing={8} w="full">
                <Heading as="h2" size="xl" textAlign="center">
                  Servicios Detallados
                </Heading>
  
                <Box w="full">
                  {[
                    {
                      category: "Trámites de Visas",
                      services: [
                        {
                          name: "Visa de Trabajo",
                          price: "1.200.000",
                          description: "Asesoría completa para obtención de visa laboral",
                        },
                        {
                          name: "Visa de Estudiante",
                          price: "900.000",
                          description: "Trámite de visa para estudios en el extranjero",
                        },
                        {
                          name: "Visa de Inversionista",
                          price: "1.800.000",
                          description: "Proceso completo para inversionistas extranjeros",
                        },
                        {
                          name: "Visa de Turismo",
                          price: "600.000",
                          description: "Asistencia en trámites de visa turística",
                        },
                      ],
                    },
                    {
                      category: "Servicios Contractuales",
                      services: [
                        {
                          name: "Elaboración de Contrato",
                          price: "500.000",
                          description: "Redacción personalizada de contratos legales",
                        },
                        {
                          name: "Revisión de Contrato",
                          price: "300.000",
                          description: "Análisis y recomendaciones sobre contratos existentes",
                        },
                        {
                          name: "Negociación Contractual",
                          price: "700.000",
                          description: "Representación en procesos de negociación",
                        },
                      ],
                    },
                    {
                      category: "Representación Legal",
                      services: [
                        {
                          name: "Representación Administrativa",
                          price: "1.000.000",
                          description: "Representación ante entidades administrativas",
                        },
                        {
                          name: "Representación Judicial",
                          price: "Desde 1.500.000",
                          description: "Representación en procesos judiciales",
                        },
                        {
                          name: "Mediación",
                          price: "800.000",
                          description: "Servicios de mediación en conflictos legales",
                        },
                      ],
                    },
                  ].map((category, index) => (
                    <Box key={index} mb={10}>
                      <Heading as="h3" size="lg" mb={6} color="blue.600">
                        {category.category}
                      </Heading>
  
                      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Box bg="blue.50" p={4} borderBottomWidth="1px">
                          <Flex>
                            <Text fontWeight="bold" flex="2">
                              Servicio
                            </Text>
                            <Text fontWeight="bold" flex="3">
                              Descripción
                            </Text>
                            <Text fontWeight="bold" flex="1" textAlign="right">
                              Precio (COP)
                            </Text>
                          </Flex>
                        </Box>
  
                        {category.services.map((service, serviceIndex) => (
                          <Box
                            key={serviceIndex}
                            p={4}
                            borderBottomWidth={serviceIndex < category.services.length - 1 ? "1px" : "0"}
                            _hover={{ bg: "gray.50" }}
                          >
                            <Flex align="center">
                              <Text fontWeight="medium" flex="2">
                                {service.name}
                              </Text>
                              <Text color="gray.600" flex="3">
                                {service.description}
                              </Text>
                              <Text fontWeight="bold" flex="1" textAlign="right">
                                $ {service.price}
                              </Text>
                            </Flex>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </VStack>
  
              {/* Payment Methods */}
              <VStack spacing={8} w="full">
                <Heading as="h2" size="xl" textAlign="center">
                  Métodos de Pago
                </Heading>
  
                <Box w="full" borderWidth="1px" borderRadius="lg" overflow="hidden" p={8}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <VStack align="flex-start" spacing={6}>
                      <Heading as="h3" size="md">
                        Aceptamos
                      </Heading>
  
                      <Wrap spacing={6}>
                        {[
                          { name: "Efectivo", icon: DollarSign },
                          { name: "Transferencia Bancaria", icon: CreditCard },
                          { name: "Tarjeta de Crédito/Débito", icon: CreditCard },
                        ].map((method, index) => (
                          <WrapItem key={index}>
                            <Flex align="center" bg="blue.50" p={3} borderRadius="md">
                              <Icon as={method.icon} color="blue.500" mr={2} />
                              <Text>{method.name}</Text>
                            </Flex>
                          </WrapItem>
                        ))}
                      </Wrap>
  
                      <Divider />
  
                      <VStack align="flex-start" spacing={4}>
                        <Heading as="h3" size="md">
                          Proceso de Pago
                        </Heading>
  
                        <VStack align="flex-start" spacing={3}>
                          {[
                            "1. Seleccione el servicio que necesita",
                            "2. Contáctenos para confirmar detalles y precio final",
                            "3. Reciba una factura detallada con las instrucciones de pago",
                            "4. Realice el pago por el método de su preferencia",
                            "5. Envíenos el comprobante de pago para iniciar el servicio",
                          ].map((step, index) => (
                            <Text key={index}>{step}</Text>
                          ))}
                        </VStack>
                      </VStack>
                    </VStack>
  
                    <VStack align="flex-start" spacing={6}>
                      <Heading as="h3" size="md">
                        Políticas de Pago
                      </Heading>
  
                      <VStack align="flex-start" spacing={4}>
                        {[
                          {
                            title: "Anticipo",
                            description:
                              "Para iniciar cualquier servicio, se requiere un anticipo del 50% del valor total.",
                          },
                          {
                            title: "Pago Final",
                            description:
                              "El 50% restante se cancela al finalizar el servicio o según los hitos acordados.",
                          },
                          {
                            title: "Facturación",
                            description: "Emitimos factura electrónica por todos los servicios prestados.",
                          },
                          {
                            title: "Devoluciones",
                            description:
                              "Las políticas de devolución varían según el tipo de servicio y etapa del proceso.",
                          },
                        ].map((policy, index) => (
                          <Box key={index}>
                            <Text fontWeight="bold">{policy.title}</Text>
                            <Text color="gray.600">{policy.description}</Text>
                          </Box>
                        ))}
                      </VStack>
  
                      <Box bg="blue.50" p={4} borderRadius="md" borderLeftWidth="4px" borderLeftColor="blue.500" w="full">
                        <Flex>
                          <Icon as={HelpCircle} color="blue.500" boxSize={6} mr={3} mt={1} />
                          <Box>
                            <Text fontWeight="bold">¿Necesita un plan personalizado?</Text>
                            <Text>
                              Contáctenos para discutir opciones de pago flexibles y planes adaptados a sus necesidades
                              específicas.
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </VStack>
                  </SimpleGrid>
                </Box>
              </VStack>
  
              {/* FAQ about Pricing */}
              <VStack spacing={8} w="full">
                <Heading as="h2" size="xl" textAlign="center">
                  Preguntas Frecuentes sobre Precios
                </Heading>
  
                <Box w="full">
                  <FAQ pricingFaqs={true} />
                </Box>
              </VStack>
  
              {/* CTA */}
              <Box w="full" bg="blue.50" p={10} borderRadius="lg" textAlign="center">
                <VStack spacing={6}>
                  <Heading as="h3" size="lg">
                    ¿Listo para comenzar?
                  </Heading>
                  <Text fontSize="lg" maxW="container.md">
                    Contáctenos hoy mismo para una consulta inicial y descubra cómo podemos ayudarle con sus necesidades
                    legales.
                  </Text>
                  <Button size="lg" colorScheme="blue" as={Link} href="/contacto">
                    Solicitar Consulta
                  </Button>
                </VStack>
              </Box>
  
              <Button leftIcon={<ArrowLeft />} variant="ghost" as={Link} href="/">
                Volver al Inicio
              </Button>
            </VStack>
          </Container>
        </Box>
  
        <Footer />
      </Box>
    )
  }
  
  