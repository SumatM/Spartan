import { Stack,Skeleton,Heading,Box,Flex,Spinner, Grid} from "@chakra-ui/react"
import LoadingCard from "./LoadingCard"

export default function Loading({perpageitem}){
   // console.log(perpageitem)
    let totalErrorCards = new Array((+perpageitem)).fill(1)

    return (
    <Stack >
    <Box width='80%' margin='auto'>
    <Heading size='xl' margin='25px'>Loading...</Heading>
        <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={4}>
        {totalErrorCards.map((item,ind)=>{
            //console.log(item)
            return <LoadingCard  key={ind}/>
        })}
        </Grid>
    </Box>
        
      </Stack>)
}