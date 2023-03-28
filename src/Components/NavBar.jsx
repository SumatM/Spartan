import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem,Center,Text, HStack, Divider,Spacer,Input, IconButton  } from "@chakra-ui/react";
import logo from './../Logo/logo-no-background.svg'
import {SearchIcon} from '@chakra-ui/icons'

import styles from './Module/NavBar.module.css'


const NavBar = () => {
  return (
    <Box  h='90px' paddingTop='20px' marginBottom='40px' >
    <HStack spacing="0"  m='0'>
    
    {/*---- box1 for location and login ----*/}

    <Box width="30%"  h="70px" marginTop="30px">
    <HStack>
    <Link to='/location'>
    <Flex>
    <Spacer/>
    <img  className={styles.leftIcon} id={styles.location}  src="https://cdn-icons-png.flaticon.com/512/927/927667.png"/>
    </Flex>
    </Link>
    
   <Link>
   <Flex>
   <img   className={styles.leftIcon} src="https://cdn-icons-png.flaticon.com/512/2354/2354573.png"/>
   <Spacer/>
   </Flex>
    
    </Link>
    </HStack>
    </Box>

        {/*---- box1 for logo ----*/}


    <Box  width="40%" h="70px">
    <Center>
    <img width="50%" src={logo}/>
    </Center>
    </Box>

        {/*---- box1 for Search ----*/}


    <Box width="30%"  h="70px"  >
    <Input  bg="#EBEDF3" variant='outline' placeholder='Search' size="md" w="60%" m="0" marginTop="15px" borderRadius="5px 0 0 5px"/>
    <IconButton m="0" bg="#EBEDF3" aria-label='Search database' marginTop="-5px" borderRadius="0 5px 5px 0" icon={<SearchIcon />} />
    </Box>
    <Box width="5%">
        <Link><img className={styles.bag} src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png"/></Link>
    </Box>
    </HStack>
    <Flex  h='30px' bg="#EBEDF3" justifyContent="center">
        <Flex alignItems="center" justifyContent="space-between" width='60%'>
          <Link mr={4}>SHIRTS</Link>
          <Link mr={4}>SUITS</Link>
          <Menu>
            <MenuButton as={Link} mr={4}>
            PANTS
            </MenuButton>
            <MenuList>
              <MenuItem>PANTS </MenuItem>
              <MenuItem>PANTS </MenuItem>
              <MenuItem>PANTS </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Link} mr={4}>
            PANTS
            </MenuButton>
            <MenuList>
              <MenuItem>PANTS </MenuItem>
              <MenuItem>PANTS </MenuItem>
              <MenuItem>PANTS </MenuItem>
            </MenuList>
          </Menu>
          <Link mr={4}>SHOES</Link>
        </Flex>
      </Flex> 
    </Box>
  );
};

export default NavBar;



//  <Flex h={16} alignItems="center" justifyContent="space-between">
//         <Box>My Logo</Box>
//         <Flex alignItems="center">
//           <Link mr={4}>Home</Link>
//           <Link mr={4}>About</Link>
//           <Menu>
//             <MenuButton as={Link} mr={4}>
//               Services
//             </MenuButton>
//             <MenuList>
//               <MenuItem>Service 1</MenuItem>
//               <MenuItem>Service 2</MenuItem>
//               <MenuItem>Service 3</MenuItem>
//             </MenuList>
//           </Menu>
//           <Menu>
//             <MenuButton as={Link} mr={4}>
//               Products
//             </MenuButton>
//             <MenuList>
//               <MenuItem>Product 1</MenuItem>
//               <MenuItem>Product 2</MenuItem>
//               <MenuItem>Product 3</MenuItem>
//             </MenuList>
//           </Menu>
//           <Link mr={4}>Contact</Link>
//         </Flex>
//       </Flex> 
