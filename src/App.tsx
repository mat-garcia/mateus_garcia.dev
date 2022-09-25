import './styles/main.css';
import './styles/scrollAnimation.js'
import logoImg from '../public/mat.png';
import rocket from '../public/rocket.gif';
import down from '../public/down.svg';
import profile from '../public/profile.jfif'

function App() {
  
  return ( 
      <>
      <header className='bg-gray-900 '>
          <div className='logo'>
            <img src={logoImg} />
          </div>
        <nav>
          <a href="#home" className="active">Home</a>
          <a href="#about">Sobre</a>
          <a href="#services">Projetos</a>
          <a href="#contact">Social</a>
        </nav>
      </header>
      <section id="home" className='bg-gray-900 flex flex-col'>
        <div className=" flex ml-5 items-center w-64 mt-20">
          <img src={rocket} alt="" />
        </div>
        <div className=" border-b-2 px-36 pt-2">
          <h1 className='bg-nlw-gradient border-transparent bg-clip-text text-transparent font-bold'>Hello World!</h1>
        </div>
        <div className='flex text-center pt-6'>
          <h1 className='text-4xl space-y-3'> Me chamo <b> Mateus Garcia </b> e sou <p> Desenvolvedor Web e Mobile.</p> </h1>
        </div>
        <div className='pt-10'>
          <img className='w-14 filter invert blink' src={down} />
        </div>
      </section>
      <section id="about" className='bg-neutral-900'>
        <div className="container reveal">
          <h2>Sobre</h2>
          <div className="text-container"  >
            <div className="profile-box ">
              <img className=" rounded-full border-8  border-orange-500" src={profile} />
            </div>
            <div className=" text-box ">
              <h3></h3>
              <p>Sou Pai, gamer apaixonado primeiramente por minha esposa{` (risos..) `}e por Programação. </p>
              <p>Sempre fui muito ligado ao mundo da tecnologia e tudo relacionado a ele. Onde aos 14 anos iniciei meu primeiro curso de TI em que ingressei no mundo do Designer Gráfico mas sempre senti que faltava algo mais, um desafio maior.... </p>
              <p>Até que conheci a Programação, foi quando meus olhos brilharam e vi que ali é meu lugar e me senti de fato em casa. Desde então eu mergulhei com tudo nesse mundo e venho buscando evolução e desafios cada vez maiores! Pois sempre haverá um próximo nível.</p>
              <h3>Skills</h3>
              <div className="flex flex-wrap ">
                <div className='bg-yellow-500 text-center p-1 rounded-sm m-1'> JS * </div>
                <div className='bg-blue-700 text-center p-1 rounded-sm m-1'> TS* </div>
                <div className='bg-blue-700 text-center p-1 rounded-sm m-1'> ReactJS * </div>
                <div className='bg-blue-500 text-center p-1 rounded-sm m-1'> React Native *</div>
                <div className='bg-green-500 text-center p-1 rounded-sm m-1'> VueJS </div>
                <div className='bg-blue-500 text-center p-1 rounded-sm m-1'> Tailwind CSS</div>
                <div className='bg-orange-500 text-center p-1 rounded-sm m-1'> Materialize *</div>
                <div className='bg-red-500 text-center p-1 rounded-sm m-1'> SASS </div>
                <div className='bg-gray-100 text-center text-neutral-900 p-1 rounded-sm m-1'> NextJS </div>
                <div className='bg-blue-800 text-center p-1 rounded-sm m-1'> PHP *</div>
                <div className='bg-orange-500 text-center p-1 rounded-sm m-1'> Java </div>
                <div className='bg-green-600 text-center p-1 rounded-sm m-1'> Node </div>
                <div className='bg-green-600 text-center p-1 rounded-sm m-1'> Express </div>
                <div className='bg-blue-800 text-center p-1 rounded-sm m-1'> PostgreSQL *</div>
                <div className='bg-black text-center p-1 rounded-sm m-1'> GITHUB Actions *</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container reveal">
          <h2>Projetos</h2>
          <div className="card-container">
            <div className="card-box">
              <a href="https://komander.vercel.app/"> 
                <img  className='hover:shadow hover:shadow-violet-500' src="/public/komander.jpg" />
              </a>
              <h3>Komander</h3>
              <p>
                WebApp PMS {' (Sistema de Gestão Hoteleira) '} em processo de criação a fim de estudos baseado no sistema em que trabalho na empresa atual.
              </p>
                <br />
              <p>
              <b>Tecnologias:</b> ReactJS, NextJS, PostgreSQL, APIs REST em PHP.
              </p>
            </div>
            <div className="card-box">
              
              <img  className='hover:shadow hover:shadow-orange-500' src="/public/rockethelp.jpg" />
              <h3>RocketHelp - ReactNative</h3>
              
              <p>
                RocketHelp é um app para agilizar a comunicação com sua equipe de suporte TI.
              </p>
              <br />
              <p>
               <b>Tecnologias:</b> React Native, Firebase e Native Base.
              </p>
            </div>
            <div className="card-box">
              <img className='hover:shadow hover:shadow-yellow-500' src="/public/nextcrud.jpg" />
              <h3>Next Crud</h3>
              <p>
                WebApp de estudo onde criei um CRUD completo ultilizando NextJS , TailwnindCSS , Firebase e NodeJS
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-neutral-900 flex flex-col">
        <div className="container reveal">
          <h2>Social</h2>
          <div className="text-container ">
            <div className="text-box w-full flex flex-col items-center">
              <p className='text-xl'><b>Email: </b> mateusgarcia.dev@gmail.com</p>
              <p className='text-xl'><b>GitHub: </b> <a className='text-violet-400' href="https://github.com/mat-garcia"> /mat-garcia</a></p>
              <p className='text-xl'><b>Linked In: </b> <a className='text-violet-400' href="https://www.linkedin.com/in/mateus-garcia/"> @mateus-garcia</a></p>
            </div>

          </div>
        </div>
        
      </section>
      <footer className='text-zinc-400 mt-12 text-sm font-bold font-sas text-center mb-6'>
        @ Mateus Garcia | 2022
      </footer>
      </>
  )
}

export default App
