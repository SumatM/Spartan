import { Button, FormControl, FormLabel, Input, Stack,Box, Heading,Flex ,Text, color} from "@chakra-ui/react";
import {FaRegClipboard} from 'react-icons/fa'
import {BsEnvelopeOpen} from 'react-icons/bs'
import {GiSafetyPin} from 'react-icons/gi'

export default function LogIn(){

    return (
        <Flex mt='85px'>
        <Box w='50%'>
        <Box w='70%' m='auto' textAlign='start'  >
            <Heading size='lg' p='20px' fontFamily='Roboto, Mono, monospace' letterSpacing='1px'>My Account</Heading>
        <form >
          <Stack spacing={3} width='90%' p='10px' mt='20px'>
            <FormControl>
              <FormLabel  letterSpacing='0.8px'>Email address</FormLabel>
              <Text fontSize='xs' mb='7px' color='red'>{}</Text>
              <Input border='1px solid black' type="email" borderRadius='0px'/>
            </FormControl>
    
            <FormControl>
              <FormLabel mt='20px' letterSpacing='0.8px'>Password</FormLabel>
              <Input border='1px solid black' type="password"  borderRadius='0px'/>
            </FormControl>
            <Text fontSize='xs'>Forgotten your password?</Text>
            <br/>
            <Button bg='black' borderRadius='0px' color='white' type="submit" _hover={
                {color:'white',bg:'gray'}
            }>
              Login
            </Button>
          </Stack>
        </form>
            </Box>
        </Box>
        {/* -----------2nd box for signup----------- */}
        <Box w='50%' h='400px'>
        <Box w='70%' m='auto' textAlign='start'  >
            <Heading size='lg' p='20px' fontFamily='Roboto, Mono, monospace' letterSpacing='1px'>New customers</Heading>
          <Stack spacing={3} width='90%' p='10px' mt='20px'>
          <Text>Set up an account with us and you will be able to:</Text>
          <Flex>

          <BsEnvelopeOpen/>
          <Text ml='10px' fontSize='sm'> Save multiple addresses to your address book</Text>
          </Flex>
          <Flex>

          <GiSafetyPin/>
          <Text ml='10px' fontSize='sm'> Set your size and monogramming preferences</Text>
          </Flex>
    
            <Flex>
            <FaRegClipboard />
            <Text ml='10px' fontSize='sm'>Check order status</Text>
            </Flex>
            <br/>
            <Button bg='black' borderRadius='0px' color='white' type="submit" _hover={
                {color:'white',bg:'gray'}
            }>
              CREATE AN ACCOUNT NOW
            </Button>
          </Stack>
        </Box>
        </Box>
        </Flex>
      );
    
}