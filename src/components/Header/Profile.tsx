import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {!!showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Tiso</Text>
          <Text color="gray.300" fontSize="small">gabriel@emai.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Gabriel Tiso" />
    </Flex>
  )
}
