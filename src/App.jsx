import { Banner } from './components/Banner'
import { Menu } from './components/Menu'
import { Product } from './components/Product'

import productInfo from './data/productInfo'

import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

export function App() {
  return (
    <div className="">
      <header>
        <Menu />
        <Banner />
      </header>

      <main className=''>
        <section>
          <div className='text-center relative bottom-4'>
            <h2
            className='px-10 py-2 pb-3 rounded-md bg-primary w-fit m-auto text-3xl text-white uppercase shadow-gray-200 shadow-md mb-2'
            >Sobre os produtos</h2>

            <p className='max-w-md m-auto max-w-screen-md px-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quaerat. Beatae autem quidem corporis ratione voluptate. Voluptates at harum voluptate numquam impedit, itaque quis, distinctio minima consequatur cum unde vero!</p>

            <div className='flex flex-col gap-5 mt-10 mb-14 max-w-screen-xl m-auto items-center'>
              {
                productInfo.map((item)=>
                  <Product
                  img={item.image}
                  title={item.title}
                  description={item.description}
                  key={item.id}
                  />
                )
              }
            </div>
          </div>
        </section>

        <section>
          <div className='text-center bg-orange-100 px-5 py-5 pb-7'>
            <h2 className='text-4xl font-bold text-primary mb-2'>SOBRE A EMPRESA</h2>
            <p className='text-primary opacity-80 max-w-screen-xl m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sem eget ipsum iaculis sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus metus est, vestibulum a lobortis vel, malesuada quis neque. Donec in viverra risus, et viverra arcu. Mauris vestibulum leo magna, vel tincidunt quam viverra quis. Nam id sollicitudin enim, blandit posuere dolor. Mauris et lorem et libero mollis sollicitudin posuere ac turpis. Sed mattis tempus lorem a faucibus. Nam blandit laoreet leo, a mattis enim accumsan nec. Cras augue libero, placerat nec nisi vel, scelerisque porta sapien. In in ex magna.</p>

            <span
            className="bg-black block max-w-4xl h-80 xl:h-96 max-h-96 rounded-md bg-cover bg-center mt-8 m-auto"
            style={{backgroundImage: `url("${productInfo[0].image}")`}}>

              <div className='flex justify-between h-fit px-5 relative top-32'>
                        <IoIosArrowBack className='text-white text-4xl'/>
                    <IoIosArrowForward className='text-white text-4xl'/>
              </div>

            </span>
          </div>
        </section>

        <section>
          <div className='px-5 mt-10 mb-10 max-w-screen-xl m-auto'>
            <h2 className='text-center text-4xl font-bold text-primary mb-2'>ONDE ESTAMOS</h2>
            <div className='w-full h-80 bg-gray-600 rounded-md'/>

            <div className='flex flex-col mt-5 mb-5 max-w-screen-lg m-auto'>
              <h3 className='font-bold text-primary text-2xl'>HORÁRIO DE ATENDIMENTO</h3>
              <p className='text-yellow-900 text-lg'>Atendimento de segunda a sexta <br /> Das 08:00 as 17:00</p>
            </div>

            <div className='flex flex-col text-right max-w-screen-lg m-auto'>
              <h3 className='font-bold text-primary text-2xl'>FALE CONOSCO</h3>
              <p className='text-primary text-lg'>contato.comercial@gmail.com <br /> (00) 0 0000-0000</p>
            </div>
          </div>
        </section>

        <section>
          <div className='px-5 mb-20 max-w-screen-lg m-auto'>
            <h2 className='text-center text-4xl font-bold text-primary mb-2'>PRECISA DE AJUDA? <br />
              TIRE SUA DÚVIDA
            </h2>
            
            <form action="" className='bg-primary rounded-md px-10 py-5 pb-7 flex flex-col gap-5 text-white'>
              <div>
                <p>Nome</p>
                <input type="text" placeholder='Digite seu nome' className='bg-white bg-opacity-30 w-full rounded-md px-2 py-2 placeholder-white placeholder-opacity-20 border-white border border-opacity-30 outline-none focus:border-opacity-70'/>
              </div>

              <div>
                <p>Email</p>
                <input type="email" placeholder='Digite seu email' className='bg-white bg-opacity-30 w-full rounded-md px-2 py-2 placeholder-white placeholder-opacity-20 border-white border border-opacity-30 outline-none focus:border-opacity-70'/>
              </div>

              <div>
                <p>Mensagem</p>
                <textarea name="" id="" placeholder='Digite a sua mensagem' className='bg-white bg-opacity-30 w-full rounded-md px-2 py-2 placeholder-white placeholder-opacity-20 border-white border border-opacity-30 h-36 outline-none focus:border-opacity-70'></textarea>
              </div>

              <input type="submit" value={'ENVIAR'} className="text-2xl font-bold px-24 py-4 bg-[#c6b299] rounded-md mb-auto bottom-[-20px] cursor-pointer"/>

              {/* <input type="submit" value={'ENVIAR'} className="text-2xl font-bold px-24 py-4 bg-yellow-700 rounded-md absolute bottom-[-35px] left-[80px] cursor-pointer"/> */}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className='bg-orange-100 px-5'>
          <div className='py-10 flex flex-col gap-8 md:flex-row max-w-screen-xl md:justify-between m-auto'>
            <div className='text-center'>
              <h3 className='rounded-full w-fit h-fit p-5 bg-primary text-white m-auto'>LOGO</h3>
              <p>Direitos autorais reservados.</p>
            </div>

            <ul className='decoration-none flex flex-col gap-2 items-center'>
              <li className='cursor-pointer w-fit'>INÍCIO</li>
              <li className='cursor-pointer w-fit'>SERVIÇOS</li>
              <li className='cursor-pointer w-fit'>SOBRE NÓS</li>
              <li className='cursor-pointer w-fit'>LOCALIZAÇÃO</li>
              <li className='cursor-pointer w-fit'>ORÇAMENTO</li>
            </ul>

            <div className='flex flex-col gap-2 text-center'>
              <div>
                <h3 className='text-lg font-bold text-primary'>HORA DE ATENDIMENTO</h3>
                <p>Atendimento de segunda a sexta <br /> Das 08:00 as 17:00</p>
              </div>

              <div>
                <h3 className='text-lg font-bold text-primary'>FALE CONOSCO</h3>
                <p>contato.comercial@gmail.com <br /> (00) 0 0000-0000</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
