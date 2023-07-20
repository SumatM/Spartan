import {Box,Heading, HStack, VStack,Text,Select,Flex,Grid,Checkbox,Stack,Input,CardFooter,Button, Center,IconButton, Spacer,} from '@chakra-ui/react'
import {useState, useEffect, useReducer,useContext} from 'react'
import pageinfo from './pageinfo';
import Footer from './../../Footer';
import { getPageData } from './../../../axios';
import Cards  from './Cards';
import Loading from '../../../Loading';
import Pagination from '../../../Pagination';
import {ArrowBackIcon,ArrowForwardIcon,ChevronRightIcon,SearchIcon} from '@chakra-ui/icons'
import reducerfun from './reducer.js'
import {intialstate} from './reducer.js'
import {AuthConetextProvider} from './../../AuthContext/AuthContext'
import { useNavigate,useSearchParams} from 'react-router-dom';

let globaData = [];

export default function ProductPage({page}){

    const [flag,setflag] = useState("")

    // useing values from authcontext provider
    
    const {handlesetSearchfunction,searchdata} = useContext(AuthConetextProvider)

    let searchInput = (searchdata.searchInput)

//-----------------------------------------------------------------
  
   let [apidata,setApidata] = useState([])
   let [totalitems,setTotalItems] = useState(0)
   let [maindata,dispatch] = useReducer(reducerfun,intialstate)
   let {loading,error,apiKey,perpageitem,currPage,order} =  maindata 
    let section = page[0].toUpperCase();
    
//---------------------------------------------
    let filterdiv = (pageinfo[page].filter)
    //console.log(filterdiv)
//---------------------------------------------

const [search,setSearchData] = useState('')

let navigate = useNavigate()

//-------------------------------------------------------------------  

const [searchParm,setSearchParam] = useSearchParams();


//-------------------------------------------------------------------

    for (let i=0; i<page.length; i++){
       if(i!==0){
        section+=page[i]
       }
    }

    if(page=='product'){
        section = 'Search'
    }

//---------------------------------------------------------------------
    useEffect(()=>{
        setflag(page)
        if(page!=='product'&& searchInput!==''){
            handlesetSearchfunction('')
        }
        document.title = `Men's ${section} | Spartan`

    },[page])

// will come in effect when user has change the page no. and searched for new query 

    useEffect(()=>{
        if(page=='product' ){
            dispatch({type:'currPage', payload:1})
           }    
    },[searchInput])


        // handle filter 

        let initalColor = searchParm.getAll('color')


        const [colors,setcolor] = useState( initalColor ||  [])
    
    
        
    
        function handlecheckbox(val,type,catageory){
          // console.log(val,type,catageory)
           type = type.toLowerCase()
           
           if(catageory=='COLOR'){
             if(colors.includes(type)){
                let filter = colors.filter((item)=> item!==type)
                setcolor(filter)
             }else{
                setcolor([...colors,type])
             }
           }
        }

        useEffect(()=>{
           
            setSearchParam({
                colors
            })
        },[colors])
        


// receiving promise from axios 


    useEffect(()=>{
    
    if(flag!==page){
        //console.log(flag,page);
       // dispatch({type:"currPage",payload:1})
        //dispatch({type:"perpageitem",payload:20})
        dispatch({type:'reset'})
    }

    dispatch({type:'loading',payload:true})
      getPageData({
      page:currPage,
      limit:perpageitem,
      pageType:page,
       sort:'price',
     order:order,
      q:searchInput,
      colors
      })
    .then((res)=>{
        //console.log(res.data);
        let totalpagesrecieved = (res.headers.get('X-total-Count'))
        setApidata(res.data)
        globaData = res.data
        setTotalItems(totalpagesrecieved)
       // console.log(totalpagesrecieved)
        dispatch({type:'loading',payload:false})

     })
     .catch(function(error){
        dispatch({type:'error',payload:true})
        console.log(error)
     })
     document.documentElement.scrollTop = 0;
     
    },[page,perpageitem,currPage,order,searchInput,colors])

    // handleperpage item 

    function handleperpageitem(e){
         dispatch({type:'perpageitem',payload:e.target.value})
         dispatch({type:"currPage",payload:1})
    }

    // handle pagination buttons 

    function handlepaginationButton(val){
            dispatch({type:"currPage",payload:val})
    }

    // handleNext and Pre Buttons

    function handlenextPreButton(val){
         dispatch({type:'pagemovement',payload:val})
    }




   

    

    // handle sorting;
   
    function handlesorting(e){
       // console.log(e.target.value);
        dispatch({type:'order',payload:e.target.value})
    }

    const handleSearch = (e) =>{
        setSearchData(e.target.value)
      }
    
      const handleSearchButton = (e)=>{
        
        navigate('/search')
        //console.log(search)
        handlesetSearchfunction(search)
        setSearchData('')
      }


    return(
        <Box width="97%" m='auto' marginTop={{base:'145px',sm:'150px',md:'20px'}}>

        {/* // current page info */}

          <Box width={{base:"100%",sm:'100%',md:"100%"}}>
           <HStack  padding='10px 0'><Heading size='xs'>Home {<ChevronRightIcon/>} {section}</Heading></HStack>
          {page=='product' ? null :   <Box>
            <Flex justify='space-around' mt='15px' flexDirection={{base:'column',sm:'column',md:'column',lg:'row'}}>
                <Box width={{base:'90%',sm:'90%' ,md:'90%',lg:'40%' } } m='auto' letterSpacing='0.8px'>
                    <Box  padding='30px' textAlign='start'>

                        <Text fontSize='2xl' fontFamily="Commuter Sans,Verdana"  fontWeight='bold'> {pageinfo[page]?.heading}</Text>

                        <Text  pt='10px' fontSize='xs'>{pageinfo[page]?.body}</Text>
                    </Box>
                </Box>
                <Box width={{base:'90%',sm:'90%' ,md:'90%',lg:'40%' } } m='auto' mt='25px' >
                <img width='100%'  src={pageinfo[page]?.topbanner} alt='' />
                </Box>
            </Flex>
            </Box>}

            <Flex  justify='end' alignItems='center' padding='9px' mt='25px'  borderTop='1px solid gray' borderBottom='1px solid gray'>
            <Text marginRight='25px' fontSize='xs'>Showing 1 - {apidata.length}  of {totalitems}</Text>
            <Select border='1px solid gray' marginRight='25px'  w={{base:'18%',sm:'13%',md:'9%'}} onChange={handleperpageitem} value={perpageitem}>
                <option value='20'>20</option>
                <option value='10'>10</option>
                <option value='30'>30</option>
                <option value='40'>40</option>
                </Select>
                <Select  w={{base:'27%',sm:'30%',md:'25%'}} border='1px solid gray' placeholder='SORT BY' fontSize='13px' onChange={handlesorting} value={order}>
                <option value='recommended'>RECOMMENDED</option>
                <option value='desc'>PRICE (HIGHT TO LOW)</option>
                <option value='asc'>PRICE (LOW TO HIGH)</option>
                </Select>
            </Flex>

           </Box>

           {/* 2nd part products items  */}

           <Flex justify='space-between'>

        {/* left side coloum for filter */}

           <Box width='17%' display={{base:'none',sm:"none",md:'block'}}>
            <Box >
                <Box textAlign='start'>
                {/* {console.log(Object.keys(filterdiv[0]))} */}
                {filterdiv.map((elem,ind)=>{
                    return (
                        <Box mt='15px'mb='15px'>
                        <Heading size='sm'>{Object.keys(elem)}</Heading>
                        <Box key={elem} mt='10px' borderTop='1px solid gray' >
                            {elem[Object.keys(elem)].map((item)=>{
                                return <Box m='5px' key={item}>
                                <Checkbox onChange={(e)=>{handlecheckbox(e.target.checked,item,Object.keys(elem)[0])}} size='md' colorScheme='green'><Text fontSize='xs'>{item}</Text></Checkbox>
                                </Box>
                            })}
                        </Box>
                        </Box>
                    )
                })}
                </Box>
            </Box> 
           </Box>
           <Box  width={{base:"100%",sm:'100%',md:"100%"}} padding='25px'>
           {loading ? <Loading perpageitem={perpageitem}/> : (page=='product' && apidata.length==0) ? 
           <Box mt='30px' mb='100px'>
            <Text letterSpacing='1px' fontSize='2xl'>
            Sorry, we couldn't find any results matching <Heading size='lg' display='inline'>"{searchInput}"</Heading>
            </Text>
            <Box width="70%" p='20px' m='auto' mt='25px'>
                <Input p={2} onChange={handleSearch}  bg="#EBEDF3" variant='outline' value={search} placeholder='Search again' size="md" w="60%" m="0" marginTop="15px" borderRadius="5px 0 0 5px"/>
                <IconButton onClick={handleSearchButton} m="0" bg="#EBEDF3" aria-label='Search database' marginTop="-5px" borderRadius="0 5px 5px 0" icon={<SearchIcon />} />
                </Box>
           </Box> :
            <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={4}>
                {apidata.map((item)=>{
                    return (<Cards key={item.id} {...item} page={page}/>)
                })}
            </Grid>}
           </Box>
           </Flex>

            
            
            {/*----------------------------- pagination-------------------------  */}

            <Center marginTop='30px'>
            <Flex h='40px'  width='40%' justify='space-evenly'>
            <Button isDisabled={currPage==1} bg='white' border='1px solid gray' size='sm' borderRadius='0px' onClick={()=>{handlenextPreButton(-1)}}><ArrowBackIcon/></Button>

            {<Pagination  totalitems={totalitems} perpageitem={perpageitem} handlepaginationButton={handlepaginationButton} currPage={currPage}/>}
            <Button isDisabled={currPage===(Math.ceil(totalitems/perpageitem))} borderRadius='0px' border='1px solid gray' size='sm' onClick={()=>{handlenextPreButton(1)}}><ArrowForwardIcon/></Button>
            </Flex>
            </Center>

            {/* footer */}

            <Footer/>

        </Box>
    )
}