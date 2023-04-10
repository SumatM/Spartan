import {Box, Center, HStack,Text,Input,Button,Flex, VStack,Stack,Heading,Link,Select} from '@chakra-ui/react'
import {ArrowRightIcon,TriangleDownIcon} from '@chakra-ui/icons'
import footer from './Styles/Footer.module.css'

function Footer(){

    return (
        <Box w='100%' marginTop='40px'>
        <HStack  bg='#EBEDF3'  padding='30px'>
            <Flex  width={{base:'90%',sm:'90%',md:'80%'}}  margin='auto' flexDirection={{base:'column',sm:'column',md:'row'}} justify='space-between'>
                <Box >
                <Text marginTop='12px' fontSize='xs'>We will keep you posted on new products and great offers</Text>
                </Box>
                <Box mt={{base:'15px',sm:'20px',md:'0px'}} width={{base:'100%',sm:'100%',md:'50%'}}>
                <Input bg='white' errorBorderColor='red.300' size='md' borderRadius='0px' placeholder='Email Address' w='80%'/>
                <Button mt='-1' size='md' h='39px' bg='black' borderRadius='0px'  _hover={{ bg: 'black' }}><ArrowRightIcon  color='white' /></Button>
                </Box>
            </Flex>
        </HStack>

        <Box display={{base:'none',sm:"none",md:'block'}}  marginTop='50px' textAlign='start' padding='20px'>
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

{/*---- will become acitve when small and base screen size will get acitve----------- */}
        <Box display={{base:'block',sm:"block",md:'none'}} m='15px 0px' >
            <Box borderTop='1px solid gray'>
            <Select icon={<TriangleDownIcon/>} fontWeight= "700" letterSpacing='0.7px'  placeholder='HELP' borderRadius='0px'>
            <option >FAQS</option>
            <option >SHIPPING</option>
            <option >RETURNS</option>
            <option >SIZE GUIDES</option>
            <option >SHIRT MULTIBUY</option>
            <option >FIND A STORE</option>
            <option >CONTACT US</option>
            <option >WHERE IS MY ORDER?</option>
            </Select>
            </Box>

            <Box borderTop='1px solid gray'>
            <Select icon={<TriangleDownIcon/>} fontWeight= "700" letterSpacing='0.7px'  placeholder='LEGAL' borderRadius='0px' >
            <option >TERMS AND CONDITIONS</option>
            <option >PRIVACY POLICY</option>
            <option >OUR COOKIE POLICY</option>
            <option >ACCESSIBILITY STATEMENT</option>
            <option >ETHICAL TRADING POLICY</option>
            <option >MODERN SLAVERY STATEMENT</option>
            <option >INCLUSIVE WORKING STATEMENT</option>
            <option >MY PERSONAL INFORMATION</option>
            </Select>
            </Box>

            <Box borderTop='1px solid gray'>
            <Select icon={<TriangleDownIcon/>} fontWeight= "700" letterSpacing='0.7px'  placeholder='MORE INFO' borderRadius='0px' >
            <option >TERMS AND CONDITIONS</option>
            <option >PRIVACY POLICY</option>
            <option >OUR COOKIE POLICY</option>
            <option >ACCESSIBILITY STATEMENT</option>
            <option >ETHICAL TRADING POLICY</option>
            <option >MODERN SLAVERY STATEMENT</option>
            <option >INCLUSIVE WORKING STATEMENT</option>
            <option >MY PERSONAL INFORMATION</option>
            </Select>
            </Box>

            <Box borderTop='1px solid gray'>
            <Select icon={<TriangleDownIcon/>} fontWeight= "700" letterSpacing='0.7px'  placeholder='CAREERS' borderRadius='0px' >
            <option >TERMS AND CONDITIONS</option>
            <option >PRIVACY POLICY</option>
            <option >OUR COOKIE POLICY</option>
            <option >ACCESSIBILITY STATEMENT</option>
            <option >ETHICAL TRADING POLICY</option>
            <option >MODERN SLAVERY STATEMENT</option>
            <option >INCLUSIVE WORKING STATEMENT</option>
            <option >MY PERSONAL INFORMATION</option>
            </Select>
            </Box>

            <Box  pt='10px' borderTop='1px solid gray'>
            <Flex p='15px'>
                <Box w='5%'><img src="https://cdn-icons-png.flaticon.com/512/2111/2111392.png"/></Box>
                <Box ml='25px' w='5%'><img  src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"/></Box>
                <Box ml='25px' w='6%'><img  src="https://cdn-icons-png.flaticon.com/512/3128/3128212.png"/></Box>
            </Flex>
            </Box>
        </Box>



        <Box marginBottom='80px' mt='25px'>
            <HStack width={{base:'80%',sm:'70%'}} m='auto' h='100px' letterSpacing='2px' borderTop='1px solid gray'>
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