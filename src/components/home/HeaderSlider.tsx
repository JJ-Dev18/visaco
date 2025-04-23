"use client"

import React, { useState, useEffect } from "react"
import { Box, Button, Container, Flex, HStack, Image } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import NextLink from "next/link"

interface SlideProps {
  image: string
  link: string
  hasYoutubeVideos?: boolean
  youtubeVideo1?: string
  youtubeVideo2?: string
}

const slides: SlideProps[] = [
  {
    image: "/images/home/slider/slider1.jpg", // Reemplazar con la primera imagen del slider
    link: "/redes-sociales",
    hasYoutubeVideos: true,
    youtubeVideo1: "https://www.youtube.com/embed/2iacfSUspmg?si=Go0hwnS92M2gz4hd",
    youtubeVideo2: "https://www.youtube.com/embed/Dz7fsR6iVcU?si=mimSuiUkQbCVlhql"
  },
  {
    image: "/images/home/slider/slider2.png", // Reemplazar con la segunda imagen del slider
    link: "/consulta"
  },
  {
    image: "/images/home/slider/slider3.png", // Reemplazar con la tercera imagen del slider
    link: "/servicios"
  },
  {
    image: "/images/home/slider/slider4.png", // Reemplazar con la cuarta imagen del slider
    link: "/consulta"
  },
  {
    image: "/images/home/slider/slider5.png", // Reemplazar con la quinta imagen del slider
    link: "/redes-sociales"
  }
]

export default function UpdatedSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      as="section"
      position="relative"
      height={{ base: "auto", md: "600px" }}
      overflow="hidden"
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          opacity={index === currentSlide ? 1 : 0}
          transition="opacity 0.5s ease-in-out"
          display="flex"
          alignItems="center"
          visibility={index === currentSlide ? "visible" : "hidden"}
        >
          <NextLink href={slide.link} passHref>
            <Box as="a" width="100%" height="100%" display="block" position="relative">
              <Image 
                src={slide.image} 
                alt={`Slide ${index + 1}`} 
                width="100%" 
                height="100%" 
                objectFit="cover"
              />
              
              {slide.hasYoutubeVideos && (
                <Flex 
                  position="absolute" 
                  bottom="2rem" 
                  right="2rem"
                  gap={4}
                  zIndex={2}
                >
                  <Box 
                    width="300px" 
                    height="170px" 
                    borderRadius="md"
                    overflow="hidden"
                    boxShadow="lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <iframe 
                      width="300" 
                      height="170" 
                      src={slide.youtubeVideo1}
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    />
                  </Box>
                  <Box 
                    width="300px" 
                    height="170px" 
                    borderRadius="md"
                    overflow="hidden"
                    boxShadow="lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <iframe 
                      width="300" 
                      height="170" 
                      src={slide.youtubeVideo2}
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    />
                  </Box>
                </Flex>
              )}
            </Box>
          </NextLink>
        </Box>
      ))}

      {/* Navigation Arrows */}
      <Flex 
        position="absolute" 
        width="100%" 
        justify="space-between" 
        top="50%" 
        transform="translateY(-50%)"
        px={{ base: 2, md: 6 }}
        zIndex={10}
      >
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            prevSlide();
          }}
          borderRadius="full"
          bg="whiteAlpha.700"
          color="gray.800"
          _hover={{ bg: "whiteAlpha.900" }}
          p={2}
        >
          <ChevronLeft size={24} />
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            nextSlide();
          }}
          borderRadius="full"
          bg="whiteAlpha.700"
          color="gray.800"
          _hover={{ bg: "whiteAlpha.900" }}
          p={2}
        >
          <ChevronRight size={24} />
        </Button>
      </Flex>

      {/* Slide Indicators */}
      <Flex position="absolute" bottom="1.5rem" width="100%" justify="center" zIndex={10}>
        <HStack spacing={2}>
          {slides.map((_, index) => (
            <Box
              key={index}
              as="button"
              w={index === currentSlide ? "10px" : "10px"}
              h="10px"
              borderRadius="full"
              bg={index === currentSlide ? "#1f3e5a" : "gray.300"}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentSlide(index);
              }}
              transition="all 0.3s"
            />
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}