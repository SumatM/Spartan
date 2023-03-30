import { Heading,Box, Button, Center,Flex,Text, VStack } from "@chakra-ui/react"
import Video from "./Video"
import styles from './../../Styles/Home.module.css'
import CarouselSlider from "./CarouselSlider"
import Footer from "../../Footer"

export default function Home(){

  let images = ['https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw3afa10eb/merchAssets/SS23/Homepage/hero-carousel/hc-025.jpg','https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw1c66575d/merchAssets/SS23/Homepage/hero-carousel/hc-039.jpg','https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw547fa107/merchAssets/SS23/Homepage/hero-carousel/hc-030.jpg','https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwda90996e/merchAssets/SS23/Homepage/hero-carousel/hc-038.jpg','https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw6ab5c75a/merchAssets/SS23/Homepage/hero-carousel/hc-037.jpg','https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw96f37b5f/merchAssets/SS23/Homepage/hero-carousel/hc-027.jpg',]
 

    return(
        <Box marginTop='65px' >
 {/* ------------video Components------------ */}
        <Box>
        <Video/>
        </Box>
   {/* ------------CarouselSlider Components------------ */}     
        <Box>
        <CarouselSlider width="100%" images={images}/>
        </Box>
{/* ------------3rd part ------------ */}
        <Box marginBottom="30px" position='relative'>
          <img width='100%'  src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw73d084aa/merchAssets/SS23/Homepage/hp/henley-hp2-desktop.jpg'/>
          
          <Box className={styles.box3Banner}>
          <Heading color=' #CEB45C' size="xl">New</Heading>
          <br/>
            <Heading  size='md'>Meet the Henley Weave,
            our shirt of the season.</Heading> 
            <br/>
            <Text>You won’t find this dobby weave anywhere else. The cutaway collar has a modern feel <br/> for formal and relaxed looks, and natural stretch from 100% cotton keeps things comfy.</Text> 
            <br/>
            <Text>This non-iron hero comes in 10 designs and 3 fits.<br/>
            Pick from checks, fresh pastels and classic blues.</Text>
          </Box>
          <Button  id={styles.box3Button}>SHOP THE COLLECTION</Button>
        </Box>
  
  {/* ------------4rd part ------------ */}

        <Flex width="100%" mb='100px' justify='space-between' marginBottom="30px">
          <Box width='48%'>
          <img  height='100%' src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw457fbf0b/merchAssets/SS23/Homepage/wide-banner/hp1-editorial-ny-yets.jpg'/>
          <VStack className={styles.box3part2Vstack}>
          <Heading size='md'>New York Jets Offical Partner</Heading>
          <Text>Two iconic cities, two buzzworthy brands,<br/> one very exciting partnership.</Text>
          <Button id={styles.box3part2Vstack_Button}>LEARN MORE</Button>
          </VStack>
          </Box>
          <Box width='48%'>
          <img  src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw63cc6f39/merchAssets/SS23/Homepage/wide-banner/hp1-editorial-icons.jpg" />
          <VStack className={styles.box3part2Vstack}>
          <Heading size='md'>Tyrwhitt Icons</Heading>
          <Text>The Collection that every man should own. <br/> Timeless, versatile pieces designed to slot into your wardrobe with ease.</Text>
          <Button id={styles.box3part2Vstack_Button}>SHOP NOW</Button>
          </VStack>
          </Box>
        </Flex>

  {/* ------------5rd part ------------ */}

        <Flex width="100%" mb='100px' justify='space-between' marginBottom="30px">
          <Box width='48%'>
          <img  height='100%' src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw405e0d53/merchAssets/SS23/Homepage/wide-banner/hp6-spring-desktop.jpg'/>
          <VStack className={styles.box3part2Vstack}>
          <Heading size='md'>Seasonal Looks</Heading>
          <Text>Discover the latest seasonal looks, wheter you're dressing for the commute, <br/>
          a work trip or weekend away. Stay comfy in style.</Text>
          <Button id={styles.box3part2Vstack_Button}>SHOP NOW</Button>
          </VStack>
          </Box>
          <Box width='48%'>
          <img  src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwaaf522b0/merchAssets/SS23/Homepage/wide-banner/hp1-editorial-04-desktop.jpg" />
          <VStack className={styles.box3part2Vstack}>
          <Heading size='md'>Tyrwhitt Icons</Heading>
          <Text>Meet unique leaders and explore style hints and tips through <br/> Nick Wheeler's interviews in A Tailored life.</Text>
          <Button id={styles.box3part2Vstack_Button}>EXPLORE MORE</Button>
          </VStack>
          </Box>
        </Flex>

  {/* ------------6rd part rateing ------------ */}

      <Box bg="#F5F5F5"  >
      <Box borderBottom='1px solid rgb(113, 111, 111)'  width="100%" margin='auto'>
        <Center mb="20px" padding='20px'>
          <span>Average Customer Rating: ⭐⭐⭐⭐⭐ <Heading display='inline' size="md">4.7</Heading>/5</span>
        </Center>
      </Box>
      <Flex justify='space-between' width="100%">
      <Flex>
        <Box className={styles.rating}>
          <Text>⭐⭐⭐⭐⭐</Text>
          <Heading size="sm">"Excellent customer care"</Heading>
          <Text>Good products, excellent service. Twice I had problems with delivery, both times their Customer Serv...</Text>
          <Text as="i" fontSize='xs'>Trusted Customer Wednesday,29 March 2023</Text>
        </Box>
      </Flex>
      <Flex>
        <Box className={styles.rating}>
          <Text>⭐⭐⭐⭐⭐</Text>
          <Heading size="sm">"Good products,excellent se..."</Heading>
          <Text>Good products, excellent service. Twice I had problems with delivery, both times their Customer Serv...</Text>
          <Text as="i" fontSize='xs'>Trusted Customer Wednesday,29 March 2023</Text>
        </Box>
      </Flex>
      <Flex>
        <Box className={styles.rating}>
          <Text>⭐⭐⭐⭐⭐</Text>
          <Heading size="sm">"Good Shirts"</Heading>
          <Text>Good products, excellent service. Twice I had problems with delivery, both times their Customer Serv...</Text>
          <Text as="i" fontSize='xs'>Trusted Customer Wednesday,29 March 2023</Text>
        </Box>
      </Flex>
      </Flex>

      </Box>

  {/* ------------7th part personalised shirt ------------ */}


        <Box mt="50px" position='relative'>
          <img width='100%'  src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw5f179d60/merchAssets/AW22/Homepage/wide-banner/custom-hp2-desktop01.jpg'/>
          
          <Box className={styles.box3Banner}>
          <Heading size="xl">PERSONALISED SHIRT DESIGNS</Heading>
          <br/>
            <Heading  size='md'>WITH OUR CUSTOM SHIRT RANGE</Heading> 
            <br/>
            <Text>Our new Custom Shirt tool is here! Get creative as you pick your fabric,<br/> collar, cuffs and all the details that make it one-of-a-kind, then get it fitted <br/> to your measurements.</Text> 
            <br/>
            <Heading color=' #CEB45C' size="md">From just $119. Buy 2, Save 10%.</Heading>
          </Box>
          <Button  id={styles.box3Button1}>START DESIGNING</Button>
          <Button  id={styles.box3Button2}>FIND OUT MORE</Button>
        </Box>
  {/* ------------8th carbon netral ------------ */}

      <Flex mt='30px' bg="#F5F5F5">
        <Flex className={styles.carbonNutral}>
        <VStack>
        <img width='20%' src="https://www.planetmark.com/wp-content/uploads/2021/06/Planet_Mark_Logo.png"/>
        <Heading  padding='15px' size='sm'>CARBON NEUTRAL</Heading>
        <Text fontSize='xs'>We are proud to be Carbon Neutral with Planet Mark</Text>
        </VStack>
        </Flex>
        <Flex className={styles.carbonNutral}>
        <VStack >
        <img width='20%' mt="25px" src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png"/>
        <Heading  padding='15px'  size='sm'>SECURE DELIVERY WITH PREMIUM SHIPPING</Heading>
        <Text fontSize='xs'>We are proud to be Carbon Neutral with Planet Mark</Text>
        </VStack>
        </Flex>
        <Flex className={styles.carbonNutral}>
        <VStack>
        <img width='20%' src="https://icons.veryicon.com/png/o/business/sunshine/lock-74.png"/>
        <Heading   padding='15px' size='sm'>SAFE AND EASY PAYMENT</Heading>
        <Text fontSize='xs'>We are proud to be Carbon Neutral with Planet Mark</Text>
        </VStack>
        </Flex>
        <Flex className={styles.carbonNutral}>
        <VStack>
        <img width='20%' src="https://cdn-icons-png.flaticon.com/512/3163/3163274.png"/>
        <Heading  padding='15px' size='sm'>6 MONTH RETURNS</Heading>
        <Text fontSize='xs'>We are proud to be Carbon Neutral with Planet Mark</Text>
        </VStack>
        </Flex>
      </Flex>

  {/* ------------9th personal appoint ------------ */}

      <Flex bg="#F5F5F5" mt='50px' id={styles.personal} >
      <Box width='50%' padding='50px'>
        <img src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw4b7530c7/merchAssets/SS22/Homepage/wide-banner/hp6-store-desktop.jpg" />
      </Box>
      <Flex width='50%' alignItems='center' padding='50px'>
      <VStack width='70%' margin='auto'>
        <Heading size='md'>Explore our stores with an
          experience catered to you</Heading>
          <Button width='100%' borderRadius='0px' bg='black' color='white' padding='15px' margin='15px' boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" _hover={{ bg: '#311B92'  }} >PERSONAL APPOINTMENTS</Button>
      </VStack>
      </Flex>

      </Flex>

      <Footer/>

        

        </Box>

    )
}