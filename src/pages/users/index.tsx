import { Box, Flex, Text, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Td, Checkbox } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function UsersList() {
  return (
    <Box>
      <Header />

      <Flex w='100%' maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal" >
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
            >
              Criar Novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead px="6" color="gray.300" width="8">
              <Tr>
                <Th>
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>Usuario</Th>
                <Th>Data de cadastro</Th>
                <Th w="6"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Tiso</Text>
                    <Text fontSize="sm" color="gray.300">gabriel@email.com</Text>
                  </Box>
                </Td>

                <Td>04 de abril de 2021</Td>

                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
