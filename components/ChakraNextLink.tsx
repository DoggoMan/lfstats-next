import Link, { LinkProps } from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps;

export default function ChakraNextLink({
  href,
  children,
  ...props
}: ChakraLinkAndNextProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink color="blue.400" {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
}
