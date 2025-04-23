'use client';

import {
  Box,
  Flex,
  Link,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import NextLink from 'next/link';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody pt={20}>
          <Stack spacing={6}>
            <NextLink href="/" passHref>
              <Link onClick={onClose} fontWeight="bold">Inicio</Link>
            </NextLink>
            <NextLink href="/nosotros" passHref>
              <Link onClick={onClose} fontWeight="bold">Nosotros</Link>
            </NextLink>
            <NextLink href="/areas-practica" passHref>
              <Link onClick={onClose} fontWeight="bold">Áreas de Práctica</Link>
            </NextLink>
            <NextLink href="/noticias" passHref>
              <Link onClick={onClose} fontWeight="bold">Noticias</Link>
            </NextLink>
            <NextLink href="/redes-sociales" passHref>
              <Link onClick={onClose} fontWeight="bold">Redes Sociales</Link>
            </NextLink>
            <NextLink href="/preguntas" passHref>
              <Link onClick={onClose} fontWeight="bold">Preguntas</Link>
            </NextLink>
            <NextLink href="/contactenos" passHref>
              <Link onClick={onClose} fontWeight="bold">Contáctenos</Link>
            </NextLink>
            <Flex justifyContent="center" mt={4}>
              <NextLink href="/pide-consulta" passHref>
                <Link 
                  onClick={onClose} 
                  bg="brand.secondary" 
                  color="white" 
                  px={6} 
                  py={3} 
                  borderRadius="md" 
                  display="inline-block"
                  textAlign="center"
                >
                  Pide tu Consulta
                </Link>
              </NextLink>
            </Flex>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};