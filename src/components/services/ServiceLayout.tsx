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
} from "@chakra-ui/react"
import VerticalNavigation from "./VerticalNavigation";

interface ServiceLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function ServiceLayout({ title, children }: ServiceLayoutProps) {
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
            {title}
          </Heading>
          <Breadcrumb separator="›" color="whiteAlpha.800">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/areas-de-practica">Áreas de Práctica</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{title}</BreadcrumbLink>
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
            <Box>
              {children}
            </Box>
          </GridItem>
        </Grid>
      </Container>

      <Footer />
    </Box>
  )
}