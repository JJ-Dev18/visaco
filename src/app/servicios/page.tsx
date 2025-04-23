// app/areas-de-practica/page.tsx
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
  Grid,
  GridItem,
  SimpleGrid,
  VStack,
  Icon,
  Link,
  Flex,
  Button
} from "@chakra-ui/react"
import NextLink from "next/link"
import { ArrowRight } from "lucide-react"
import { servicesData } from "@/components/services/serviceData"
import VerticalNavigation from "@/components/services/VerticalNavigation"

export default function AreasPage() {
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
            Áreas de Práctica
          </Heading>
          <Breadcrumb separator="›" color="whiteAlpha.800">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Áreas de Práctica</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={12}>
        <Grid templateColumns={{ base: "1fr", md: "250px 1fr" }} gap={8}>
          {/* Sidebar Navigation */}
          <GridItem>
            <Box position="sticky" top="100px">
              <Heading as="h3" size="md" mb={4} pl={4} borderLeftWidth="4px" borderLeftColor="blue.500">
                Áreas de Práctica
              </Heading>
              <VerticalNavigation />
            </Box>
          </GridItem>
          
          {/* Main Content Area */}
          <GridItem>
            <Box mb={8}>
              <Heading as="h2" size="xl" mb={6} color="blue.600">
                Nuestros Servicios Legales
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={8}>
                En VisaCo ofrecemos servicios legales especializados para satisfacer todas sus necesidades migratorias 
                y legales. Nuestro equipo de abogados expertos está comprometido con brindar asesoría profesional 
                y personalizada en cada uno de nuestros servicios.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
              {servicesData.map((service) => (
                <NextLink key={service.id} href={`/servicios/${service.slug}`} passHref>
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
                        <Icon as={service.icon} boxSize={6} />
                      </Flex>
                      <Heading 
                        as="h3" 
                        size="md" 
                        color="gray.800"
                        mb={3}
                      >
                        {service.title}
                      </Heading>
                      {service.sections[0].type === "quote" && (
                        <Text color="gray.600" mb={4} fontStyle="italic">
                          {service.sections[0].text}
                        </Text>
                      )}
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
          </GridItem>
        </Grid>
      </Container>

      <Footer />
    </Box>
  )
}