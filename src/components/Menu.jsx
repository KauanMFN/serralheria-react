import './menu.css'

export const Menu = () => {

    function toggleMenu() {
        const btn = document.querySelector(".menuIcon")
        const linksMobile = document.querySelector(".linksMobile")
        
        linksMobile.classList.toggle("active")
        btn.classList.toggle("open")
        
        console.log("Clicado")

    }

    return (
        <div className="py-3 px-10 flex justify-between items-center m-auto max-w-screen-xl">
            <span className="font-bold text-xl text-yellow-900">LOGO</span>

            <ul className="flex gap-5 text-yellow-900 hidden sm:flex">
                <a href=""><li>INÍCIO</li></a>
                <a href=""><li>SERVIÇOS</li></a>
                <a href=""><li>SOBRE NÓS</li></a>
                <a href=""><li>CONTATO</li></a>
                <a href=""><li>ORÇAMENTO</li></a>
            </ul>

            <ul
            className="linksMobile flex text-yellow-900 sm:hidden flex-col absolute right-0 top-[52px] text-center bg-white text-[20px] h-0 opacity-0 border-0 overflow-y-hidden z-10">
                <a href=""><li>INÍCIO</li></a>
                <a href=""><li>SERVIÇOS</li></a>
                <a href=""><li>SOBRE NÓS</li></a>
                <a href=""><li>CONTATO</li></a>
                <a href=""><li>ORÇAMENTO</li></a>
            </ul>

            <div
            className="menuIcon absolute top-3 right-10 sm:hidden flex cursor-pointer"
            onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}