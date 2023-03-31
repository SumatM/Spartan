import {Box,Heading, HStack, VStack,Text,Select,Flex,Grid,Checkbox,Stack,Input,CardFooter,Button, Center} from '@chakra-ui/react'
import {useState, useEffect, useReducer} from 'react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import pageinfo from './pageinfo';
import Footer from './../../Footer';
import { getPageData } from './../../../axios';
import Cards  from './Cards';
import Loading from '../../../Loading';
import Pagination from '../../../Pagination';
import {ArrowBackIcon,ArrowForwardIcon} from '@chakra-ui/icons'


let intialstate = {
    loading:false,
    error:false,
    apiKey:'',
    perpageitem:20,
    currPage:1,
    filter:[],
}


function reducerfun(state,action){
    console.log(state.filter);
    switch(action.type){
        case "loading" :{
            return {...state,loading:action.payload}
        }
        case "error" :{
            return {...state,error:action.payload}
        }
        case "apiKey" :{
            return {...state,apiKey:action.payload}
        }
        case "perpageitem" : {
            return {...state,perpageitem:action.payload}
        }case "currPage" : {
            return {...state,currPage:action.payload}
        }
        case "pagemovement" : {
            return {...state,currPage:state.currPage+action.payload}
        }
        case "pagemovement" : {
            return {...state,currPage:state.currPage+action.payload}
        }
        case "filteradd" :{
            return {...state,filter:[...state.filter,(action.payload)]}
        }
        case "filterremove" :{
            let filterremover = state.filter.filter((item)=>{
                return item!==action.payload
            })
            //console.log(filterremover)
            return {...state,filter:[...intialstate.filter,...filterremover]}
        }
        case "reset" :{
            return {...intialstate}
        }
        default:{
            return state
        }
    }
}       



export default function ProductPage({page}){

    const [flag,setflag] = useState("")
    
    
//-----------------------------------------------------------------
  
   let [apidata,setApidata] = useState([])
   let [totalitems,setTotalItems] = useState(0)
   let [maindata,dispatch] = useReducer(reducerfun,intialstate)
   let {loading,error,apiKey,perpageitem,currPage} =  maindata 
    let section = page[0].toUpperCase();

//---------------------------------------------
    let filterdiv = (pageinfo[page].filter)
    console.log(filterdiv)
//---------------------------------------------
//-------------------------------------------------------------------  

    for (let i=0; i<page.length; i++){
       if(i!==0){
        section+=page[i]
       }
    }

//---------------------------------------------------------------------
    useEffect(()=>{
        setflag(page)
    },[page])


    useEffect(()=>{
    dispatch({type:'loading',payload:true})

    if(flag!==page){
        console.log(flag,page);
       // dispatch({type:"currPage",payload:1})
        //dispatch({type:"perpageitem",payload:20})
        dispatch({type:'reset'})
    }

      getPageData({
      page:currPage,
      limit:perpageitem,
      pageType:[page],
      })
    .then((res)=>{

        let totalpagesrecieved = (res.headers.get('X-total-Count'))
        setApidata(res.data)
        setTotalItems(totalpagesrecieved)
       // console.log(totalpagesrecieved)
        dispatch({type:'loading',payload:false})

     })
     .catch(function(error){
        dispatch({type:'error',payload:true})
       // console.log(error)
     })
     
     
    },[page,perpageitem,currPage])

    // handleperpage item 

    function handleperpageitem(e){
         dispatch({type:'perpageitem',payload:e.target.value})
         dispatch({type:"currPage",payload:1})
    }

    // handle pagination buttons 

    function handlepaginationButton(val){
            dispatch({type:"currPage",payload:val})
    }

    function handlenextPreButton(val){
         dispatch({type:'pagemovement',payload:val})
    }

    function handlecheckbox(val,item,catageory){
       // console.log(val,item,catageory)
        if(val){
            dispatch({type:'filteradd',payload:item})
        }else{
            dispatch({type:'filterremove',payload:item})
        }
    }
   

    return(
        <Box width='97%' m='auto' marginTop='75px'>

        {/* // current page info */}

          <Box>
           <HStack padding='10px 0'><Heading size='xs'>Home {<ChevronRightIcon/>} {section}</Heading></HStack>
            <Box>
            <HStack>
                <Box width='50%' letterSpacing='0.8px'>
                    <Box  padding='35px' textAlign='start'>

                        <Text fontSize='2xl' fontFamily="Commuter Sans,Verdana"  fontWeight='bold'> {pageinfo[page]?.heading}</Text>

                        <Text  pt='10px' fontSize='xs'>{pageinfo[page]?.body}</Text>
                    </Box>
                </Box>
                <Box width='50%' >
                <img width='100%'  src={pageinfo[page]?.topbanner} alt='' />
                </Box>
            </HStack>
            </Box>

            <Flex justify='end' alignItems='center' padding='5px' mt='25px'  borderTop='1px solid gray' borderBottom='1px solid gray'>
            <Text marginRight='25px' fontSize='xs'>Showing 1 - {apidata.length}  of {totalitems}</Text>
            <Select marginRight='25px' w='9%' onChange={handleperpageitem} value={perpageitem}>
                <option value='20'>20</option>
                <option value='10'>10</option>
                <option value='30'>30</option>
                <option value='40'>40</option>
                </Select>
                <Select w='25%' placeholder='SORT BY' fontSize='13px'>
                <option value='recommended'>RECOMMENDED</option>
                <option value='asc'>PRICE (HIGHT TO LOW)</option>
                <option value='dec'>PRICE (LOW TO HIGH)</option>
                </Select>
            </Flex>

           </Box>

           {/* 2nd part products items  */}

           <Flex justify='space-between'>

        {/* left side coloum for filter */}

           <Box  width='17%'>
            <Box>
                <Box textAlign='start'>
                {/* {console.log(Object.keys(filterdiv[0]))} */}
                {filterdiv.map((elem,ind)=>{
                    return (
                        <Box mt='15px'mb='15px'>
                        <Heading size='sm'>{Object.keys(elem)}</Heading>
                        <Box key={elem} mt='10px' borderTop='1px solid gray'>
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
           <Box  width='84%' padding='25px'>
           {loading ? <Loading/> : 
            <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                {apidata.map((item)=>{
                    return (<Cards key={item.id} {...item}/>)
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