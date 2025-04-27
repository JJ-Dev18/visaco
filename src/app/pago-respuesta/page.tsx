"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  Divider,
} from "@chakra-ui/react"
import { CheckCircle, XCircle, ArrowLeft, Clock } from "lucide-react"
import Navbar from "@/components/home/Navbar"
import Footer from "@/components/home/Footer"

export default function PaymentResponsePage() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'pending' | 'failed' | null>(null)
  const [paymentData, setPaymentData] = useState<any>(null)

  useEffect(() => {
    // In a real implementation, we would parse actual ePayco response parameters
    const ref = searchParams.get("ref_payco") || ""
    const response = searchParams.get("response") || ""
    
    // Simulate API call to verify payment
    const verifyPayment = async () => {
      try {
        // In production, make an actual API call to ePayco to verify the payment
        // const response = await fetch(`https://secure.epayco.co/validation/v1/reference/${ref}`)
        // const data = await response.json()
        
        // For demonstration, we'll simulate different responses
        // In real implementation, use actual ePayco response
        setTimeout(() => {
          let status: 'success' | 'pending' | 'failed' | null = null;
          // Simulate different response scenarios
          if (response === "1" || Math.random() > 0.3) {
            status = 'success';
          } else if (response === "2" || Math.random() > 0.5) {
            status = 'pending';
          } else {
            status = 'failed';
          }
          
          setPaymentStatus(status);
          setPaymentData({
            reference: ref || "EP-" + Math.floor(Math.random() * 10000000),
            date: new Date().toLocaleString(),
            amount: "$150 USD",
            description: "Consulta Legal VisaCo",
          })
          setLoading(false)
        }, 2000)
      } catch (error) {
        console.error("Error verifying payment:", error)
        setPaymentStatus('failed')
        setLoading(false)
      }
    }
    
    verifyPayment()
  }, [searchParams])

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      
      <Box flex="1" py={16} bg="gray.50">
        <Container maxW="container.md">
          {loading ? (
            <VStack spacing={8} py={10} align="center" justify="center">
              <Spinner size="xl" color="blue.500" thickness="4px" />
              <Text fontSize="lg">Verificando el estado de su pago...</Text>
            </VStack>
          ) : (
            <VStack spacing={8} align="center" bg="white" p={8} borderRadius="lg" boxShadow="md">
              {paymentStatus === 'success' && (
                <>
                  <Icon as={CheckCircle} boxSize={20} color="green.500" />
                  <Heading as="h1" size="xl" textAlign="center">
                    ¡Pago Realizado con Éxito!
                  </Heading>
                  <Text fontSize="lg" textAlign="center">
                    Su pago ha sido procesado correctamente. En breve recibirá un correo electrónico con los detalles para coordinar su consulta.
                  </Text>
                  <Alert status="success" variant="subtle" borderRadius="md">
                    <AlertIcon />
                    <AlertDescription>
                      Un asesor se pondrá en contacto con usted en las próximas 24-72 horas para agendar su consulta.
                    </AlertDescription>
                  </Alert>
                </>
              )}
              
              {paymentStatus === 'pending' && (
                <>
                  <Icon as={Clock} boxSize={20} color="orange.500" />
                  <Heading as="h1" size="xl" textAlign="center">
                    Pago en Proceso
                  </Heading>
                  <Text fontSize="lg" textAlign="center">
                    Su pago está siendo procesado. Una vez confirmado, recibirá un correo electrónico con los detalles de su consulta.
                  </Text>
                  <Alert status="warning" variant="subtle" borderRadius="md">
                    <AlertIcon />
                    <AlertDescription>
                      El proceso de verificación puede tomar hasta 24 horas. No es necesario realizar un nuevo pago.
                    </AlertDescription>
                  </Alert>
                </>
              )}
              
              {paymentStatus === 'failed' && (
                <>
                  <Icon as={XCircle} boxSize={20} color="red.500" />
                  <Heading as="h1" size="xl" textAlign="center">
                    Pago No Completado
                  </Heading>
                  <Text fontSize="lg" textAlign="center">
                    Lo sentimos, ha ocurrido un problema con su pago. Por favor, intente nuevamente o póngase en contacto con nuestro equipo de soporte.
                  </Text>
                  <Alert status="error" variant="subtle" borderRadius="md">
                    <AlertIcon />
                    <AlertDescription>
                      Si el problema persiste, contáctenos al correo soporte@visaco.co o al teléfono +57 (1) 123 4567.
                    </AlertDescription>
                  </Alert>
                </>
              )}
              
              {paymentData && (
                <>
                  <Divider my={4} />
                  <Box w="full">
                    <Heading as="h3" size="md" mb={4}>
                      Detalles de la Transacción:
                    </Heading>
                    <Stack spacing={3}>
                      <Box>
                        <Text fontWeight="bold">Referencia:</Text>
                        <Text>{paymentData.reference}</Text>
                      </Box>
                      <Box>
                        <Text fontWeight="bold">Fecha:</Text>
                        <Text>{paymentData.date}</Text>
                      </Box>
                      <Box>
                        <Text fontWeight="bold">Valor:</Text>
                        <Text>{paymentData.amount}</Text>
                      </Box>
                      <Box>
                        <Text fontWeight="bold">Descripción:</Text>
                        <Text>{paymentData.description}</Text>
                      </Box>
                    </Stack>
                  </Box>
                </>
              )}
              
              <Stack direction={{ base: "column", md: "row" }} spacing={4} w="full" pt={6}>
                <Button
                  as={Link}
                  href="/"
                  leftIcon={<ArrowLeft />}
                  variant="outline"
                  colorScheme="blue"
                  size="lg"
                  w="full"
                >
                  Volver al Inicio
                </Button>
                
                {paymentStatus === 'failed' && (
                  <Button
                    as={Link}
                    href="/consulta"
                    colorScheme="blue"
                    size="lg"
                    w="full"
                  >
                    Intentar Nuevamente
                  </Button>
                )}
              </Stack>
            </VStack>
          )}
        </Container>
      </Box>
      
      <Footer />
    </Box>
  )
}