import React, { useState } from 'react';
import { IconButton, ThemeProvider, createTheme } from '@mui/material';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { LocalizationProvider, DateAdapter } from '@mui/lab';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import { DatePicker } from '@mui/lab';
import { subMonths, addMonths } from 'date-fns';
import { Box, Input } from '@chakra-ui/react';
import ResponsiveDatePickers from './makingcalender';
const theme=createTheme()
const commoncolor="gray.300"
const month=["January","February","March","April","May","June","July","August","September","October","November","December"]
const Calenderdata= ({ value, onChange }) => {
    const [inputvalue,setInputvalue]=useState(new Date())
  const [selectedDate, setSelectedDate] = useState(month[new Date().getMonth()]);
  const [changecount,setChangecount]=useState(new Date().getMonth())
  const [selectedyear,setSelectedyear]=useState(new Date().getFullYear())
const handlechange=(e)=>{
    
  setChangecount((pre)=>pre==11?pre=0:pre+e)
  setSelectedDate(month[changecount])

}
const handlechange2=(e)=>{
    setChangecount((pre)=>pre==0?pre=11:pre+e)
    setSelectedDate(month[changecount])
}
const handleyear=(e)=>{
    setSelectedyear(selectedyear+e)
}
const handleinputchange=(e)=>{
    
}
  return (
    <ThemeProvider theme={theme}>
        

        <Box mt="10px" display={["block","block","block","flex","flex"]} >
           
            <Box border={"1px solid gray"}  borderRadius="8px 8px 00px 00px" width={["100%","100%","100%","50%","50%"]}>
            <Box >
    <Input defaultValue={inputvalue} h="50px" type="date" w="100%"  borderRadius="8px 8px 00px 00px" onChange={handleinputchange} />
    <Box display={"flex"} justifyContent={"space-between"} >
<Box border="1px solid gray" display={"flex"} w="50%" >
<Box h="60px"  display={"flex"}  w="90%" justifyContent={"center"} alignItems={"center"}>{selectedDate}</Box>
<Box  > <Box>
 <Box><KeyboardArrowUp mb="0px" onClick={()=>handlechange2(-1)}  /> </Box><Box> <KeyboardArrowDown mt="0px" onClick={()=>handlechange(1)} /></Box>
       </Box>
       </Box>

</Box>
<Box>

</Box>
<Box w="50%" border="1px solid gray" display={"flex"}  >
<Box h="60px"  w="90%" display={"flex"}  justifyContent={"center"} alignItems={"center"}>{selectedyear}</Box>
<Box  > <Box>
 <Box ><KeyboardArrowUp mb="0px" onClick={()=>handleyear(-1)}  /> </Box><Box> <KeyboardArrowDown mt="0px" onClick={()=>handleyear(1)} /></Box>
       </Box>
       </Box>

</Box>
<Box>

</Box>

    </Box>
    {/* <div style={{ display: 'flex', alignItems: 'center',border:"1px solid gray",width:"50%"}}>
     <Box h="60px" border="1px solid gray" display={"flex"} alignItems={"center"}>{selectedDate}
     <Box  display="block">
     <Box >
       <Box > <KeyboardArrowUp mb="0px" onClick={()=>handlechange2(-1)} display="block"/>
       </Box>
       </Box>
     
<Box  >
        <KeyboardArrowDown mt="0px" onClick={()=>handlechange(1)} /></Box>
        </Box>
        <Box w="80%">{selectedyear}</Box>
     <Box w="200px">
       <Box > <KeyboardArrowUp mt="0px" onClick={()=>handleyear(-1)} display="block"/>
      
       </Box>
       </Box>
<Box>
        <KeyboardArrowDown mt="0px" onClick={()=>handleyear(1)} /></Box>
        </Box>
    

    </div> */}
    <ResponsiveDatePickers />
    </Box>
    
    
    
    </Box>
    <Box>
        Hii
    </Box></Box></ThemeProvider>
  );
};

export default Calenderdata;
