"use client"

import React from "react"
import {
  Box,
  Heading,
  Text,
  Divider,
  UnorderedList,
  ListItem,
  SimpleGrid,
  HStack,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import { LucideIcon } from "lucide-react"

// Tipos de datos para las secciones de contenido
interface QuoteSection {
  type: 'quote';
  text: string;
}

interface TextSection {
  type: 'text';
  content: string[];
}

interface HeadingSection {
  type: 'heading';
  title: string;
  level: 2 | 3 | 4;
}

interface ListSection {
  type: 'list';
  items: string[];
}

interface CardGridSection {
  type: 'cardGrid';
  cards: {
    title: string;
    description: string;
    icon?: LucideIcon;
  }[];
  columns?: number;
}

interface DividerSection {
  type: 'divider';
}

interface AlertSection {
  type: 'alert';
  title?: string;
  text: string;
  variant?: 'info' | 'warning' | 'success';
}

type ContentSection = 
  | QuoteSection 
  | TextSection 
  | HeadingSection 
  | ListSection 
  | CardGridSection 
  | DividerSection
  | AlertSection;

interface ServiceContentProps {
  sections: ContentSection[];
}

export default function ServiceContent({ sections }: ServiceContentProps) {
  return (
    <Box>
      {sections.map((section, index) => {
        switch (section.type) {
          case 'quote':
            return (
              <Box key={index} borderLeft="4px solid" borderLeftColor="blue.500" pl={4} mb={6}>
                <Text fontSize="lg" fontStyle="italic" color="gray.700">
                  {section.text}
                </Text>
              </Box>
            );
            
          case 'text':
            return (
              <Box key={index} mb={6}>
                {section.content.map((paragraph, pIndex) => (
                  <Text key={pIndex} fontSize="lg" color="gray.700" mb={pIndex < section.content.length - 1 ? 4 : 0}>
                    {paragraph}
                  </Text>
                ))}
              </Box>
            );
            
          case 'heading':
            const HeadingTag = `h${section.level}` as 'h2' | 'h3' | 'h4';
            const headingSize = section.level === 2 ? 'xl' : section.level === 3 ? 'lg' : 'md';
            const headingColor = section.level === 2 ? 'blue.600' : 'gray.800';
            
            return (
              <Heading 
                key={index} 
                as={HeadingTag} 
                size={headingSize} 
                color={headingColor} 
                mb={4}
              >
                {section.title}
              </Heading>
            );
            
          case 'list':
            return (
              <UnorderedList key={index} spacing={2} pl={6} mb={6}>
                {section.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>
                    <Text color="gray.700">{item}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            );
            
          case 'cardGrid':
            return (
              <SimpleGrid 
                key={index} 
                columns={{ base: 1, md: section.columns || 2 }} 
                spacing={6} 
                mb={6}
              >
                {section.cards.map((card, cardIndex) => (
                  <Box 
                    key={cardIndex} 
                    p={5} 
                    borderWidth="1px" 
                    borderRadius="lg" 
                    borderColor="gray.200"
                  >
                    {card.icon && (
                      <HStack mb={3}>
                        <Flex
                          justify="center"
                          align="center"
                          bg="blue.50"
                          color="blue.600"
                          boxSize="40px"
                          borderRadius="full"
                          mr={2}
                        >
                          <Icon as={card.icon} boxSize={5} />
                        </Flex>
                        <Heading as="h4" size="md">
                          {card.title}
                        </Heading>
                      </HStack>
                    )}
                    {!card.icon && (
                      <Heading as="h4" size="md" mb={2}>
                        {card.title}
                      </Heading>
                    )}
                    <Text color="gray.600">{card.description}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            );
            
          case 'divider':
            return <Divider key={index} my={8} />;
            
          case 'alert':
            const bgColor = section.variant === 'warning' 
              ? 'yellow.50' 
              : section.variant === 'success' 
                ? 'green.50' 
                : 'blue.50';
            
            const textColor = section.variant === 'warning' 
              ? 'yellow.700' 
              : section.variant === 'success' 
                ? 'green.700' 
                : 'blue.700';
            
            return (
              <Box key={index} bg={bgColor} p={6} borderRadius="md" mb={6}>
                {section.title && (
                  <Heading as="h4" size="md" color={textColor} mb={3}>
                    {section.title}
                  </Heading>
                )}
                <Text color="gray.700">
                  {section.text}
                </Text>
              </Box>
            );
            
          default:
            return null;
        }
      })}
    </Box>
  );
}