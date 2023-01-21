import React from 'react'

interface HabitDayProps{
  opacity?: true
}

const HabitDay = ({opacity}: HabitDayProps) => {
  return <div className={`w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg ${opacity && 'opacity-50'}`} />
}

export default HabitDay