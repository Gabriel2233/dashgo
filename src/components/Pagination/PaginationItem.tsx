import { Button } from '@chakra-ui/react'

type PaginationItemProps = {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
  if (isCurrent) {
    return (

      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: "pink.500",
          cusror: "default"
        }}
      >
        {number}
      </Button>
    )
  }

  return (

    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500"
      }}
    >
      {number}
    </Button>
  )
}
