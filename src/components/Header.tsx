import { Plus } from 'phosphor-react'
import Logo from '../assets/Group 2.svg'

const Header = () => {
  return (
    <header className='w-full max-w-3xl flex items-center justify-between'>
    <img src={Logo} alt="habits" />

    <button className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex gap-2 items-center hover:border-violet-300'
      type='button'>

      <Plus size={20}
      className="text-violet-400" />
      Novo hábito
    </button>
  </header>

  )
}

export default Header