import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function ResponsiveDatePickers({maindate,handleinputchange}) {
  // console.log(handleinputchange)
//   const [value, setValue] = React.useState(dayjs(`20-07-20`));
// React.useEffect(()=>{
//   setValue(maindate)
// },[maindate])
// console.log(value)
// console.log(dayjs(value))
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
      
        <DemoItem >
          <DateCalendar value={maindate} onChange={(e)=>handleinputchange(e)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
