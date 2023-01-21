import React from 'react'
import generateBranchBetweenDays from '../utils/GenerateBranchBetweenDays'

const SumaryDates = generateBranchBetweenDays() 

const miniSumaryDates = 18 * 7
const amountOfDaysToFill = miniSumaryDates - SumaryDates.length

console.log(SumaryDates)

import { WeekDays } from '../utils/WeekDays'
import HabitDay from './HabitDay'

const SumaryTable = () => {
  return (
    <div className='w-full flex'>
      <div className='grid grid-rows-[7] grid-flow-row gap-3'>
        {WeekDays.map((weekday, i) => (
          <div key={i} className='text-zinc-400 text-xl h-10 w-10 flex items-center justify-center'>
            {weekday}
          </div>
        ))}
      </div>

      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        
       {SumaryDates.map(date => (
        <HabitDay key={date.toString()} />
       ))}

       {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((a,i) => (
        <HabitDay key={i} opacity={true} />
       ))}
      </div>
    </div>
  )
}

export default SumaryTable