import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header>
        <div className='flex justify-start mt-3 ml-3 '>
            <img src={logo} alt="logo veterinaria" width={140} />
        </div>
    </header>
  )
}

export default Header