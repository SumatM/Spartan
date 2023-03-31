import {Box, Center, HStack,Text,Input,Button,Flex, VStack,Stack,Heading,Link} from '@chakra-ui/react'
import {ArrowRightIcon} from '@chakra-ui/icons'
import footer from './Styles/Footer.module.css'

function Footer(){

    return (
        <Box w='100%' marginTop='40px'>
        <HStack  bg='#EBEDF3' h='100px' padding='30px'>
            <Flex width='70%' margin='auto' justify='center'>
                <Text marginTop='12px' fontSize='xs'>We will keep you posted on new products and great offers</Text>
                <Box width='50%'>
                <Input bg='white' errorBorderColor='red.300' size='md' borderRadius='0px' placeholder='Email Address' w='80%'/>
                <Button mt='-2' size='md' bg='black' borderRadius='0px'  _hover={{ bg: 'black' }}><ArrowRightIcon  color='white' /></Button>
                </Box>
            </Flex>
        </HStack>

        <Box  marginTop='50px' textAlign='start' padding='20px'>
            <Flex justify='space-evenly' id={footer.textallign} >
                <Stack w='17%' >
                    <Heading size='sm'>HELP</Heading>
                    <Stack >
                        <Text fontSize='xs'>FAQS</Text>
                        <Text fontSize='xs'>SHIPPING</Text>
                        <Text fontSize='xs'>RETURNS</Text>
                        <Text fontSize='xs'>SIZE GUIDES</Text>
                        <Text fontSize='xs'>SHIRT MULTIBUY</Text>
                        <Text fontSize='xs'>FIND A STORE</Text>
                        <Text fontSize='xs'>CONTACT US</Text>
                        <Text fontSize='xs'>WHERE IS MY ORDER</Text>
                    </Stack>
                </Stack>

                <Stack  width='20%' >
                    <Heading size='sm'>MORE INFO</Heading>
                    <Stack>
                        <Text  fontSize='xs'>ABOUT US</Text>
                        <Text fontSize='xs'>CUSTOM SHIRTS</Text>
                        <Text fontSize='xs'>GIFT VOUCHERS</Text>
                        <Text fontSize='xs'>WHOLESALE PARTNERSHIPS</Text>
                        <Text fontSize='xs'>COUPON CODES</Text>
                        <Text fontSize='xs'>REQUEST A CATALOGUE</Text>
                        <Text fontSize='xs'>DOING THINGS PROPERLY</Text>
                    </Stack>
                </Stack>

                <Stack  width='25%'>
                    <Heading size='sm'>LEGAL</Heading>
                    <Stack>
                        <Text fontSize='xs'>TERMS AND CONDITIONS</Text>
                        <Text fontSize='xs'>PRIVACY POLICY</Text>
                        <Text fontSize='xs'>OUR COOKIE POLICY</Text>
                        <Text fontSize='xs'>ACCESSIBILITY STATEMENT</Text>
                        <Text fontSize='xs'>ETHICAL TRADING POLICY</Text>
                        <Text fontSize='xs'>MODERN SLAVERY STATEMENT</Text>
                        <Text fontSize='xs'>INCLUSIVE WORKING STATEMENT</Text>
                        <Text fontSize='xs'>MY PERSONAL INFORMATION</Text>
                    </Stack>
                </Stack>

                <Stack width='25%'>
                    <Heading size='sm'>CAREERS</Heading>
                    <Stack>
                        <Text fontSize='xs'>UK VACANCIES</Text>
                        <Text fontSize='xs'>US VACANCIES</Text>
                        <Text fontSize='xs'>OUR BELIEFS</Text>
                        <Text fontSize='xs'>OUR BENEFITS</Text>
                        <Text fontSize='xs'>OUR PEOPLE</Text>\
                        <HStack spacing='10px'>
                            <img width='7%'  src='https://cdn-icons-png.flaticon.com/512/3128/3128208.png' />
                            <img width='7%'  src='https://cdn-icons-png.flaticon.com/512/1077/1077042.png' />
                            <a target='_blank'
                            href='https://www.linkedin.com/in/sumat-mallick-65b966227/'> <img width='10%'  src='https://cdn-icons-png.flaticon.com/512/3128/3128212.png'  alt='Sumat'/></a>

                        </HStack>
                    </Stack>
                </Stack>
            </Flex>
        </Box>

        <Box marginBottom='80px'>
            <HStack width='70%' m='auto' h='100px' letterSpacing='2px' borderTop='1px solid gray'>
                <Box width='50%'  spacing='10px'>
                    <Text fontSize='xs' as='sup'>© 2022 Charles Tyrwhitt Shirts Ltd.</Text>
                    <Text fontSize='sm'>USDDEFAULT</Text>
                </Box>
                <Box  width='50%'>
                <Text fontSize='xs' as='sup'>All products are imported into the US.</Text>
                    <Text fontSize='sm'>CHANGE COUNTRY ›</Text>
                    </Box>
            </HStack>
        </Box>

        </Box>
    )
}


export default Footer;