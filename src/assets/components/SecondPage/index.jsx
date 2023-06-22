import { useContext, useRef } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Context } from '../context'

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Background from '../../static/SecondPage/Background.png'
import Logo from '../../static/LandingPage/Logo.png'
import Carousel1 from '../../static/SecondPage/Carousel1.png'
import Carousel2 from '../../static/SecondPage/Carousel2.png'

export default function SecondPage() {

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

    const divRef = useRef(null);
    const assignRef = (ref) => {
        HistoryRef.current = ref;
        divRef.current = ref;
    };

    return(

        //First Page Wrapper

        <div className="w-screen h-auto">

            {/* White NavBar */}

            <div className='relative w-screen bg-white h-20 z-10'>
                <div className='relative flex flex-row items-center h-full max-w-[960px] mx-auto'>

                    <img alt='Los Angeles Mountains Logo' loading='lazy' src={Logo} className=' pl-4 h-[45px]' />

                    <p className='ml-2 mt-1 font-bold font-bebas font-lighter tracking-[2px] leading-[18px]'>
                        <span className='text-[#4d4d4d] text-[21.18px]'>LOSANGELES</span>
                        <br></br>
                        <span className='text-[#414f6b] text-[22.9px]'>MOUNTAINS</span>
                    </p>

                    <div className='absolute w-auto right-0 mr-3 lg:mr-0 gap-6 md:gap-10 h-auto flex flex-row'>
                        <div onClick={() => scrollToHistory()} className='hover:cursor-pointer hover:opacity-60 pr-2 mb-0.5 w-auto border-b border-[#414f6b]'>
                            <p className='text-[12px] tracking-[1px] font-lato italic font-semibold text-[#414f6b] uppercase'>01.History</p>
                        </div>
                        <div onClick={() => scrollToTeam()} className='hover:cursor-pointer hover:opacity-60 pr-2 mb-0.5 w-auto border-b border-[#414f6b]'>
                            <p className='text-[12px] tracking-[1px] font-lato italic font-semibold text-[#414f6b] uppercase'>02.Team</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Image */}

            <div ref={assignRef} className='relative h-auto overflow-hidden flex justify-center z-0'>
                <img alt='Page 2 Mountaine Background Image' loading='lazy' src={Background} className='w-screen h-[100vh] sm:h-[145vh] object-top object-cover' />

                <div className='absolute -top-6 md:top-6 w-screen max-w-[960px] px-2'>
                    <div className='ml-6 md:ml-0 flex flex-row h-auto w-auto'>
                        <p className='font-oswald text-[135.63px] font-bold text-[#414f6b] opacity-50 condense'>01.</p>
                        <p className='font-oswald text-[32px] font-extrabold text-[#414f6b] -ml-[1.73rem] mt-[5.9rem]'>HISTORY</p>
                    </div>

                    <p className='bg-white bg-opacity-[85%] sm:bg-transparent px-6 py-5 sm:px-[4rem] -mt-4 sm:-mt-9 font-lato font-light text-[16px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, 
                    rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. 
                    Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus 
                    suscipit dignissim tortor nec congue. </p>
                    
                </div>

                {/* Carousel */}

                <div className='absolute bottom-0 flex justify-center items-center h-auto md:h-52 w-screen bg-[#414f6b] bg-opacity-80 z-10'>
                    <div className='carousel-wrapper md:h-[70%] px-2 -mt-0  md:-mt-12 pt-2 max-w-5xl'>
                        <Carousel
                            showThumbs={false}
                            showArrows={false}
                            showStatus={false}
                            autoPlay={true}
                            infiniteLoop={true}
                        >
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 pb-10'>
                                <img alt='Carousel Image of Man on Mountain' loading='lazy' className='object-fit' src={Carousel1} />
                                <img alt='Carousel Image of Mountainscape' loading='lazy' className='object-fit' src={Carousel2} />
                                <img alt='Carousel Image of Man on Mountain' loading='lazy' className='object-fit' src={Carousel1} />
                                <img alt='Carousel Image of Mountainscape' loading='lazy' className='object-fit' src={Carousel2} />
                            </div>
                            
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 pb-10'>
                                <img alt='Carousel Image of Man on Mountain' loading='lazy' className='object-fit' src={Carousel1} />
                                <img alt='Carousel Image of Mountainscape' loading='lazy' className='object-fit' src={Carousel2} />
                                <img alt='Carousel Image of Man on Mountain' loading='lazy' className='object-fit' src={Carousel1} />
                                <img alt='Carousel Image of Mountainscape' loading='lazy' className='object-fit' src={Carousel2} />
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 pb-10'>
                                <img alt='Carousel Image of Man on Mountain' loading='lazy' className='object-fit' src={Carousel1} />
                                <img alt='Carousel Image of Mountainscape' loading='lazy' className='object-fit' src={Carousel2} />
                                <img alt='Carousel Image of Man on Mountain' loading='lazy' className='object-fit' src={Carousel1} />
                                <img alt='Carousel Image of Mountainscape' loading='lazy' className='object-fit' src={Carousel2} />
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

        
    )
}