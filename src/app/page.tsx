import React from "react"
import { Box } from "@chakra-ui/react"

import ContactForm from "@/components/home/ContactForm"
import FAQ from "@/components/home/Faq"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"
import HeaderSlider from "@/components/home/HeaderSlider"

import Testimonials from "@/components/home/Testimonials"

import CTASection from "@/components/home/CTASection"
import PracticeAreas from "@/components/home/PracticeAreas"
import YouTubeVideos from "@/components/home/YoutubeVideos"
import AttorneyInfo from "@/components/home/AttorneyInfo"
import PartnersSection from "@/components/home/PartnersSection"



export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <HeaderSlider />
       <AttorneyInfo/>
  
      <PracticeAreas />
      <YouTubeVideos/>

      <Testimonials /> 
      {/* <FAQ /> */}
      {/* <CTASection /> */}
      <Box bg="blue.50" py={16}>
        {/* <ContactForm /> */}
      </Box>
      <PartnersSection/>
      <Footer />
    </Box>
  )
}