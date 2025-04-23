"use client"

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react"

interface FAQProps {
  pricingFaqs?: boolean
}

export default function FAQ({ pricingFaqs = false }: FAQProps) {
  const faqs = pricingFaqs
    ? [
        {
          question: "¿Cuáles son las formas de pago aceptadas?",
          answer:
            "Aceptamos pagos en efectivo, transferencias bancarias y tarjetas de crédito/débito. Para clientes internacionales, también facilitamos pagos a través de plataformas seguras como PayPal.",
        },
        {
          question: "¿Se requiere un anticipo para iniciar los servicios?",
          answer:
            "Sí, para iniciar cualquier servicio se requiere un anticipo del 50% del valor total. El 50% restante se cancela al finalizar el servicio o según los hitos acordados en el contrato.",
        },
        {
          question: "¿Los precios incluyen IVA?",
          answer:
            "Todos los precios mostrados en nuestra página web son antes de IVA. El impuesto correspondiente será añadido en la factura final según la normativa fiscal vigente.",
        },
        {
          question: "¿Ofrecen planes de pago flexibles?",
          answer:
            "Sí, entendemos que cada caso es único y podemos diseñar planes de pago adaptados a sus necesidades específicas. Contáctenos para discutir opciones personalizadas.",
        },
        {
          question: "¿Qué sucede si necesito cancelar un servicio ya iniciado?",
          answer:
            "Las políticas de cancelación varían según el tipo de servicio y la etapa del proceso. En general, el anticipo no es reembolsable, pero evaluamos cada caso de manera individual.",
        },
      ]
    : [
        {
          question: "¿Cuáles son los servicios que ofrece VisaCo?",
          answer:
            "VisaCo ofrece una amplia gama de servicios legales, incluyendo trámites de visas para diferentes países, elaboración y revisión de contratos legales, representación legal en procesos administrativos y judiciales, y consultoría legal general.",
        },
        {
          question: "¿Cuánto tiempo toma procesar una visa?",
          answer:
            "El tiempo de procesamiento varía según el tipo de visa y el país de destino. En general, puede tomar entre 2 semanas y 3 meses. Durante la consulta inicial, le proporcionaremos un estimado más preciso basado en su caso específico.",
        },
        {
          question: "¿Trabajan con clientes internacionales?",
          answer:
            "Sí, ofrecemos servicios a clientes de diferentes países. Nuestro equipo está capacitado para manejar casos internacionales y podemos realizar consultas virtuales si no puede visitarnos personalmente.",
        },
        {
          question: "¿Qué documentos necesito para iniciar un trámite de visa?",
          answer:
            "Los documentos requeridos varían según el tipo de visa y país de destino. Generalmente, se necesitan pasaporte vigente, fotografías, comprobantes financieros, carta de invitación o empleo, y antecedentes penales. Durante la consulta inicial, le proporcionaremos una lista detallada.",
        },
        {
          question: "¿Garantizan la aprobación de mi visa?",
          answer:
            "No podemos garantizar la aprobación, ya que la decisión final depende de las autoridades migratorias de cada país. Sin embargo, nuestro conocimiento y experiencia aumentan significativamente las probabilidades de éxito al presentar una aplicación completa y correcta.",
        },
        {
          question: "¿Ofrecen consultas gratuitas?",
          answer:
            "Sí, ofrecemos una consulta inicial gratuita para evaluar su caso y proporcionarle información general sobre el proceso y los costos asociados.",
        },
      ]

  return (
    <Accordion allowMultiple width="100%">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} borderWidth="1px" borderRadius="md" mb={4} overflow="hidden">
          <h3>
            <AccordionButton py={4} _expanded={{ bg: "blue.50", color: "blue.700" }}>
              <Box flex="1" textAlign="left" fontWeight="medium">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4} bg="white">
            <Text color="gray.600">{faq.answer}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

