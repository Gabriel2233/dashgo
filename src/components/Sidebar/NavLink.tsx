import { ReactNode } from 'react'
import { Link, Icon, Text, LinkProps } from "@chakra-ui/react"
import { IconType } from "react-icons"

type NavLinkProps = LinkProps & {
  icon: IconType;
  children: ReactNode;
}

export function NavLink({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link d="flex" align="center" py="1" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}
