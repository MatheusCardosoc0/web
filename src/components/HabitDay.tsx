import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'

interface HabitDayProps {
  opacity?: boolean
  completed: number
  amount: number
}

const HabitDay = ({ opacity, amount, completed }: HabitDayProps) => {

  const completedPercentage = Math.round((completed / amount) * 100)
  return (
    <Popover.Root>
      <Popover.Trigger className={clsx(`w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg ${opacity && 'opacity-50'}` , {
        'bg-violet-300': completedPercentage >= 40 && completedPercentage < 60,
        'bg-violet-400': completedPercentage >= 60 && completedPercentage < 80,
        'bg-violet-500': completedPercentage >= 80
      })} />

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          ejh
          <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <div className='h-3 rounded-xl bg-violet-600'
              style={{
                width: '75%'
              }} />
          </div>
          <Popover.Arrow height={10} width={16} className="fill-violet-800" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default HabitDay