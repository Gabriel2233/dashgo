import { Box, Heading, Divider, VStack, HStack, SimpleGrid, Flex, Button } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

import { Input } from '../../components/Form/Input'
import Link from 'next/link'

import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type CreateUserFormValues = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup.string().min(6, "A senha precisa ter mais que 6 caracteres").required("Senha Obrigatoria"),
  password_confirmation: yup.string().oneOf([
    null, yup.ref("password")
  ], "As senhas precisam ser iguais")
})

export default function CreateUser() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(createUserSchema)
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormValues> = (values) => {
    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w='100%' maxWidth={1480} my="6" mx="auto" px={["6", "8"]}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" as="form" onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700"></Divider>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Nome Completo" {...register("name")} error={errors.name} />
              <Input name="email" type="email" label="E-mail" {...register("email")} error={errors.email} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" label="Senha" type="password" {...register("password")} error={errors.password} />
              <Input name="password_confirmation" label="Confirme a Senha" {...register("password_confirmation")} type="password" error={errors.password_confirmation} />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">

              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
