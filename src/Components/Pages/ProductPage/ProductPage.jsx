import {Box,Heading} from '@chakra-ui/react'

export default function ProductPage({page}){

    return(
        <Box marginTop='65px'>
            <Heading>{page}</Heading>
        </Box>
    )
}