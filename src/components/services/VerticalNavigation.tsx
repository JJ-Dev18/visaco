"use client"

import { Box, VStack, Text, useColorModeValue } from "@chakra-ui/react"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface ServiceLink {
  name: string
  path: string
}

export default function VerticalNavigation() {
  const pathname = usePathname()
  const activeBgColor = useColorModeValue("blue.50", "blue.900")
  const activeBorderColor = useColorModeValue("blue.500", "blue.200")
  const hoverBgColor = useColorModeValue("gray.100", "gray.700")
  
  const serviceLinks: ServiceLink[] = [
    { name: "Trámites de Visas", path: "/servicios/visas" },
    { name: "Representación Legal", path: "/servicios/representacion" },
    { name: "Mociones", path: "/servicios/mociones" },
    { name: "Asilo Político", path: "/servicios/asilo" },
    { name: "Reunificación Familiar", path: "/servicios/reunificacion-familiar" },
    { name: "Permiso de Viaje", path: "/servicios/permiso-viaje" },
    { name: "Peticiones Laborales", path: "/servicios/peticiones-laborales" },
    { name: "Violencia Doméstica", path: "/servicios/violencia-domestica" },
    { name: "Deportaciones", path: "/servicios/deportaciones" },
    { name: "Ciudadanía", path: "/servicios/ciudadania" },
    { name: "Residencia", path: "/servicios/residencia" },
    { name: "Peticiones", path: "/servicios/peticiones" },
  ]

  return (
    <Box as="nav" width="100%" borderWidth="1px" borderRadius="md" overflow="hidden">
      <VStack spacing={0} align="stretch">
        {serviceLinks.map((link) => {
          const isActive = pathname === link.path
          
          return (
            <Link 
              key={link.path} 
              href={link.path} 
              passHref
              style={{ textDecoration: 'none' }}
            >
              <Box 
                py={3} 
                px={4}
                display="block"
                fontWeight={isActive ? "medium" : "normal"}
                bg={isActive ? activeBgColor : "transparent"}
                borderLeftWidth={isActive ? "4px" : "0px"}
                borderLeftColor={activeBorderColor}
                borderLeftStyle="solid"
                _hover={{ 
                  bg: !isActive ? hoverBgColor : activeBgColor,
                }}
                cursor="pointer"
              >
                <Text>{link.name}</Text>
              </Box>
            </Link>
          )
        })}
      </VStack>
    </Box>
  )
}