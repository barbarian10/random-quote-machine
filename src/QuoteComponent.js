import React, { useCallback, useEffect, useState } from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './QuoteComponent.css';

function QuoteComponent({ data }) {
    const [randomQuote, setRandomQuote] = useState(null);
    const [isVisible, setIsVisible] = useState(true);

    const getRandomQuote = useCallback(() => {
        setIsVisible(false); // Hide the text
        // Simulate loading delay (replace with your actual data fetching logic)
        const randomIndex = Math.floor(Math.random() * data.length);
        const newRandomQuote = data[randomIndex];
        setTimeout(() => {
            setRandomQuote(newRandomQuote);
            setIsVisible(true); // Show the text with a smooth transition
        }, 1000); // Adjust the delay as needed
    }, [data]);

    useEffect(() => {
        getRandomQuote();
    }, [getRandomQuote]);

    return (
        <Flex
            direction="column"
            justify="space-between"
            w="100%"
            minH={{ base: "30vh", sm: "32vh", md: "33vh", lg: "35vh" }}
            maxH={{ base: "50vh", sm: "60vh", md: "70vh", lg: "80vh" }}
            width={{ base: "90vw", sm: "90vw", md: "50vw", lg: "40vw" }}
            p={8}
            pos="relative"
            bg="gray.500"
            borderRadius={25}
        >
            <Text
                fontSize={{ base: "1.25rem", sm: "1.4rem", md: "1.5rem", lg: "1.7rem" }}
                className={isVisible ? "visible" : "hidden"}
                alignSelf={"center"}
            >
                {randomQuote ? randomQuote.text : "loading..."}
            </Text>
            <Text
                fontSize={{ base: "1rem" }}
                alignSelf="flex-end"
                mt="0.5rem"
                className={isVisible ? "visible" : "hidden"}

            >
                {randomQuote ? randomQuote.author : "loading..."}
            </Text>

            <Box mb={5} />
            <Flex direction="row" justify="space-between" overflow={"hidden"}>
                <a
                    href={"https://twitter.com/intent/tweet?"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <Button onClick={getRandomQuote}
                    background={"gray.600"}>New Quote</Button>
            </Flex>
        </Flex>
    );
}

export { QuoteComponent };