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
  Globe, 
  Users, 
  Briefcase, 
  Shield, 
  Book,
  Star,
  Scale,
  FileCheck, 
  Coffee,
  Building,
  ArrowRight
} from "lucide-react"

interface PracticeAreaProps {
  title: string
  description: string
  icon: React.ElementType
  link: string
}

export default function PracticeAreas() {
  const practiceAreas: PracticeAreaProps[] = [
    {
      title: "Trámites de Visas",
      description: "Asesoría completa para trámites de visas de trabajo, estudio y residencia en diferentes países.",
      icon: Globe,
      link: "/servicios/visas",
    },
    {
      title: "Visas Familiares",
      description: "Facilitamos la reunificación familiar a través de los procesos migratorios correspondientes.",
      icon: Users,
      link: "/servicios/visas-familiares",
    },
    {
      title: "Representación Legal",
      description: "Representación profesional en procesos migratorios, judiciales y administrativos.",
      icon: Scale,
      link: "/servicios/representacion",
    },
    {
      title: "Contratos Legales",
      description: "Elaboración y revisión de contratos comerciales, laborales y civiles con garantías legales.",
      icon: FileCheck,
      link: "/servicios/contratos",
    },
    {
      title: "Permisos de Trabajo",
      description: "Gestionamos todos los trámites necesarios para obtener permisos de trabajo legales.",
      icon: Briefcase,
      link: "/servicios/permisos-trabajo",
    },
    {
      title: "Asilo y Refugio",
      description: "Orientación especializada para personas que buscan protección internacional por persecución.",
      icon: Shield,
      link: "/servicios/asilo",
    },
    {
      title: "Ciudadanía",
      description: "Asesoría completa durante el proceso de naturalización y obtención de ciudadanía.",
      icon: Star,
      link: "/servicios/ciudadania",
    },
    {
      title: "Residencia Permanente",
      description: "Apoyo en el proceso para obtener residencia permanente en el país de destino.",
      icon: Building,
      link: "/servicios/residencia",
    },
    {
      title: "Consultorías Legales",
      description: "Servicios de asesoría para resolver dudas sobre temas legales y migratorios específicos.",
      icon: Coffee,
      link: "/servicios/consultorias",
    },
    {
      title: "Defensa en Deportación",
      description: "Defensa legal especializada para personas en procesos de deportación o remoción.",
      icon: FileText,
      link: "/servicios/deportacion",
    },
    {
      title: "Trámites Migratorios",
      description: "Gestión de todo tipo de documentación necesaria para procesos migratorios.",
      icon: Book,
      link: "/servicios/tramites",
    },
  ]

  return (
    <Box as="section" py={8}>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
        {practiceAreas.map((area, index) => (
          <NextLink key={index} href={area.link} passHref>
            <Link _hover={{ textDecoration: "none" }}>
              <Box 
                bg="white" 
                p={6} 
                borderRadius="lg" 
                borderWidth="1px"
                borderColor="gray.200"
                h="100%"
                display="flex"
                flexDir="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                transition="all 0.3s"
                _hover={{ 
                  transform: "translateY(-5px)",
                  boxShadow: "lg",
                  borderColor: "blue.200"
                }}
              >
                <Flex
                  justify="center"
                  align="center"
                  bg="blue.50"
                  color="blue.600"
                  boxSize="60px"
                  borderRadius="full"
                  mb={4}
                >
                  <Icon as={area.icon} boxSize={6} />
                </Flex>
                <Heading 
                  as="h3" 
                  size="md" 
                  color="gray.800"
                  mb={3}
                >
                  {area.title}
                </Heading>
                <Text color="gray.600" mb={4}>
                  {area.description}
                </Text>
                <Button 
                  variant="link" 
                  colorScheme="blue" 
                  rightIcon={<ArrowRight size={16} />}
                  mt="auto"
                >
                  Más información
                </Button>
              </Box>
            </Link>
          </NextLink>
        ))}
      </SimpleGrid>
    </Box>
  )
}