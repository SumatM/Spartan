import { Heading,Box, Flex, Spacer,Text } from "@chakra-ui/layout";
import {Button, Select} from '@chakra-ui/react'
import {CloseIcon} from '@chakra-ui/icons'

function CartCard({id,img,color,varient1,varient2,varient3,title,price,discount,category}){

    console.log(id,price,title)

    return (
        <Box mb='30px' p='20px' borderBottom='1px solid gray' pd='40px'>
            <Flex margin='10px'>
            <Box>
            <Heading textAlign='start' size='sm' letterSpacing='1px' fontWeight='normal'>{title}</Heading>
            </Box>
            <Spacer/>
            <Box>
                <CloseIcon/>
            </Box>
        </Flex>
        {/* 2nd box */}
        <Flex >
            <Box w='40%'>
            <img src={img} width='60%'/>
            </Box>
            {/* 2nd part */}
            <Box w='60%'  mt='30px' pb='20px' borderBottom='1px solid gray'>
                <Flex>
                    <Box>
                        <Text fontSize='12px'>Classic,   15.5 collar size (inch), <br/>  34 sleeve length (inch),   Button cuff</Text>
                    </Box>
                    <Spacer/>
                    <Box fontWeight='bold' fontSize='12px'>${price}</Box>
                </Flex>
                <Flex mt='20px' pb='20px' borderBottom='1px solid gray'>
                    <Box>
                        <Text fontSize='12px'>Monogram<br/>
                        Upright script, Red, M, Cuff centre</Text>
                    </Box>
                    <Spacer/>
                    <Box fontWeight='bold' fontSize='12px'>+$15.95</Box>
                </Flex>
                <Box >
                <Flex>
                    <Box  w='20%'>
                    <img  width='50%' src='https://cdn-icons-png.flaticon.com/512/2549/2549594.png' alt='#'/>
                    </Box>
                    <Box>
                    <Text mt='15px'>Add a Gift Box ($4.95)</Text>
                    </Box>
                </Flex>
                <Button  mt='15px' bg='#C7CFDB' border='none' borderRadius='0px'><Text fontSize='xs' >Last sold 3 minutes ago</Text></Button>
                </Box>
            </Box>
        </Flex>
        <Flex justify='end'>
        <Box w='60%' mt='20px' >
                <Flex justify={"space-between"}>
                    <Box>
                        <Select borderRadius={0} w='120%' placeholder='1'>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        </Select>
                    </Box>
                    <Box>
                        <Text>
                            ${price+15.95}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
        </Box>
    )

}


export default CartCard;