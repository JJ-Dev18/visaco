
"use client"

import { Box, AspectRatio } from "@chakra-ui/react"

interface MapEmbedProps {
  address: string;
  apiKey?: string;
  zoom?: number;
  height?: string | number;
}

export default function MapEmbed({ 
  address, 
  apiKey = "", 
  zoom = 15,
  height = "400px" 
}: MapEmbedProps) {
  // Preparar el query para la URL de Google Maps
  const query = encodeURIComponent(address);
  
  // URL base para Google Maps embed
  const mapUrl = apiKey 
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=${zoom}`
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.520292338224!2d-80.29367242413277!3d25.782314907686856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9c31b3599bb%3A0x30e55a10bab4f71a!2s5820%20Blue%20Lagoon%20Dr%2C%20Miami%2C%20FL%2033126%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1713997423446!5m2!1ses!2sco`;

  return (
    <Box w="full" borderRadius="lg" overflow="hidden" boxShadow="md">
      <AspectRatio ratio={16/9} w="full" h={height}>
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ubicación: ${address}`}
        />
      </AspectRatio>
    </Box>
  )
}