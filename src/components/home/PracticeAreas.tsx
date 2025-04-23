"use client"

import React from "react"
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  Link,
  Button,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { 
  FileText, 
  Home, 
  Users, 
  Briefcase, 
  Globe, 
  LifeBuoy 
} from "lucide-react"
import { useRouter } from 'next/router'

interface PracticeAreaProps {
  title: string
  description: string
  icon: React.ElementType
  link: string
  color: string
}

export default function UpdatedPracticeAreas() {
  const practiceAreas: PracticeAreaProps[] = [
    {
      title: "Peticiones",
      description: "Una petición es la fundación de casi todos los procesos migratorios que conducen a la residencia.",
      icon: FileText,
      link: "/areas/peticiones",
      color: "#1f3e5a",
    },
    {
      title: "Residencia",
      description: "El proceso de residencia es un paso fundamental para establecerse legalmente en Estados Unidos.",
      icon: Home,
      link: "/areas/residencia",
      color: "#1f3e5a",
    },
    {
      title: "Ciudadanía",
      description: "La ciudadanía americana otorga plenos derechos y protege a través de garantías constitucionales.",
      icon: Globe,
      link: "/areas/ciudadania",
      color: "#1f3e5a",
    },
    {
      title: "Deportación",
      description: "Al verse envuelto en un proceso de deportación, es crucial actuar rápido y de la manera correcta.",
      icon: Briefcase,
      link: "/areas/deportacion",
      color: "#1f3e5a",
    },
    {
      title: "Visas Familiares",
      description: "La visa familiar es un proceso fundamental para la reunificación con sus seres queridos.",
      icon: Users, 
      link: "/areas/visas-familiares",
      color: "#1f3e5a",
    },
    {
      title: "Permisos de Trabajo",
      description: "El permiso de trabajo es un documento que permite trabajar legalmente en los Estados Unidos.",
      icon: LifeBuoy,
      link: "/areas/permisos-trabajo",
      color: "#1f3e5a",
    },
  ]

  const router = useRouter()

  return (
    <Box as="section" py={16} bg="#f5f8fa">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading as="h2" size="xl" color="#1f3e5a" mb={3}>
              Áreas de Práctica
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="container.lg" mx="auto">
              Nuestra oficina ofrece estos servicios entre otros.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
            {practiceAreas.map((area, index) => (
              <NextLink key={index} href={area.link} passHref>
                <Link _hover={{ textDecoration: "none" }}>
                  <Box 
                    bg="white" 
                    p={6} 
                    borderRadius="md" 
                    boxShadow="md"
                    h="100%"
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    transition="all 0.3s"
                    _hover={{ 
                      transform: "translateY(-5px)",
                      boxShadow: "lg",
                    }}
                  >
                    <Flex
                      justify="center"
                      align="center"
                      bg={`${area.color}10`}
                      color={area.color}
                      boxSize="80px"
                      borderRadius="full"
                      mb={4}
                    >
                      <Icon as={area.icon} boxSize={10} />
                    </Flex>
                    <Heading 
                      as="h3" 
                      size="md" 
                      color={area.color}
                      mb={3}
                    >
                      {area.title}
                    </Heading>
                    <Text color="gray.600">
                      {area.description}
                    </Text>
                  </Box>
                </Link>
              </NextLink>
            ))}
          </SimpleGrid>
          
          <Button textAlign="center" mt={8} onClick={() => router.push('/servicios')}>
            <Text color="gray.600">
              Ver Más
            </Text>
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}