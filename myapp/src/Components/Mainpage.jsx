import React from 'react'
import {Box,Image,Text} from "@chakra-ui/react"
import Calendardata from './Calender'

export default function Mainpage() {
  return (
   <Box display="flex" justifyContent={"space-between"}>
    <Box w="70%">
        <Box border="1px solid red" w="80%" margin="auto">
            <Box display={"flex"} justifyContent={"space-between"}>
<Box><Text textAlign="center"mt="20px" fontWeight={[400,400,400,500,600]} fontSize={["15px","15px","16px","18px","20px"]}>Yoga at the Art Studio</Text>
<Text textAlign="center" color="gray.500" fontWeight={[200,200,300,300,400]} mt="30px">Tue,JUN 20, 2023 5:30PM - Tue,JUN 20, 2023 6:30PM</Text>
<Text textAlign="left" fontWeight={[400,400,400,500,700]} fontSize={["15px","15px","16px","18px","20px"]} mt="10px" >Yoga Tickets</Text>
<Text textAlign="left" fontWeight={[400,400,400,500,700]} fontSize={["15px","15px","16px","18px","20px"]} mt="10px">$25.00</Text>
<Text textAlign="left" color="gray.500" fontWeight={[200,200,300,300,500]} mt="10px" fontSize={["13px","13px","15px","15px","15px"]}>Sale end on JUN 20, 2023</Text>
</Box>
<Box>
 
</Box>






</Box>
    <Calendardata/>
        </Box>
    </Box>
    <Box border="1px solid red">

<Image w="50vw" h={["20vh","20vh","30vh","40vh","50vh"]} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6CNZgs_aetcpWNJJxF5di5x5t1WfMRMiLrQ&usqp=CAU"/>



    </Box>

   </Box>
    
  )
}
