"use client"

import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { Menu, Phone, Clock, Facebook, Instagram, Youtube, X, Twitter } from "lucide-react"
import NextLink from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Box as="header">
      {/* Top bar with company info and social media - always visible, never fixed */}
      <Box bg="#1f3e5a" color="white" py={2}>
        <Container maxW="container.xl">
          <Flex 
            justify="space-between" 
            align="center"
            direction={{ base: "column", md: "row" }}
            gap={{ base: 2, md: 0 }}
          >
            <Flex align="center">
              <Link href="/" _hover={{ textDecoration: "none" }}>
                <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
                  Jorge Rivera Immigration Group
                </Text>
              </Link>
            </Flex>
            
            <HStack spacing={6}>
              <HStack spacing={2} display={{ base: "none", md: "flex" }}>
                <Phone size={16} />
                <Link href="tel:1-888-578-2276" _hover={{ textDecoration: "underline" }}>
                  Call Us Today 1-888-578-2276
                </Link>
              </HStack>
              
              <HStack spacing={2} display={{ base: "none", md: "flex" }}>
                <Clock size={16} />
                <Text fontSize="sm">
                  Monday - Friday 8AM - 4:00PM, Saturdays 8AM - 12PM (EST)
                </Text>
              </HStack>
              
              <HStack spacing={4}>
                <Link href="https://twitter.com" isExternal aria-label="Twitter">
                  <Twitter size={16} color="white" />
                </Link>
                <Link href="https://instagram.com" isExternal aria-label="Instagram">
                  <Instagram size={16} color="white" />
                </Link>
                <Link href="https://youtube.com" isExternal aria-label="YouTube">
                  <Youtube size={16} color="white" />
                </Link>
                <Link href="https://facebook.com" isExternal aria-label="Facebook">
                  <Facebook size={16} color="white" />
                </Link>
              </HStack>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main navigation - only this part becomes sticky on scroll */}
      <Box 
        bg="white" 
        boxShadow={scrolled ? "md" : "none"}
        position={scrolled ? "fixed" : "relative"}
        top={0}
        left={0}
        right={0}
        zIndex={100}
        transition="all 0.3s ease-in-out"
        transform={scrolled ? "translateY(0)" : "translateY(0)"}
        borderBottomWidth={scrolled ? "1px" : "0"}
        borderBottomColor="gray.200"
      >
        <Container maxW="container.xl" py={scrolled ? 3 : 4}>
          <Flex align="center" justify="space-between">
            {/* Logo visible only when scrolled */}
            {scrolled && (
              <Link 
                href="/" 
                fontWeight="bold" 
                fontSize="lg" 
                color="#1f3e5a"
                display={{ base: "none", md: "block" }}
                _hover={{ textDecoration: "none" }}
              >
                JR Immigration
              </Link>
            )}

            <Box display={{ base: "block", md: "none" }}>
              <IconButton
                onClick={onToggle}
                icon={isOpen ? <X size={24} /> : <Menu size={24} />}
                variant="ghost"
                aria-label="Toggle Navigation"
              />
            </Box>

            {/* Mobile contact info */}
            <Flex direction="column" display={{ base: "flex", md: "none" }}>
              <HStack spacing={2}>
                <Phone size={16} color="#1f3e5a" />
                <Link href="tel:1-888-578-2276" color="#1f3e5a" fontWeight="medium">
                  1-888-578-2276
                </Link>
              </HStack>
            </Flex>

            {/* Desktop Navigation */}
            <HStack 
              spacing={8} 
              align="center" 
              justify={scrolled ? "flex-end" : "center"}
              display={{ base: "none", md: "flex" }}
              width="100%"
              ml={scrolled ? "auto" : "0"}
            >
              <NextLink href="/" passHref>
                <Link fontWeight="medium">Inicio</Link>
              </NextLink>
              {/* <NextLink href="/nosotros" passHref>
                <Link fontWeight="medium">Nosotros</Link>
              </NextLink> */}
              <NextLink href="/servicios" passHref>
                <Link fontWeight="medium">Áreas de Práctica</Link>
              </NextLink>
              {/* <NextLink href="/noticias" passHref>
                <Link fontWeight="medium">Noticias</Link>
              </NextLink>
              <NextLink href="/redes-sociales" passHref>
                <Link fontWeight="medium">Redes Sociales</Link>
              </NextLink> */}
              <NextLink href="/preguntas" passHref>
                <Link fontWeight="medium">Preguntas</Link>
              </NextLink>
              {/* <NextLink href="/contactenos" passHref>
                <Link fontWeight="medium">Contáctenos</Link>
              </NextLink> */}
              <NextLink href="/consulta" passHref>
                <Link 
                  bg="#ff5722" 
                  color="white" 
                  px={4} 
                  py={2} 
                  borderRadius="md"
                  _hover={{ bg: "orange.600" }}
                >
                  Pide tu Consulta
                </Link>
              </NextLink>
            </HStack>
          </Flex>

          {/* Mobile Navigation */}
          <Box 
            display={{ base: isOpen ? "block" : "none", md: "none" }}
            mt={4}
          >
            <Stack as="nav" spacing={4}>
              <NextLink href="/" passHref>
                <Link py={2} fontWeight="medium">Inicio</Link>
              </NextLink>
              {/* <NextLink href="/nosotros" passHref>
                <Link py={2} fontWeight="medium">Nosotros</Link>
              </NextLink> */}
              <NextLink href="/areas-practica" passHref>
                <Link py={2} fontWeight="medium">Áreas de Práctica</Link>
              </NextLink>
              {/* <NextLink href="/noticias" passHref>
                <Link py={2} fontWeight="medium">Noticias</Link>
              </NextLink> */}
              {/* <NextLink href="/redes-sociales" passHref>
                <Link py={2} fontWeight="medium">Redes Sociales</Link>
              </NextLink> */}
              <NextLink href="/preguntas" passHref>
                <Link py={2} fontWeight="medium">Preguntas</Link>
              </NextLink>
              {/* <NextLink href="/contactenos" passHref>
                <Link py={2} fontWeight="medium">Contáctenos</Link>
              </NextLink> */}
              <NextLink href="/consulta" passHref>
                <Link 
                  bg="#ff5722" 
                  color="white" 
                  px={4} 
                  py={2} 
                  display="inline-block"
                  borderRadius="md"
                  mt={2}
                  _hover={{ bg: "orange.600" }}
                >
                  Pide tu Consulta
                </Link>
              </NextLink>
            </Stack>
          </Box>
        </Container>
      </Box>
      
      {/* Esta caja agrega espacio cuando el navbar está fijo para evitar saltos en el contenido */}
      {scrolled && (
        <Box height={{ base: isOpen ? "340px" : "60px", md: "60px" }} />
      )}
    </Box>
  )
}