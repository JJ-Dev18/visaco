'use client';

import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header">
      {/* Top Bar */}
      <Box bg="brand.primary" color="white" py={2}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <Icon as={FaPhone} mr={2} />
              <Text fontSize="sm">Call Us Today! 888-676-0576</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm" mr={4}>Lunes - Viernes 8AM - 6:00PM, Domingo 8AM - 12PM (EST)</Text>
              <HStack spacing={3}>
                <Link href="#" aria-label="Twitter">
                  <Icon as={FaTwitter} />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Icon as={FaInstagram} />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <Icon as={FaFacebook} />
                </Link>
              </HStack>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Navigation */}
      <Box bg="white" boxShadow="sm">
        <Container maxW="container.xl">
          <Flex py={4} justifyContent="space-between" alignItems="center">
            <NextLink href="/" passHref>
              <Box fontWeight="bold" fontSize="xl">VisaCo</Box>
            </NextLink>

            {/* Desktop Navigation */}
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              <NextLink href="/" passHref>
                <Link fontWeight="semibold">Inicio</Link>
              </NextLink>
              <NextLink href="/nosotros" passHref>
                <Link fontWeight="semibold">Nosotros</Link>
              </NextLink>
              <NextLink href="/areas-practica" passHref>
                <Link fontWeight="semibold">Áreas de Práctica</Link>
              </NextLink>
              <NextLink href="/noticias" passHref>
                <Link fontWeight="semibold">Noticias</Link>
              </NextLink>
              <NextLink href="/redes-sociales" passHref>
                <Link fontWeight="semibold">Redes Sociales</Link>
              </NextLink>
              <NextLink href="/preguntas" passHref>
                <Link fontWeight="semibold">Preguntas</Link>
              </NextLink>
              <NextLink href="/contactenos" passHref>
                <Link fontWeight="semibold">Contáctenos</Link>
              </NextLink>
              <NextLink href="/pide-consulta" passHref>
                <Link bg="brand.secondary" color="white" px={4} py={2} borderRadius="md">
                  Pide tu Consulta
                </Link>
              </NextLink>
            </HStack>

            {/* Mobile menu button */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Toggle Navigation"
              variant="ghost"
            />
          </Flex>
        </Container>
      </Box>

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};