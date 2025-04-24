// src/components/shared/WhatsAppButton.tsx
"use client"

import { Box, Icon, Tooltip } from "@chakra-ui/react"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({ phoneNumber, message = "" }: WhatsAppButtonProps) {
  // Eliminar cualquier carácter no numérico del número de teléfono
  const formattedPhone = phoneNumber.replace(/\D/g, "")
  
  // Crear la URL de WhatsApp con el número y mensaje (si existe)
  const whatsappUrl = `https://wa.me/${formattedPhone}${message ? `?text=${encodeURIComponent(message)}` : ""}`

  return (
    <Tooltip label="Chatea con nosotros" placement="left" hasArrow>
      <Link 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        passHref
      >
        <Box
          position="fixed"
          bottom="30px"
          right="30px"
          zIndex={10}
          bg="green.500"
          color="white"
          w="60px"
          h="60px"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="lg"
          transition="all 0.3s"
          _hover={{
            transform: "scale(1.1)",
            bg: "green.600",
          }}
        >
          <Icon as={MessageCircle} boxSize={8} />
        </Box>
      </Link>
    </Tooltip>
  )
}