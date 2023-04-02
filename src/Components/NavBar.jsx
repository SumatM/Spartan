import { Box, Flex, Menu, MenuButton, MenuList, MenuItem,Center,Text, HStack, Divider,Spacer,Input, IconButton  } from "@chakra-ui/react";
import {Link, useNavigate} from 'react-router-dom'
import logo from './../Logo/logo-no-background.svg'
import {SearchIcon} from '@chakra-ui/icons'

import styles from './Styles/NavBar.module.css'
import { useContext,useState } from "react";
import { AuthConetextProvider } from "./AuthContext/AuthContext";


const NavBar = () => {

  const [search,setSearchData] = useState('')

  let navigate = useNavigate()


  // handle Search function;


  const handleSearch = (e) =>{
    setSearchData(e.target.value)
  }

  const handleSearchButton = (e)=>{
    
    navigate('/search')
    //console.log(search)
    handlesetSearchfunction(search)
    setSearchData('')
  }

  const {handlesetSearchfunction,searchdata} = useContext(AuthConetextProvider)




  return (
    <Box  h='90px' paddingTop='20px' marginBottom='0px' >
    <HStack spacing="0"  m='0'>
    
    {/*---- box1 for location and login ----*/}

    <Box width="30%"  h="70px" marginTop="30px">
    <HStack>
    <Link to='#'>
    <Flex>
    <Spacer/>
    <img  className={styles.leftIcon} id={styles.location}  src="https://cdn-icons-png.flaticon.com/512/927/927667.png"/>
    </Flex>
    </Link>
    
   <Link to='/login'>
   <Flex>
   <img   className={styles.leftIcon} src="https://cdn-icons-png.flaticon.com/512/2354/2354573.png"/>
   <Spacer/>
   </Flex>
    
    </Link>
    </HStack>
    </Box>

        {/*---- box1 for logo ----*/}


    <Box  width="50%" h="70px">
    <Center margin='auto' width='60%'>
    <Link to='/'><img width='90%' src={logo}/></Link>
    </Center>
    </Box>

        {/*---- box1 for Search ----*/}


    <Box width="30%" p='20px' >
    <Input onChange={handleSearch}  bg="#EBEDF3" variant='outline' value={search} placeholder='Search' size="md" w="60%" m="0" marginTop="15px" borderRadius="5px 0 0 5px"/>
    <IconButton onClick={handleSearchButton} m="0" bg="#EBEDF3" aria-label='Search database' marginTop="-5px" borderRadius="0 5px 5px 0" icon={<SearchIcon />} />
    </Box>
    <Box width="5%">
        <Link to=''><img className={styles.bag} src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png"/></Link>
    </Box>
    </HStack>
    <Flex  h='40px' bg="#EBEDF3" justifyContent="center" id={styles.fixedNav}>
        <Flex alignItems="center" justifyContent="space-between" id={styles.navbarborder} width='70%'>
          <Link to='/shirt'><Text >SHIRTS</Text></Link>
         <Link to='/suit'> <Text>SUITS</Text></Link>
          <Link to='/pant'> <Text>PANTS</Text></Link>
          <Link to='#'> <Text>SWEATERS</Text></Link>
          <Text>JACKETS & COATS</Text>
         <Link to='/shoe'> <Text >SHOES</Text></Link>
         <Text>ACCESSORIES</Text>
        </Flex>
      </Flex> 
    </Box>
  );
};

export default NavBar;

