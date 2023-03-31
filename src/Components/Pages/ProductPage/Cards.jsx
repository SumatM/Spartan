import { Box, Heading, VStack,Grid } from "@chakra-ui/react"

function Cards({id,img,color,varient1,varient2,varient3,title,price,discount,category}){

    return (
        <Box>
            <VStack border='1px solid black' p='10px' textAlign='start'>
            <img width='100%' src={img} alt={`${title}`} />
            <Heading h='35px'  size='xs'>{title.substring(0,35)+"..."}</Heading>
            </VStack>
        </Box>
    )

}

export default Cards 