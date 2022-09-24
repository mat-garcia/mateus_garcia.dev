import './styles/main.css';
import logoImg from '../public/mat.png';

function App() {
  
  return ( 
      <>
      <header>
        <nav className='flex flex-row  w-full h-20 border-b border-gray-900'>
          <div className=' pl-3 flex w-24 h-24'>
            <img src={logoImg} />
          </div>
          <ul className='flex flex-row w-full justify-center items-center text-lg  text-slate-50'>
            <li><a href="#home" className='p-4 hover:text-violet-400 active:text-violet-400'>HOME</a></li>
            <li><a href="#sobre" className='p-4 hover:text-violet-400 active:text-violet-400'>SOBRE</a></li>
            <li><a href="#projetos" className='p-4 hover:text-violet-400 active:text-violet-400'>PROJETOS</a></li>
            <li><a href="#contato" className='p-4 hover:text-violet-400 active:text-violet-400'>CONTATO</a></li>
          </ul>
          
        </nav>
      </header>
      <div className='' id="home">
      </div>
      <div id="sobre">
        <h1>SOBRE:</h1>
      </div>
      </>
  )
}

export default App
