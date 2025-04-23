"use client"

import React, { useState, useEffect } from "react"
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface TestimonialProps {
  content: string
  name: string
  role: string
  avatarUrl: string
  rating: number
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "El equipo de Jorge Rivera me ayudó a obtener mi visa de inversionista en tiempo récord. Su profesionalismo y conocimiento fueron excepcionales. Definitivamente los recomendaría a cualquier persona que necesite servicios migratorios de calidad.",
    name: "Carlos Rodríguez",
    role: "Empresario",
    avatarUrl: "/placeholder.svg?height=50&width=50",
    rating: 5,
  },
  {
    content:
      "Gracias a Jorge Rivera pude resolver todos los trámites para mi visa de estudiante sin complicaciones. Siempre estuvieron disponibles para resolver mis dudas y me guiaron en cada paso del proceso.",
    name: "María González",
    role: "Estudiante Internacional",
    avatarUrl: "/placeholder.svg?height=50&width=50",
    rating: 5,
  },
  {
    content:
      "Mi proceso de visa laboral fue mucho más sencillo con la ayuda de Jorge Rivera Immigration Group. Su asesoría me ahorró tiempo y preocupaciones. El equipo estuvo pendiente de cada detalle y logré obtener mi visa sin problemas.",
    name: "Juan Pérez",
    role: "Profesional IT",
    avatarUrl: "/placeholder.svg?height=50&width=50",
    rating: 4,
  },
  {
    content:
      "La experiencia con Jorge Rivera fue excelente de principio a fin. Me ayudaron con la reunificación familiar y logramos traer a mi familia a Estados Unidos. Su compromiso y dedicación realmente marcaron la diferencia.",
    name: "Ana Martínez",
    role: "Médico",
    avatarUrl: "/placeholder.svg?height=50&width=50",
    rating: 5,
  },
  {
    content:
      "Contraté los servicios de Jorge Rivera para renovar mi visa de trabajo y el proceso fue rápido y sin complicaciones. Su equipo es muy profesional y están al día con todos los cambios en las leyes migratorias.",
    name: "Diego Santos",
    role: "Ingeniero",
    avatarUrl: "/placeholder.svg?height=50&width=50",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    
    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <Box as="section" py={16} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl">
              Lo que dicen nuestros clientes
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="container.md">
              La satisfacción de nuestros clientes es nuestro mejor testimonio.
            </Text>
          </VStack>

          <Box
            position="relative"
            w="full"
            bg="white"
            borderRadius="xl"
            boxShadow="lg"
            overflow="hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            {/* Desktop Testimonials Carousel */}
            <Box 
              display={{ base: "none", md: "block" }} 
              px={8} 
              py={12}
              position="relative"
            >
              <Box 
                position="absolute"
                top={8}
                right={8}
                fontSize="6xl"
                color="blue.100"
                fontFamily="serif"
                lineHeight={1}
              >
                "
              </Box>
              <Flex>
                <Flex 
                  w="30%" 
                  justify="center" 
                  align="center"
                  pr={8}
                >
                  <Avatar 
                    size="2xl" 
                    name={testimonials[currentIndex].name} 
                    src={testimonials[currentIndex].avatarUrl}
                    boxShadow="lg" 
                  />
                </Flex>
                <Box w="70%">
                  <VStack align="flex-start" spacing={6}>
                    <HStack spacing={1}>
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          as={Star} 
                          color={i < testimonials[currentIndex].rating ? "orange.400" : "gray.300"} 
                          fill={i < testimonials[currentIndex].rating ? "orange.400" : "none"}
                        />
                      ))}
                    </HStack>
                    <Text fontSize="xl" fontStyle="italic" color="gray.700">
                      {testimonials[currentIndex].content}
                    </Text>
                    <Box>
                      <Text fontWeight="bold" fontSize="lg">
                        {testimonials[currentIndex].name}
                      </Text>
                      <Text color="gray.600">{testimonials[currentIndex].role}</Text>
                    </Box>
                  </VStack>
                </Box>
              </Flex>
            </Box>

            {/* Mobile Testimonials */}
            <Box 
              display={{ base: "block", md: "none" }} 
              px={6} 
              py={8}
              position="relative"
            >
              <Box 
                position="absolute"
                top={4}
                right={4}
                fontSize="5xl"
                color="blue.100"
                fontFamily="serif"
                lineHeight={1}
              >
                "
              </Box>
              <VStack spacing={6} align="flex-start">
                <HStack spacing={1}>
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      as={Star} 
                      boxSize={4}
                      color={i < testimonials[currentIndex].rating ? "orange.400" : "gray.300"} 
                      fill={i < testimonials[currentIndex].rating ? "orange.400" : "none"}
                    />
                  ))}
                </HStack>
                <Text fontSize="md" fontStyle="italic" color="gray.700">
                  {testimonials[currentIndex].content}
                </Text>
                <HStack spacing={4}>
                  <Avatar 
                    size="md" 
                    name={testimonials[currentIndex].name} 
                    src={testimonials[currentIndex].avatarUrl}
                  />
                  <Box>
                    <Text fontWeight="bold">
                      {testimonials[currentIndex].name}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {testimonials[currentIndex].role}
                    </Text>
                  </Box>
                </HStack>
              </VStack>
            </Box>

            {/* Navigation Controls */}
            <Flex 
              position="absolute" 
              bottom={4} 
              right={4} 
              zIndex={10}
            >
              <Button
                onClick={prevTestimonial}
                size="sm"
                variant="ghost"
                colorScheme="blue"
                mr={2}
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                onClick={nextTestimonial}
                size="sm"
                variant="ghost"
                colorScheme="blue"
              >
                <ChevronRight size={20} />
              </Button>
            </Flex>

            {/* Indicator Dots */}
            <Flex 
              position="absolute" 
              bottom={4} 
              width="100%" 
              justify="center" 
              zIndex={5}
              display={{ base: "none", md: "flex" }}
            >
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  as="button"
                  h="2"
                  w={index === currentIndex ? "8" : "2"}
                  borderRadius="full"
                  bg={index === currentIndex ? "brand.primary" : "gray.300"}
                  mx="1"
                  transition="all 0.2s"
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}