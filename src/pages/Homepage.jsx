import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import wire from "../assets/wire-logo.png";

export default function Homepage() {
  return (
    <Box bgGradient="linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)" minHeight="100vh" display="flex" justifyContent="center" alignItems="center">

    
    <Box padding={8}  w={"100%"}>
     
      <Image position={"absolute"} right={20} top={120} w={500} src={wire} />
      <Heading mt={16} textAlign={"start"} size={"4xl"} color={"#0077b6"}>
        WIRE
      </Heading>
      <Text mt={7} maxW={"50%"} textAlign={"justify"}>
        We Discover a revolutionary web scraper application designed to transform
        how data is extracted from diverse websites. Our platform offers an
        intuitive user interface, simplifying the complex process of gathering
        valuable information. With customizable scraping options, users can
        effortlessly target specific data points using CSS selectors, XPath, or
        regular expressions, ensuring precise extraction tailored to their
        needs. Dynamic content poses no challenge, as our application adeptly
        handles JavaScript-rendered pages, enabling comprehensive data
        extraction. Transforming scraped data into CSV, JSON, or databases
        becomes seamless, ensuring compatibility with various analytical tools
        or direct integration into applications. Automation features allow
        scheduling of recurring scraping tasks, saving time and streamlining
        workflows. Robust error handling mechanisms gracefully manage issues
        like rate limiting or website changes, ensuring uninterrupted data
        collection. Upholding ethical scraping practices, our platform respects
        website terms of service, guiding users toward responsible and compliant
        scraping techniques. Experience a game-changing tool empowering users
        with efficient, ethical, and powerful web data extraction capabilities,
        fostering insights for informed decision-making.
      </Text>
    </Box>
    </Box>
  );
}
