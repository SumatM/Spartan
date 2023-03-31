import { Button, Heading,Text } from "@chakra-ui/react"

function Pagination({totalitems,perpageitem,handlepaginationButton,currPage}){

   // console.log(currPage);

    let pagenumber = Math.ceil(totalitems/perpageitem)

    let buttons = new Array(pagenumber).fill(0).map((ele,ind)=>{
        return (
            <Button disabled={currPage==ind+1} style={{ backgroundColor: currPage === ind+1 ? "black" : 'white',color:currPage === ind+1 ? "white" : 'black' }}  border='1px solid gray' size='sm' onClick={()=>{handlepaginationButton(ind+1)}} key={ind} borderRadius='0px'><Text fontSize='xs'>{ind+1}</Text></Button>
        )
    })
   

    return buttons

}

export default Pagination;