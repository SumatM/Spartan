import { Heading,Box, Button, Center,Flex } from "@chakra-ui/react"
import Video from "./Video"
import styles from './../../Module/Home.module.css'
import CarouselSlider from "./CarouselSlider"

export default function Home(){
 

    return(
        <Box >
 {/* ------------video Components------------ */}
        <Box>
        <Video/>
        </Box>
   {/* ------------CarouselSlider Components------------ */}     
        <Box>
        <CarouselSlider/>
        </Box>
{/* ------------3rd part ------------ */}
        <Box>
          <img src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw73d084aa/merchAssets/SS23/Homepage/hp/henley-hp2-desktop.jpg'/>
        </Box>

        <Flex justify='space-between'>
          <img width='48%' height='100%' src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw457fbf0b/merchAssets/SS23/Homepage/wide-banner/hp1-editorial-ny-yets.jpg'/>
          <img width='48%' src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw63cc6f39/merchAssets/SS23/Homepage/wide-banner/hp1-editorial-icons.jpg" />
        </Flex>
        
        </Box>
    )
}