import { ReactNode } from 'react'
import { Link as ChakraLink, Icon, Text, LinkProps } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { ActiveLink } from '../../components/ActiveLink'

type NavLinkProps = LinkProps & {
  icon: IconType;
  children: ReactNode;
  href: string;
}

export function NavLink({ children, href, icon, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink d="flex" align="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
