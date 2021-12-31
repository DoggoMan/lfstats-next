import { Box, Center, IconButton, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import { IoHome } from "react-icons/io5";
import NextNProgress from "nextjs-progressbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Box bgColor={"brand"}>
        <Center h="56px">
          <NextLink href={"/"}>
            <IconButton
              aria-label="Home"
              icon={<IoHome />}
              variant="link"
              color="white"
              size="lg"
            />
          </NextLink>
          <Spacer />
        </Center>
      </Box>
      <NextNProgress color="orange" />
      <Box justifyContent="center" px={4}>
        {children}
      </Box>
    </>
  );
}
