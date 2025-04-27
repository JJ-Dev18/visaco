"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react"
import { ArrowRight, Check, Clock, Shield, FileText } from "lucide-react"
import Navbar from "@/components/home/Navbar"
import Footer from "@/components/home/Footer"
import WhatsAppButton from "@/components/contacto/WhatsappButton"

import dynamic from "next/dynamic"
import { useEPayco } from "@/components/epayco/EpaycoIntegration"
const MessageSquare = dynamic(() => import("lucide-react").then((mod) => mod.MessageSquare), { ssr: false })
const Briefcase = dynamic(() => import("lucide-react").then((mod) => mod.Briefcase), { ssr: false })
const Globe = dynamic(() => import("lucide-react").then((mod) => mod.Globe), { ssr: false })

export default function ConsultationDetailPage() {
  const searchParams = useSearchParams()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  
  // Get consultation type from URL parameters
  const type = searchParams.get("type") || "regular"
  
  // Define consultation details based on type
  const consultationDetails = {
    regular: {
      title: "Consulta Regular",
      description: "Asesoría legal acerca de su situación inmigratoria con atención personalizada en 24-72 horas.",
      price: 150,
      originalPrice: 250,
      discount: "40%",
      icon: MessageSquare,
      benefits: [
        "Evaluación completa de su caso por un abogado especializado",
        "Recomendaciones personalizadas según su situación específica",
        "Seguimiento por email durante todo el proceso",
        "Análisis de alternativas y posibles soluciones",
        "Respuesta a todas sus preguntas e inquietudes"
      ],
      steps: [
        "Realice el pago de la consulta",
        "Reciba confirmación vía correo electrónico",
        "Un asesor se pondrá en contacto para agendar su consulta",
        "Prepare los documentos relevantes a su caso",
        "Asista a su consulta en la fecha y hora acordada"
      ]
    },
    empleo: {
      title: "Consulta de Empleo",
      description: "Solución migratoria con base en un empleador, inversión o por ser un profesional especial o requisitado en los Estados Unidos.",
      price: 150,
      originalPrice: 250,
      discount: "40%",
      icon: Briefcase,
      benefits: [
        "Análisis detallado de su situación laboral actual",
        "Explicación de las diferentes opciones de visas de trabajo disponibles",
        "Asesoría sobre requisitos específicos según su perfil profesional",
        "Estrategias para fortalecer su aplicación",
        "Evaluación de plazos y probabilidades de éxito"
      ],
      steps: [
        "Realice el pago de la consulta",
        "Complete el formulario con su información profesional",
        "Un especialista en visas laborales revisará su caso",
        "Reciba una cita para discutir las opciones disponibles",
        "Obtenga un plan de acción personalizado"
      ]
    },
    internacional: {
      title: "Consulta Internacional",
      description: "Asesoría legal a distancia para personas fuera de los Estados Unidos a través de e-mail o llamada telefónica.",
      price: 120,
      originalPrice: 250,
      discount: "52%",
      icon: Globe,
      benefits: [
        "Asesoría internacional adaptada a su país de residencia",
        "Explicación detallada de las opciones de visas disponibles para su caso",
        "Coordinación a distancia mediante videoconferencia o llamada",
        "Información sobre requisitos de documentación específicos",
        "Soluciones adaptadas a consulados específicos"
      ],
      steps: [
        "Realice el pago de la consulta",
        "Indique su zona horaria y preferencia de contacto",
        "Envíe la documentación relevante para análisis previo",
        "Reciba confirmación de su cita de consulta",
        "Conéctese en la fecha y hora acordada para su asesoría"
      ]
    }
  }
  
  // Use the correct type or default to regular
  const consultation = type === "empleo" ? consultationDetails.empleo : 
                      type === "internacional" ? consultationDetails.internacional : 
                      consultationDetails.regular

  // Configure ePayco integration
  const { openCheckout } = useEPayco({
    publicKey: process.env.EPAYCO_PUBLIC_KEY || 'p_test_key', // Reemplazar con la variable de entorno
    test: true, // false para producción
    name: consultation.title,
    
    description: `Pago por ${consultation.title} con VisaCo`,
    amount: consultation.price,
    currency: 'cop',
    country: 'co',
    lang: 'es',
    external: 'false',
    response: `${window.location.origin}/pago-respuesta`,
    confirmation: `${window.location.origin}/api/payment-confirmation`,
  })
  
  // Function to handle payment with ePayco
  const handlePayment = () => {
    setIsLoading(true)
    
    try {
      // Ejecutar el checkout de ePayco
      openCheckout()
      
      // Mostrar mensaje de información
      toast({
        title: "Redirigiendo al sistema de pago",
        description: "Complete el proceso en la ventana de ePayco",
        status: "info",
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      console.error("Error al iniciar el pago:", error)
      
      toast({
        title: "Error al iniciar el pago",
        description: "Por favor intente nuevamente o contacte a soporte",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  // Import the required icons dynamically

  
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
              {consultation.title}
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              {consultation.description}
            </Text>
          </VStack>
        </Container>
      </Box>
      
      {/* Consultation Details */}
      <Box as="section" py={16}>
        <Container maxW="container.lg">
          <Stack direction={{ base: "column", lg: "row" }} spacing={12} align="start">
            {/* Left Side - Details */}
            <VStack spacing={8} align="flex-start" flex="2">
              <Box>
                <Heading as="h2" size="xl" mb={6}>
                  Detalles de la Consulta
                </Heading>
                <Text fontSize="lg" mb={6}>
                  {consultation.description}
                </Text>
                <Divider my={6} />
              </Box>
              
              <Box w="full">
                <Heading as="h3" size="lg" mb={4}>
                  Beneficios
                </Heading>
                <List spacing={3}>
                  {consultation.benefits.map((benefit, index) => (
                    <ListItem key={index} display="flex">
                      <ListIcon as={Check} color="green.500" mt="5px" />
                      <Text>{benefit}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
              
              <Box w="full">
                <Heading as="h3" size="lg" mb={4}>
                  Proceso de la Consulta
                </Heading>
                <List spacing={4}>
                  {consultation.steps.map((step, index) => (
                    <ListItem key={index} display="flex">
                      <Flex 
                        align="center" 
                        justify="center" 
                        bg="blue.500" 
                        color="white" 
                        borderRadius="full" 
                        w="30px" 
                        h="30px" 
                        mr={4}
                        flexShrink={0}
                      >
                        {index + 1}
                      </Flex>
                      <Text>{step}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
              
              <Alert status="info" variant="subtle" mt={6}>
                <AlertIcon />
                Una vez realizado el pago, recibirá un correo con instrucciones detalladas para coordinar su consulta.
              </Alert>
            </VStack>
            
            {/* Right Side - Payment Card */}
            <Box 
              flex="1" 
              borderWidth="1px" 
              borderRadius="lg" 
              overflow="hidden"
              boxShadow="xl"
              position="sticky"
              top="120px"
              bg="white"
            >
              <Box p={6} bg="blue.600" color="white" textAlign="center">
                <Heading as="h3" size="lg">
                  Resumen de la Consulta
                </Heading>
              </Box>
              
              <Box p={6}>
                <VStack spacing={6} align="flex-start">
                  <Heading as="h4" size="md">
                    {consultation.title}
                  </Heading>
                  
                  <Box w="full">
                    <Text fontSize="sm" color="gray.500" mb={1}>
                      Precio normal:
                    </Text>
                    <Text decoration="line-through" color="gray.500">
                      ${consultation.originalPrice} USD
                    </Text>
                    
                    <Text fontSize="sm" color="gray.500" mt={4} mb={1}>
                      Precio con descuento:
                    </Text>
                    <Flex align="center">
                      <Text fontWeight="bold" fontSize="2xl" color="blue.600" mr={2}>
                        ${consultation.price} USD
                      </Text>
                      <Box bg="red.500" color="white" px={2} py={1} borderRadius="md" fontSize="xs">
                        {consultation.discount} OFF
                      </Box>
                    </Flex>
                  </Box>
                  
                  <Divider my={2} />
                  
                  <VStack spacing={3} align="flex-start" w="full">
                    <Flex align="center">
                      <Icon as={Clock} color="blue.500" mr={2} />
                      <Text fontSize="sm">Respuesta en 24-72 horas</Text>
                    </Flex>
                    <Flex align="center">
                      <Icon as={Shield} color="blue.500" mr={2} />
                      <Text fontSize="sm">Garantía de satisfacción</Text>
                    </Flex>
                    <Flex align="center">
                      <Icon as={FileText} color="blue.500" mr={2} />
                      <Text fontSize="sm">Documentación digital incluida</Text>
                    </Flex>
                  </VStack>
                  
                  <Button
                    colorScheme="blue"
                    size="lg"
                    width="full"
                    mt={4}
                    onClick={handlePayment}
                    isLoading={isLoading}
                    loadingText="Procesando..."
                    rightIcon={<ArrowRight />}
                  >
                    Proceder al Pago
                  </Button>
                  
                  <Text fontSize="xs" color="gray.500" textAlign="center" w="full">
                    Al realizar el pago, acepta nuestros términos y condiciones.
                  </Text>
                  
                  <Image
                    src="/placeholder.svg?height=60&width=240"
                    alt="Métodos de pago"
                    alignSelf="center"
                  />
                </VStack>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber="+573001234567" 
        message={`Hola, estoy interesado en la ${consultation.title} con VisaCo.`}
      />
      
      <Footer />
    </Box>
  )
}