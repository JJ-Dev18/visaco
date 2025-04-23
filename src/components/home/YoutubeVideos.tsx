"use client"

import React, { useState, useEffect } from "react"
import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Link,
  HStack,
  VStack,
  Grid,
  Center,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface VideoProps {
  id: string
  title: string
  thumbnail: string
  isLive?: boolean
  date?: string
}

// Datos de ejemplo, en producción estos podrían venir de una API
const featuredVideos: VideoProps[] = [
  {
    id: "video1",
    title: "¡DESCUBRE CÓMO SOBREVIVIR A LAS MEDIDAS ANTI-INMIGRANTES!",
    thumbnail: "https://i.ytimg.com/vi/2iacfSUspmg/maxresdefault.jpg",
    isLive: true,
    date: "MARTES 1PM"
  },
  {
    id: "video2",
    title: "¿Qué tienen que hacer los Tepesianos y Dreamers?",
    thumbnail: "https://i.ytimg.com/vi/qWP-z71vcO8/maxresdefault.jpg",
    isLive: true,
    date: "JUEVES 1PM / HORA DEL ESTE"
  }
]

const recentVideos: VideoProps[] = [
  {
    id: "video3",
    title: "¿Te vas a AUTODEPORTAR o vas a PELEAR por quedarte?",
    thumbnail: "https://i.ytimg.com/vi/8X7RKTZQgQw/maxresdefault.jpg"
  },
  {
    id: "video4",
    title: "¿Te vas a AUTODEPORTAR o vas a PELEAR por quedarte?",
    thumbnail: "https://i.ytimg.com/vi/xV9gT9G4KBg/maxresdefault.jpg"
  },
  {
    id: "video5",
    title: "¡Cuidado! Si cancelaron tu Parole, esto es lo que puedes hacer",
    thumbnail: "https://i.ytimg.com/vi/rCnNnLY7-Z8/maxresdefault.jpg"
  },
  {
    id: "video6",
    title: "Qué tienen que hacer los Tepesianos y Dreamers",
    thumbnail: "https://i.ytimg.com/vi/qWP-z71vcO8/maxresdefault.jpg",
    isLive: true
  },
  {
    id: "video7",
    title: "IMPORTANTE: Renuevan el TPS para el Salvador, Honduras, y Nicaragua",
    thumbnail: "https://i.ytimg.com/vi/M6vKXCc1FfE/maxresdefault.jpg",
    isLive: true
  },
  {
    id: "video8",
    title: "Cambios importantes en el ASILO Afirmativo?",
    thumbnail: "https://i.ytimg.com/vi/OxXHVbMHDNs/maxresdefault.jpg",
    isLive: true
  }
]

