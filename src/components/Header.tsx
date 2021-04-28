import { Flex, useBreakpointValue, Icon, IconButton } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { Profile } from '../components/Header/Profile'
import { NotificationsNav } from '../components/Header/NotificationsNav'
import { SearchBox } from '../components/Header/SearchBox'
import { Logo } from '../components/Header/Logo'

import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx='auto'
      mt="4"
      px="6"
      align="center"
    >

      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          icon={<Icon as={RiMenuLine} />}
        />
      )}

      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
