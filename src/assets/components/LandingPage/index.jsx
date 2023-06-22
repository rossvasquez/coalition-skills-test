import { useContext } from 'react';
import Background from '../../static/LandingPage/Background.png'
import Logo from '../../static/LandingPage/Logo.png'
import { Context } from '../context'

export default function Landing() {

    const { HistoryRef, TeamRef } = useContext(Context)

    const scrollToHistory = () => {
        setTimeout(() => {
          HistoryRef.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
      };

    const scrollToTeam = () => {
        setTimeout(() => {
          TeamRef.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
      };

    return(

        //Landing Wrapper

        <div className='h-[100vh] w-screen'>

            {/* Background Image */}

            <div className='relative h-full overflow-hidden flex justify-center z-0 bg-white'>
                <img alt='Los Angeles Mountains Background Image' src={Background} loading='lazy' className='w-screen object-[-13rem] [@media(min-width:440px)]:object-top object-cover' />
            </div>

            {/* NavBar */}

            <div className='absolute top-0 w-screen h-auto'>
                <div className='flex items-center relative w-screen max-w-[960px] h-14 mx-auto z-20'>
                    <img alt='Los Angeles Mountains Logo' loading='lazy' src={Logo} className='pl-4 h-[45px]' />
                    <div className='absolute w-auto mb-1 right-0 mr-3 lg:mr-0 gap-6 md:gap-10 h-auto flex flex-row'>
                        <div onClick={() => scrollToHistory()} className='hover:cursor-pointer hover:opacity-60 pr-2 w-auto border-b border-white'>
                            <p className='text-[12px] tracking-[1px] italic font-semibold font-lato text-white uppercase'>01.History</p>
                        </div>
                        <div onClick={() => scrollToTeam()} className='hover:cursor-pointer hover:opacity-60 pr-2 w-auto border-b border-white'>
                            <p className='text-[12px] tracking-[1px] italic font-semibold font-lato text-white uppercase'>02.Team</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}