export default function UpdatedYouTubeVideos() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3); // Suponiendo que hay 3 páginas
  const itemsPerPage = 3;
  
  // En una aplicación real, estos datos vendrían de una API
  const allVideos = recentVideos;
  const totalItems = allVideos.length;
  
  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems]);
  
  const currentVideos = allVideos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const goToNextPage = () => {
    setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev));
  };
  
  const goToPrevPage = () => {
    setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
  };
  
  return (
    <Box as="section" py={12} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={10}>
          {/* Videos Destacados */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} w="full">
            {featuredVideos.map((video) => (
              <Box key={video.id} position="relative" overflow="hidden" borderRadius="md">
                <Link 
                  href={`https://www.youtube.com/watch?v=${video.id}`} 
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
                  <Box position="relative">
                    <Image 
                      src={video.thumbnail} 
                      alt={video.title} 
                      w="full" 
                      h="auto" 
                      transition="transform 0.3s"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                    
                    {/* Overlay con texto */}
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="rgba(0,0,0,0.3)"
                      color="white"
                      p={6}
                      display="flex"
                      flexDirection="column"
                    >
                      <Flex 
                        flexGrow={1} 
                        alignItems="center" 
                        justifyContent="center"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
                        }}
                      >
                        <Box 
                          as="span" 
                          w="70px" 
                          h="70px" 
                          borderRadius="full" 
                          bg="rgba(0,0,0,0.6)" 
                          display="flex" 
                          alignItems="center" 
                          justifyContent="center"
                        >
                          <Box
                            as="span"
                            borderWidth="18px 0 18px 30px"
                            borderColor="transparent transparent transparent white"
                            display="block"
                            ml={2}
                          />
                        </Box>
                      </Flex>
                      
                      <Box textAlign={video.id === "video1" ? "left" : "right"}>
                        <Text fontSize="2xl" fontWeight="bold" mb={2}>
                          {video.title}
                        </Text>
                        
                        {video.id === "video1" && (
                          <>
                            <Text fontSize="lg" mb={2}>
                              Jorge Rivera & Carolina Rivera
                            </Text>
                            <Box 
                              bg="#1054a9" 
                              color="white" 
                              px={3} 
                              py={1} 
                              display="inline-block"
                              borderRadius="md" 
                              mb={3}
                              fontWeight="bold"
                            >
                              LIVE {video.date}
                            </Box>
                            <br />
                            <Button 
                              colorScheme="blue" 
                              size="md"
                              borderRadius="md"
                              mt={2}
                            >
                              ÚNETE AL LIVE
                            </Button>
                          </>
                        )}
                        
                        {video.id === "video2" && (
                          <>
                            <Box 
                              position="absolute"
                              top={4}
                              right={4}
                              bg="red.500"
                              color="white"
                              px={2}
                              py={1}
                              borderRadius="sm"
                              fontWeight="bold"
                            >
                              LIVE
                            </Box>
                            <Box 
                              position="absolute"
                              top={4}
                              left={4}
                              bg="white"
                              color="black"
                              px={2}
                              py={1}
                              borderRadius="sm"
                              fontSize="sm"
                            >
                              {video.date}
                            </Box>
                          </>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Box>
            ))}
          </Grid>
          
          {/* Botones de suscripción */}
          <Center w="full">
            <Link 
              href="https://www.youtube.com/@AbogadoJorgeRivera?sub_confirmation=1" 
              isExternal
              bg="red.600"
              color="white"
              px={4}
              py={2}
              borderRadius="md"
              fontWeight="medium"
              display="inline-flex"
              alignItems="center"
              _hover={{ bg: "red.700", textDecoration: "none" }}
            >
              <Box as="span" bg="white" p={1} borderRadius="sm" mr={2}>
                <Box as="span" color="red.600" fontWeight="bold">▶</Box>
              </Box>
              Suscríbete a mi canal
            </Link>
          </Center>
          
          {/* Paginación superior */}
          <Flex justify="space-between" w="full">
            <HStack>
              <Text>
                {currentPage} / {totalPages === 0 ? 1 : totalPages}
              </Text>
              <Button 
                variant="link" 
                color="blue.500"
                onClick={goToNextPage}
                isDisabled={currentPage >= totalPages}
              >
                Siguiente »
              </Button>
            </HStack>
          </Flex>
          
          {/* Grid de videos */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} w="full">
            {currentVideos.map((video) => (
              <VStack key={video.id} align="stretch" spacing={3}>
                <Box position="relative">
                  <Link 
                    href={`https://www.youtube.com/watch?v=${video.id}`} 
                    isExternal
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      w="full"
                      h="auto"
                      borderRadius="md"
                      objectFit="cover"
                      transition="transform 0.3s"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                    <Flex 
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
                      alignItems="center"
                      justifyContent="center"
                      bg="rgba(0,0,0,0.2)"
                      opacity="0"
                      _hover={{ opacity: "1" }}
                      transition="opacity 0.3s"
                    >
                      <Box 
                        as="span" 
                        w="50px" 
                        h="50px" 
                        borderRadius="full" 
                        bg="rgba(0,0,0,0.6)" 
                        display="flex" 
                        alignItems="center" 
                        justifyContent="center"
                      >
                        <Box
                          as="span"
                          borderWidth="12px 0 12px 20px"
                          borderColor="transparent transparent transparent white"
                          display="block"
                          ml={1}
                        />
                      </Box>
                    </Flex>
                    {video.isLive && (
                      <Box 
                        position="absolute" 
                        top={2} 
                        right={2}
                        bg="red.500" 
                        color="white" 
                        px={2} 
                        py={0} 
                        fontSize="xs"
                        borderRadius="sm"
                        fontWeight="bold"
                      >
                        LIVE
                      </Box>
                    )}
                  </Link>
                </Box>
                <Text fontWeight="bold" fontSize="sm" noOfLines={2}>
                  {video.title}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
          
          {/* Paginación inferior */}
          <Flex justify="space-between" w="full">
            <HStack>
              <Text>
                {currentPage} / {totalPages === 0 ? 1 : totalPages}
              </Text>
              <Button 
                variant="link" 
                color="blue.500"
                onClick={goToNextPage}
                isDisabled={currentPage >= totalPages}
              >
                Siguiente »
              </Button>
            </HStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}