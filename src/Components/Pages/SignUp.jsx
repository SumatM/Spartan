import { Button, FormControl, FormLabel, Input, Stack,Box, Heading,Flex ,Text, Select, Checkbox, HStack, VStack} from "@chakra-ui/react";
import {FaRegClipboard} from 'react-icons/fa'
import {BsEnvelopeOpen} from 'react-icons/bs'
import {GiSafetyPin} from 'react-icons/gi'
import Footer from './../Footer'
import {CheckIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function SignUp(){
  let inputRef = useRef('')


    function handlechange(e){
      console.log(e.target.value)
      
    }

    function handlePasswordShow(e){
      if(e.target.checked){
        (inputRef.current.type='text')
      }else{
        (inputRef.current.type='password')
      }
    }

    


    return (
        <Box mt='85px'> 
        <Flex>
        <Box w='60%' >
        <Box w='80%' m='auto' textAlign='start'  >
            <Heading size='lg' p='20px' fontFamily='Roboto, Mono, monospace' letterSpacing='1px'>Create account</Heading>
        <form >
          <Stack spacing={3} width='90%' p='10px' mt='20px' letterSpacing='0.5px'>
{/* Title */}
            <FormControl>
              <FormLabel  letterSpacing='0.8px'>Title</FormLabel>
              <Select placeholder='CHOOSE A TITLE' fontSize='12px'  size='lg' w='35%' borderRadius='none' border='1px solid gray' onChange={handlechange}>
                <option value='mr'>MR</option>
                <option value='mrs'>MRS</option>
                <option value='ms'>MS</option>
                <option value='miss'>MISS</option>
                <option value='doctor'>DOCTOR</option>
                <option value='other'>OTHER</option>
            </Select>
            </FormControl>

{/* First name  */}

            <FormControl>
              <FormLabel  letterSpacing='0.8px'>First name</FormLabel>
              <Text fontSize='xs' mb='7px' color='red'>{}</Text>
              <Input onChange={handlechange} border='1px solid black' type="email" borderRadius='0px'/>
            </FormControl>
            <FormControl>
              <FormLabel  letterSpacing='0.8px'>Last name</FormLabel>
              <Text fontSize='xs' mb='7px' color='red'>{}</Text>
              <Input onChange={handlechange} border='1px solid black' type="email" borderRadius='0px'/>
            </FormControl>
{/* email addres */}
            <FormControl>
              <FormLabel  letterSpacing='0.8px'>Email address</FormLabel>
              <Text fontSize='xs' mb='7px' color='red'>{}</Text>
              <Input onChange={handlechange} border='1px solid black' type="email" borderRadius='0px'/>
            </FormControl>
{/* password */}
            <FormControl>
              <FormLabel  letterSpacing='0.8px'>Password</FormLabel>
              <Text mb='10px' fontSize='xs'>Your password should be at least 8 characters in length, and contain at least 1 number and 1 letter.</Text>
              <Input onChange={handlechange} border='1px solid black' type="password"  borderRadius='0px'
                ref={inputRef}
              />
              <HStack mt='15px'>
              <Checkbox onChange={handlePasswordShow} border='0.5px solid gray' size='lg' icon={<CheckIcon />}/> 
              <Text mb='10px' fontSize='xs'>{'Show'}</Text>
              </HStack>
            </FormControl>
{/* phone no. */}
            <FormControl>
              <FormLabel  letterSpacing='0.8px'>Phone</FormLabel>
              <Text mb='10px' fontSize='xs'>We'll only use this to contact you about your order or to send you SMS about your delivery</Text>
              <Input onChange={handlechange} border='1px solid black' type="password"  borderRadius='0px'/>
{/* checkbox  */}
              <Box bg='red`'>
              <HStack mt='15px'>
                <Checkbox border='0.5px solid gray' size='lg'/> <Text mb='10px' fontSize='xs'>Emails about offers and our exciting new ranges.</Text>
                </HStack>
                <HStack mt='15px'>
                
              <Checkbox border='0.5px solid gray' size='lg'/> <Text mb='10px' fontSize='xs'>If you'd prefer not to receive mail from selected companies, please check this box.</Text>
              </HStack>
              <Text mb='10px' fontSize='9px'>By creating an account with Charles Tyrwhitt, you confirm that you have read and accept our <Text fontSize='10px' fontWeight='bold' display='inline'>Terms and Conditions</Text> and <Text fontSize='10px' fontWeight='bold' display='inline'>See privacy policy</Text></Text>
              </Box>
            </FormControl>
            <br/>
            <Button bg='#001F49' borderRadius='0px' color='white' type="submit" _hover={
                {color:'white',bg:'#7C8DA4'}
            }>
              Login
            </Button>
          </Stack>
        </form>
            </Box>
        </Box>
        {/* -----------2nd box for LOGIN----------- */}
        <Box w='50%' h='400px' letterSpacing='1.2px' fontFamily='Commuter Sans' mt='10%'>
        <Box w='70%' textAlign='start' >
          <Stack spacing={3} width='90%' p='10px' mt='20px'>
          <Flex border='0.5px solid gray' p='4' bg='#EBEDF3'>
          <Box width='30%'>
            <img width='100%' src='https://cdn-icons-png.flaticon.com/512/4718/4718418.png' alt=''/>
          </Box>
            <Box ml='10px'>
            <Heading size='xs'>100% SECURE</Heading>
            <Text fontSize='xs'>Shopping is secure with Charles Tyrwhitt</Text>
            </Box>
          </Flex>

          <Flex border='0.5px solid gray' p='4' bg='#EBEDF3'>
          <Box width='30%' >
            <img width='100%' src='https://cdn-icons-png.flaticon.com/512/2592/2592592.png' alt=''/>
          </Box>
            <Box ml='10px'>
            <Heading size='xs'>6 MONTHS GUARANTEE</Heading>
            <Text fontSize='xs'>Exchange or return your purchase up to 6 months after receipt</Text>
            </Box>
          </Flex>
            <Heading margin='10px 0' color='#001F49' size='md'>HAVE AN ACCOUNT?</Heading>
            <Link to='/login'><Button bg='#001F49' borderRadius='0px' p='25px' color='white' type="submit" _hover={
                {color:'white',bg:'#7C8DA4'}
            }>
              <Text fontSize='sm' fontFamily='sans-serif'>CLICK HERE TO LOG IN</Text>
            </Button></Link>
          </Stack>
        </Box>

        
        
        </Box>
        </Flex>

            {/* -------------footer part----------- */}
            <Footer/>

        </Box>
      );
    
}