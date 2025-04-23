"use client"

import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Icon,
  Image,
} from "@chakra-ui/react"
import { Phone } from "lucide-react"
import NextLink from "next/link"

export default function Footer() {
  return (
    <Box bg="#001933" color="white">
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Primera columna */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h3" size="md">
              CONTACTANOS
            </Heading>
            <HStack spacing={2}>
              <Icon as={Phone} boxSize={5} color="white" />
              <Link href="tel:1-888-578-2276" _hover={{ textDecoration: "none", color: "brand.secondary" }}>
                Call Us Today 1-888-578-2276
              </Link>
            </HStack>
            <VStack align="flex-start" spacing={1}>
              <Text>Monday – Friday 8AM – 4:00PM,</Text>
              <Text>Saturdays 8AM – 12PM (EST)</Text>
            </VStack>
          </VStack>

          {/* Segunda columna */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h3" size="md">
              OTRAS CIUDADES
            </Heading>
            <Stack spacing={3}>
              <NextLink href="/atlanta" passHref>
                <Link _hover={{ textDecoration: "none", color: "brand.secondary" }}>
                  <HStack>
                    <Box as="span" fontSize="lg">›</Box>
                    <Text>Abogado de inmigración Atlanta</Text>
                  </HStack>
                </Link>
              </NextLink>
              <NextLink href="/chicago" passHref>
                <Link _hover={{ textDecoration: "none", color: "brand.secondary" }}>
                  <HStack>
                    <Box as="span" fontSize="lg">›</Box>
                    <Text>Abogado de inmigración Chicago</Text>
                  </HStack>
                </Link>
              </NextLink>
              <NextLink href="/dallas" passHref>
                <Link _hover={{ textDecoration: "none", color: "brand.secondary" }}>
                  <HStack>
                    <Box as="span" fontSize="lg">›</Box>
                    <Text>Abogado de inmigración Dallas</Text>
                  </HStack>
                </Link>
              </NextLink>
              <NextLink href="/houston" passHref>
                <Link _hover={{ textDecoration: "none", color: "brand.secondary" }}>
                  <HStack>
                    <Box as="span" fontSize="lg">›</Box>
                    <Text>Abogado de inmigración Houston</Text>
                  </HStack>
                </Link>
              </NextLink>
            </Stack>
          </VStack>

          {/* Tercera columna */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h3" size="md">
              OTRAS CIUDADES
            </Heading>
            <Stack spacing={3}>
              <NextLink href="/las-vegas" passHref>
                <Link _hover={{ textDecoration: "none", color: "brand.secondary" }}>
                  <HStack>
                    <Box as="span" fontSize="lg">›</Box>
                    <Text>Abogado de inmigración Las Vegas</Text>
                  </HStack>
                </Link>
              </NextLink>
              <NextLink href="/los-angeles" passHref>
                <Link _hover={{ textDecoration: "none", color: "brand.secondary" }}>
                  <HStack>
                    <Box as="span" fontSize="lg">›</Box>
                    <Text>Abogado de inmigración Los Angeles</Text>
                  </HStack>
                </Link>
              </NextLink>
              <NextLink href="/new-york" passHref>
                <Link _hover={{ textDecoration: "none", color: "brand.secondary" }}>
                  <HStack>
                    <Box as="span" fontSize="lg">›</Box>
                    <Text>Abogado de inmigración New York</Text>
                  </HStack>
                </Link>
              </NextLink>
            </Stack>
          </VStack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderColor="#0a2e50">
        <Container maxW="container.xl" py={4}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "center", md: "center" }}
          >
            <Text color="gray.400" fontSize="sm">
              Copyright © 2023 Abogados de Inmigración Jorge Rivera. Todos los derechos reservados.
            </Text>
            
            {/* Logo en el footer */}
            <Box ml="auto">
              <Image 
                src="/placeholder.svg?width=150&height=100" 
                alt="Jorge Rivera Immigration Group" 
                maxH="100px"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}