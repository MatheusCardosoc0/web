import { Plus, X } from 'phosphor-react'
import Logo from '../assets/Group 2.svg'
import * as Dialog from '@radix-ui/react-dialog'
import NewHabitForm from './NewHabitForm'

const Header = () => {
  return (
    <header className='w-full max-w-3xl flex items-center justify-between'>
      <img src={Logo} alt="habits" />

      <Dialog.Root>
        <Dialog.Trigger className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex gap-2 items-center hover:border-violet-300'
          type='button'>

          <Plus size={20}
            className="text-violet-400" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='w-screen h-screen bg-black/40 fixed inset-0' />

          <Dialog.Content className='absolute p-10 bg-zinc-700 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Dialog.Close className='absolute right-6 top-6 text-xinc-400 hover:text-zinc-200'>
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>
            
            <Dialog.Title className='text-3xl leading-tight font-extrabold'>
              Criar Hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>

  )
}

export default Header