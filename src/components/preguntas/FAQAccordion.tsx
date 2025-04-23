"use client"

import { useState } from "react"
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
  VStack
} from "@chakra-ui/react"
import { FAQItem } from "./preguntas";


interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Accordion allowToggle index={expandedIndex !== null ? expandedIndex : undefined}>
      {items.map((item, index) => (
        <AccordionItem 
          key={item.id}
          mb={4}
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
        >
          <h2>
            <AccordionButton
              py={4}
              onClick={() => handleToggle(index)}
              _expanded={{ bg: "blue.600", color: "white" }}
            >
              <Box flex="1" textAlign="left" fontWeight="medium">
                {item.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} pt={4} bg="white">
            <VStack spacing={3} align="stretch">
              {item.answer.map((paragraph, pIndex) => (
                <Text key={pIndex} color="gray.700">
                  {paragraph}
                </Text>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}