"use client"

import type React from "react"

import { useState } from "react"
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto con usted a la brevedad.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={6}>
        <Stack direction={{ base: "column", md: "row" }} w="full" spacing={6}>
          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" placeholder="Su nombre completo" focusBorderColor="blue.400" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Su correo electrónico" focusBorderColor="blue.400" />
          </FormControl>
        </Stack>

        <Stack direction={{ base: "column", md: "row" }} w="full" spacing={6}>
          <FormControl>
            <FormLabel>Teléfono</FormLabel>
            <Input type="tel" placeholder="Su número de teléfono" focusBorderColor="blue.400" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Servicio de Interés</FormLabel>
            <Select placeholder="Seleccione un servicio" focusBorderColor="blue.400">
              <option value="visas">Trámites de Visas</option>
              <option value="contratos">Contratos Legales</option>
              <option value="representacion">Representación Legal</option>
              <option value="consultoria">Consultoría General</option>
              <option value="otro">Otro</option>
            </Select>
          </FormControl>
        </Stack>

        <FormControl isRequired>
          <FormLabel>Mensaje</FormLabel>
          <Textarea placeholder="Describa su consulta o necesidad legal" rows={5} focusBorderColor="blue.400" />
        </FormControl>

        <FormControl>
          <Checkbox colorScheme="blue">Acepto recibir información sobre servicios y novedades de VisaCo</Checkbox>
        </FormControl>

        <Button type="submit" colorScheme="blue" size="lg" w="full" isLoading={isSubmitting} loadingText="Enviando...">
          Enviar Mensaje
        </Button>
      </VStack>
    </Box>
  )
}

