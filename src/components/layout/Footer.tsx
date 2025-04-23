'use client';

import { 
  Box, 
  Container, 
  Flex, 
  HStack, 
  Link, 
  SimpleGrid, 
  Text, 
  VStack, 
  Icon 
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box as="footer" bg="brand.primary" color="white">
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Contacto */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="bold" fontSize="lg">CONTÁCTENOS</Text>
            <HStack>
              <Icon as={FaPhone} />
              <Link href="tel:8886760576">888-676-0576</Link>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} />
              <Link href="mailto:info@visaco.com">info@visaco.com</Link>
            </HStack>
            <Text>Lunes - Viernes 8AM - 6:00PM</Text>
            <Text>Domingo 8AM - 12PM (EST)</Text>
          </VStack>

          {/* Otras Ciudades */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="bold" fontSize="lg">OTRAS CIUDADES</Text>
            <Link href="#">Abogado de Inmigración Atlanta</Link>
            <Link href="#">Abogado de Inmigración Chicago</Link>
            <Link href="#">Abogado de Inmigración Dallas</Link>
            <Link href="#">Abogado de Inmigración Houston</Link>
          </VStack>

          {/* Más Ciudades */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="bold" fontSize="lg">OTRAS CIUDADES</Text>
            <Link href="#">Abogado de Inmigración Las Vegas</Link>
            <Link href="#">Abogado de Inmigración Los Angeles</Link>
            <Link href="#">Abogado de Inmigración New York</Link>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Copyright */}
      <Box borderTop="1px solid" borderColor="gray.600" py={4}>
        <Container maxW="container.xl">
          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            justify="space-between" 
            align={{ base: 'center', md: 'center' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Text fontSize="sm">
              Copyright © {currentYear} VisaCo. Todos los derechos reservados.
            </Text>
            <HStack mt={{ base: 4, md: 0 }} spacing={4}>
              <Link href="#" aria-label="Facebook">
                <Icon as={FaFacebook} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Icon as={FaTwitter} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon as={FaInstagram} />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};