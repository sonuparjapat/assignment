import React, { useEffect, useState } from 'react';
import { IconButton, ThemeProvider, createTheme } from '@mui/material';
import dayjs from 'dayjs';


import { DemoItem } from '@mui/x-date-pickers/internals/demo';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';




import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { Box, Input, Text } from '@chakra-ui/react';

const theme=createTheme()
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const today = new Date();
const currentWeekName = weekdays[today.getDay()];
const currentMonthName = months[today.getMonth()];
const currentYear = today.getFullYear();


const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const currentDate = `${year}-${month}-${day}`;


// slots array
const slotsArray = [
  { slot: '9:00 AM', tickets: 5 },
  { slot: '9:30 AM', tickets: 5 },
  { slot: '10:00 AM', tickets: 5 },
  // ... and so on
  { slot: '5:00 PM', tickets: 5 }
];



const Calenderdata= ({ value, onChange }) => {
  const [maindate,setMaindate]=useState()
  const [calendervalue,setCalendervalue]=useState(dayjs(currentDate))
    // const [inputvalue,setInputvalue]=useState()

  const [changecount,setChangecount]=useState(new Date().getMonth())
  const [selectedyear,setSelectedyear]=useState(new Date().getFullYear())
const [date,setDate]=useState(maindate)




const handleinputchange=(e)=>{
console.log(e)
//  let inputvalue=e.target.value
// console.log(e)
let myvalue=e.$d

// let arr=myvalue.split()
let weekname=weekdays[e.$W]
let monthname=months[e.$M]
let year=e.$y
let newarr=[]
newarr.push(weekname,monthname,year)
setDate(newarr)


  e.target?setMaindate(e.target.value):setMaindate(`${e.$y}-${Number(e.$M)<10?`0${e.$M}`:e.$M}-${e.$D<10?`0${e.$D}`:e.$D}`)


}
console.log(date)
useEffect(()=>{

},[maindate])
console.log(maindate)
const handledate=()=>{

}


// tikets data (selecting tickets)

const [data, setData] = useState(slotsArray);
const [selectedSlot, setSelectedSlot] = useState(null);
const [selectedTickets, setSelectedTickets] = useState(0);

const handleTicketSelection = (slot, availableTickets) => {
  setSelectedSlot(slot);
  setSelectedTickets(availableTickets);
};

const handleDropdownChange = (event) => {
  const selectedTicketCount = parseInt(event.target.value, 10);
  setSelectedTickets(selectedTicketCount);

  const updatedData = data.map((slotData) => {
    if (slotData.slot === selectedSlot) {
      return { ...slotData, tickets: slotData.tickets - selectedTicketCount };
    }
    return slotData;
  });

  setData(updatedData);
};





  return (
    <ThemeProvider theme={theme}>
        

        <Box mt="10px" display={["block","block","block","flex","flex"]} justifyContent={"space-between"}>
           
            <Box border={"1px solid gray"}  borderRadius="8px 8px 00px 00px" width={["100%","100%","100%","50%","50%"]}>
            <Box >
  
    {/* <ResponsiveDatePickers maindate={maindate} handleinputchange={handleinputchange} /> */}
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoItem >
  <DatePicker defaultValue={calendervalue} onChange={handleinputchange} />
</DemoItem>
    </LocalizationProvider>


    </Box>
    
    
    
    </Box>
    <Box  w="45%" >
    <Box><Text fontSize={"18px"} fontWeight={600} textAlign={"left"}  >{typeof date!=="undefined"?`${date[0]},${date[1]}${date[2]}`:`${currentWeekName},${currentMonthName}${currentYear}`}</Text></Box>
   
   <Box mt="10px" overflow={"scroll"}  h="300px" display={"grid"} gridTemplateColumns={"repeat(2,1fr)" } gap="10px">
    {slotsArray.length>=1&&slotsArray.map((item)=>
    <Box borderRadius={"6px"} border="1px solid #1976d2"><Text color={"#1976d2"} fontSize={"15px"}>{item.slot}</Text>
    <Text display={"block"} color={"pink.300"} fontSize={"12px"}
    
    onClick={() => handleTicketSelection(item.slot,item.tickets)}
    
    >only {item.tickets} left</Text>
    </Box>
    )}
   </Box>
   {selectedSlot && (
        <div>
          <p>Selected Slot: {selectedSlot}</p>
          <select value={selectedTickets} onChange={handleDropdownChange}>
            {[...Array(selectedTickets + 1).keys()].map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
          <button onClick={() => setSelectedSlot(null)}>Close</button>
        </div>
      )}
    </Box></Box></ThemeProvider>
  );
};

export default Calenderdata;
