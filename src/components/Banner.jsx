import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

export const Banner = () => {

    return (
        <div className="bg-black h-72">
            <div>
                <div className='flex justify-between h-auto px-5 relative top-28'>
                    <IoIosArrowBack className='text-white text-4xl'/>
                    <IoIosArrowForward className='text-white text-4xl'/>
                </div>

                <div>
                    <img src="" alt="" />
                    <h1 className='text-white text-center relative top-20 text-2xl'>BANNER</h1>
                </div>
            </div>
        </div>
    )
}