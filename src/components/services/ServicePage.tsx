"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import ServiceLayout from "@/components/services/ServiceLayout"
import ServiceContent from "@/components/services/ServiceContent"

import { Box, Text, Button } from "@chakra-ui/react"
import Link from "next/link"
import { ServiceData, servicesData } from "./serviceData"

export default function ServicePage() {
  const params = useParams()
  const [service, setService] = useState<ServiceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    // Buscar el servicio correspondiente al slug de la URL
    const slug = params.slug as string
    const foundService = servicesData.find(s => s.slug === slug)
    
    if (foundService) {
      setService(foundService)
      setError(false)
    } else {
      setError(true)
    }
    
    setLoading(false)
  }, [params])
  
  if (loading) {
    return (
      <ServiceLayout title="Cargando...">
        <Box textAlign="center" py={10}>
          <Text>Cargando información del servicio...</Text>
        </Box>
      </ServiceLayout>
    )
  }
  
  if (error || !service) {
    return (
      <ServiceLayout title="Servicio no encontrado">
        <Box textAlign="center" py={10}>
          <Text fontSize="xl" mb={6}>Lo sentimos, no pudimos encontrar el servicio solicitado.</Text>
          <Button as={Link} href="/areas-de-practica" colorScheme="blue">
            Ver todos los servicios
          </Button>
        </Box>
      </ServiceLayout>
    )
  }
  
  return (
    <ServiceLayout title={service.title}>
      <ServiceContent sections={service.sections} />
    </ServiceLayout>
  )
}