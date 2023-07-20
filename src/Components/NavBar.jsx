import { Box, Flex, Menu, MenuButton, MenuList, MenuItem,Center,Text, HStack, Divider,Spacer,Input, IconButton ,Drawer,useDisclosure,DrawerContent,DrawerOverlay,DrawerCloseButton,DrawerHeader,DrawerBody, Image} from "@chakra-ui/react";
import {Link, useNavigate} from 'react-router-dom'
import logo from './../Logo/logo-no-background.svg'
import {HamburgerIcon, SearchIcon} from '@chakra-ui/icons'
import {BiUser,BiUserPlus} from 'react-icons/bi';
import {TfiLocationPin} from 'react-icons/tfi'
import styles from './Styles/NavBar.module.css'
import { useContext,useRef,useState,useEffect } from "react";
import { AuthConetextProvider } from "./AuthContext/AuthContext";
import {RiUserReceivedLine} from 'react-icons/ri'
const NavBar = () => {

  const [search,setSearchdata] = useState('')
  let buttonRef = useRef();
  let navigate = useNavigate()
  
// drawer for small screen navbar
const { isOpen, onOpen, onClose } = useDisclosure()
const btnRef = useRef()

  const handleSearch = (e) =>{
    setSearchdata(e.target.value)
  }

  const handleSearchButton = (e)=>{
    navigate('/search')
    //console.log(search)
    handlesetSearchfunction(search)
    setSearchdata('')
  }
  const {handlesetSearchfunction,searchdata,handlelastPage,setSearchData} = useContext(AuthConetextProvider)

  function handlesmallScreenSearchIconClick(e){
   e.preventDefault()
    //console.log(buttonRef.current)
    buttonRef.current.focus();
  }

  function handleLogout(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user.name===null){
      alert('You are Logout Already')
    }else{
      alert(`${user.name} Thank you Visiting.`)
    }

    localStorage.setItem('auth',JSON.stringify({isAuth:false,userId:"",userId:""}))

    localStorage.setItem('user',JSON.stringify({
      name: "",
      email: "",
      password: "",
      cart: [],
      address: {},
      intrest: []
  }))
  setSearchData('')
  }

  useEffect(()=>{
    checkLoginTimeDiff()
  },[])



  return (
    <Box  position='sticky'top='0' zIndex='99'>
   <Box display={{base:'none',sm:'none',md:'block',lg:'block'}}  marginBottom='0px' w='100%'>
   <HStack spacing="0" bg='white' m='0'>
    
    {/*---- box1 for location and login ----*/}

    <Flex justify="space-around" w='30%'  h="70px" marginTop="30px">

    <Link to='#'>
    <Flex>
    <TfiLocationPin  size='28px'/>
    </Flex>
    </Link>
    
 
   <Link to='/login'>
   <Flex display={searchdata.isAuth ? 'none' : 'block'}>
   <BiUser  size='30px'/>
   </Flex>
   </Link>
   <Flex onClick={handleLogout} _hover={{cursor:'pointer'}} display={!searchdata.isAuth ? 'none' : 'block'}>
  <RiUserReceivedLine  size='30px'/>
   </Flex>
    </Flex>

        {/*---- box1 for logo ----*/}


    <Box  width="50%" >
    <Center margin='auto' width='60%'>
    <Link to='/'><img width='90%' src={logo}/></Link>
    </Center>
    </Box>

        {/*---- box1 for Search ----*/}

    <Box width="30%" p='20px' >
    <Input onChange={handleSearch} bg="#EBEDF3" variant='outline' value={search} placeholder='Search' size="md" w="60%" m="0" marginTop="15px" borderRadius="5px 0 0 5px"/>
    <IconButton onClick={handleSearchButton} m="0" bg="#EBEDF3" aria-label='Search database' marginTop="-5px" borderRadius="0 5px 5px 0" icon={<SearchIcon />} />
    </Box>
    <Box width="5%">
        <Link to='/cart'><img className={styles.bag} src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png"/></Link>
    </Box>
    </HStack>
    <Flex   bg="#EBEDF3" padding='20px' justifyContent="center" id={styles.fixedNav}>
        <Flex alignItems="center" justifyContent="space-between" id={styles.navbarborder} >
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
 {/*--------- responsive navbar for small screen ------------*/}
    <Box bg='white' pt='15px' display={{base:'block',sm:'block',md:'none'}} position='fixed' top='0' w='100%' style={{ zIndex: 999 }}>
      <Flex  w="97%" m="auto" justify="space-between">
      <Flex w='30%'>
      <Menu>
      <MenuButton border='1px solid gray'
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon onClick={onOpen}/>}
        variant='outline'
      /> 
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent pt='15px'>
          <DrawerCloseButton pt='15px'/>
          <DrawerHeader letterSpacing="2px" fontWeight="light" >
          <img width='40%' src={logo} />
          </DrawerHeader>

          <DrawerBody letterSpacing='1px'>
            <Box p='5px 0px' onClick={onClose}> <Link to='/shirt'><Text>SHIRTS</Text></Link></Box>
            <Box p='5px 0px' onClick={onClose}> <Link to='/pant'><Text>PANTS</Text></Link></Box>
            <Box p='5px 0px' onClick={onClose}> <Link to='/suit'><Text>SUITS</Text></Link></Box>
            <Box p='5px 0px' onClick={onClose}><Text>SWEATERS</Text></Box>
            <Box p='5px 0px' onClick={onClose}> <Text>JACKETS & COATS</Text>
            </Box>
            <Box p='5px 0px' onClick={onClose}> <Link to='/shoe'><Text>SHOES</Text></Link></Box>
            <br/>
            <Flex mt='2px' w='100%' bg='#E4E4E4' p='10px 4px'>
            <TfiLocationPin  size='20px'/>
            <Text fontSize='13px' ml='10px'>STORE FINDER</Text>
            </Flex>

            <Box display={searchdata.isAuth ? 'none' : 'block'}>
            <Flex mt='2px' w='100%' bg='#E4E4E4' p='10px 4px' >
   
            <BiUserPlus size='22px'/>
           <Link to='signup'> <Text onClick={onClose} fontSize='13px' ml='10px'>CREATE AN ACCOUNT</Text></Link>
            </Flex>
            </Box>

            <Box display={searchdata.isAuth ? 'none' : 'block'}>
            <Flex mt='2px' w='100%' bg='#E4E4E4' p='10px 4px'>
            <BiUser size='20px'/>
            <Link to='/login'><Text  display='inline' onClick={onClose} fontSize='13px' ml='10px'>LOG IN</Text></Link>
            </Flex>
            </Box>

            <Box display={!searchdata.isAuth ? 'none' : 'block'}>
            <Flex  onClick={handleLogout} mt='2px' w='100%' bg='#E4E4E4' p='10px 4px'>
            <RiUserReceivedLine size='20px'/>
           <Text display='inline' onClick={onClose} fontSize='13px' ml='10px'>LOG OUT</Text>
            </Flex>
            </Box>

            
          </DrawerBody>
            
        </DrawerContent>
      </Drawer>

    </Menu>
      <Text fontSize='13px' ml='25px' mt='10px' letterSpacing='1px'>MENU</Text>
      </Flex>
      <Box w='30%'  p='10px'>
     <Link to='/'> <img width='100%' src={logo}/></Link>
      </Box>

      <Flex w='30%'  justify="end"> 
      <Box><SearchIcon onClick={handlesmallScreenSearchIconClick}/></Box>
      <Box width="30%" ml='15px'>
        <Link to='/cart'><img width="40%" src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png"/></Link>
    </Box>
    </Flex>
      

      </Flex>
    <Box  m="auto" pt='5px' pb='8px' bg="#EBEDF3" mt='15px'>
    <Input onChange={handleSearch} ref={buttonRef} bg='white' border='0.5px solid gray'  variant='outline' value={search} placeholder='Search' size="md" w={{base:'85%'}} m="0" marginTop="5px" borderLeft='0px solid white' borderRadius="5px 0 0 5px"/>
    <IconButton onClick={handleSearchButton} m="0" bg='white' border='0.5px solid gray' br='none' aria-label='Search database' marginTop="-5px" borderRadius="0 5px 5px 0" icon={<SearchIcon />} />
    </Box>
    </Box>
    </Box>
  );
};

export default NavBar;

export function checkLoginTimeDiff() {
  const timediff =
    Date.now() - (localStorage.getItem("loginTime") || Date.now());
  let loginTime = timediff / 1000 / 60;
  if (loginTime > 30) {
    alert(
      "You are Logged out due to mock server API. Apologies for the inconvenience."
    );
    localStorage.setItem(
      "auth",
      JSON.stringify({ isAuth: false, userId: "", userId: "" })
    );
    localStorage.setItem("loginTime", null);
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "",
        email: "",
        password: "",
        cart: [],
        address: {},
        intrest: [],
      })
    );
  }
}