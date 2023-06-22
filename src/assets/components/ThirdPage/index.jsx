import { useState, useContext, useRef } from 'react'
import { Context } from '../context'

import Background from '../../static/ThirdPage/Background.png'
import Background2 from '../../static/ThirdPage/Background2.png'
import Logo1 from '../../static/ThirdPage/Logo1.png'

export default function ThirdPage() {

    const [Tab, setTab] = useState(1)

    const { TeamRef } = useContext(Context)

    const divRef = useRef(null);
    const assignRef = (ref) => {
        TeamRef.current = ref;
        divRef.current = ref;
    };

    //Mountain 1 Data

    const Mountain1 = () =>
    <div className='tabImage'>
    <div className='grid grid-cols-2 mt-[8px]'>
        <p className='font-lato text-[16px]'>25 Nov 2016</p>
        <p className='font-lato text-[16px] text-right'>Vestibulum viverra</p>
        <p className='font-lato text-[16px]'>28 Nov 2016</p>
        <p className='font-lato text-[16px] text-right'>Vestibulum viverra</p>
    </div>
    <div className='grid grid-cols-2 mt-[24px]'>
        <p className='font-lato text-[16px]'>18 Dec 2016</p>
        <p className='font-lato text-[16px] text-right'>Vestibulum viverra</p>
    </div>
    <div className='grid grid-cols-2 mt-[24px]'>
        <p className='font-lato text-[16px]'>7 Jan 2017</p>
        <p className='font-lato text-[16px] text-right'>Vestibulum viverra</p>
    </div>
    </div>

    //Mountain 2 Data

    const Mountain2 = () =>
    <div className='tabImage'>
    <div className='grid grid-cols-2 mt-[8px]'>
        <p className='font-lato text-[16px]'>17 Nov 2016</p>
        <p className='font-lato text-[16px] text-right'>Vestibulum viverra</p>
    </div>
    <div className='grid grid-cols-2 mt-[24px]'>
        <p className='font-lato text-[16px]'>13 Dec 2016</p>
        <p className='font-lato text-[16px] text-right'>Vestibulum viverra</p>
        <p className='font-lato text-[16px]'>28 Dec 2016</p>
        <p className='font-lato text-[16px] text-right'>Vestibulum viverra</p>
    </div>
    <div className='grid grid-cols-2 mt-[24px]'>
        <p className='font-lato text-[16px]'>9 Feb 2017</p>
        <p className='font-lato text-[16px] text-right'>Vestibulum viverra</p>
    </div>
    </div>

    const LargeTabMenu = () =>
    <div className='hidden md:block relative md:h-[93vh] overflow-hidden flex justify-center z-0'>
        {Tab === 1 ? <img src={Background} className={`w-screen h-full object-bottom object-cover tabImage`} /> : <div className='tabImage'><img src={Background2} className='w-screen h-full object-top object-cover' /></div> }
        <div className='absolute top-0 w-screen h-10 bg-[#414f6b]'>
            <div className='w-screen max-w-[960px] h-full flex flex-row items-center mx-auto'>
                <div onClick={() => setTab(1)} className={`group h-full w-[140px] ${Tab === 1 ? 'bg-[#b0b4be] text-[#414f6b]' : 'hover:cursor-pointer bg-[#414f6b] text-[#b0b4be]'} pb-1 font-oswald text-[20px] uppercase flex flex-col justify-center items-center font-bold tracking-[1px]`}>
                    <p>Mountain 1</p>
                    <div className={`${Tab === 2 ? 'group-hover:bg-[#b0b4be]' : null} w-[6.7rem] h-[.05rem] -mt-1 bg-[#414f6b]`} />
                </div>
                <div onClick={() => setTab(2)} className={`group h-full w-[140px] ${Tab === 2 ? 'bg-[#b0b4be] text-[#414f6b]' : 'hover:cursor-pointer bg-[#414f6b] text-[#b0b4be]'} pb-1 font-oswald text-[20px] uppercase flex flex-col justify-center items-center font-bold tracking-[1px]`}>
                    <p>Mountain 2</p>
                    <div className={`${Tab === 1 ? 'group-hover:bg-[#b0b4be]' : null} w-[6.9rem] h-[.05rem] -mt-1 bg-[#414f6b]`} />
                </div>
            </div>
        </div>
        <div className='flex flex-col py-3 px-10 absolute w-[352px] h-[233px] bg-white bg-opacity-70 mx-auto md:mx-none top-[6.5rem] md:left-[21rem]'>
            <p className='uppercase font-oswald font-bold text-[32px] text-[#414f6b]'>Schedule</p>
            {Tab === 1 ? <Mountain1 /> : <Mountain2 />}
        </div>
        <div className='absolute bottom-0 w-screen h-20 bg-[#414f6b] bg-white'>
            <div className='relative flex flex-row items-center h-full max-w-[960px] mx-auto z-20'>
                
                <div className='relative ml-4 h-[45px] w-[45px]'>
                    <img src={Logo1} className='absolute top-0 h-full w-full z-0' />
                    <div className='absolute top-0 h-full w-full z-10 bg-[#63769d] opacity-60 rounded-full' />
                </div>

                <p className='ml-2 mt-1 font-bold font-bebas font-lighter tracking-[2px] leading-[18px]'>
                    <span className='text-[#63769d] text-[21.18px]'>LOSANGELES</span>
                    <br></br>
                    <span className='text-[#63769d] text-[22.9px]'>MOUNTAINS</span>
                </p>

                <div className='absolute w-auto right-0 mr-3 lg:mr-0 gap-6 md:gap-10 h-auto flex flex-row'>
                    <div className='hover:cursor-pointer hover:opacity-60 pr-2 w-auto'>
                        <p className='text-[12px] tracking-[1px] font-lato italic font-bold text-[#63769d] uppercase'>Copyright 2016. all rights reserved.</p>
                    </div>
                </div>

            </div>
            <div className='absolute top-0 w-full h-full bg-[#414f6b] z-10' />
        </div>
    </div>

    const MobileTabMenu = () =>
    <div className='w-screen h-auto flex flex-col relative block md:hidden'>
        <div className='relative flex items-center px-4 h-24 w-screen bg-[#414f6b]'>
            <p className={`font-oswald text-2xl ${Tab === 1 ? 'underline' : null} uppercase text-[#b0b4be]`}>Mountain 1</p>
            <p onClick={Tab === 1 ? () => setTab(0) : () => setTab(1)} className='focus:opacity-100 hover:cursor-pointer absolute right-6 italic text-white tracking-[1px] opacity-60 lato text-md uppercase'>{Tab === 1 ? 'close' : 'open'}</p>
        </div>
        {Tab === 1?
        <div className='relative flex flex-col py-3 px-10 absolute w-screen h-[233px] bg-white bg-opacity-70'>
            <p className='uppercase font-oswald font-bold text-[32px] text-[#414f6b]'>Schedule</p>
            <Mountain1 />
        </div>
        : null}
        <div className='relative flex items-center px-4 h-24 w-screen bg-[#414f6b] mt-[.05rem]'>
            <p className={`font-oswald text-2xl ${Tab === 2 ? 'underline' : null} uppercase text-[#b0b4be]`}>Mountain 2</p>
            <p onClick={Tab === 2 ? () => setTab(0) : () => setTab(2)} className='focus:opacity-100 hover:cursor-pointer absolute right-6 italic text-white tracking-[1px] opacity-60 lato text-md uppercase'>{Tab === 2 ? 'close' : 'open'}</p>
        </div>
        {Tab === 2?
        <div className='relative flex flex-col py-3 px-10 absolute w-screen h-[233px] bg-white bg-opacity-70'>
            <p className='uppercase font-oswald font-bold text-[32px] text-[#414f6b]'>Schedule</p>
            <Mountain2 />
        </div>
        : null}
    </div>

    return(

        //Second Page Wrapper

        <div>

            {/* White Section */}

            <div ref={assignRef} className="h-auto py-4 md:h-40 w-screen bg-white">
                <div className='pb-1 max-w-[960px] w-full mx-auto h-full flex flex-col md:flex-row justify-center items-center -mt-8 md:-mt-2 px-10'>
                    <div className='-ml-12 md:-ml-0 flex flex-row h-auto w-auto'>
                        <p className='font-oswald text-[135.63px] font-bold text-[#414f6b] opacity-50 condense'>02.</p>
                        <p className='font-oswald text-[32px] font-bold text-[#414f6b] -ml-[1.6rem] mt-[6rem]'>CLIMB</p>
                    </div>

                    <p className='font-lato text-[16px] max-w-md mx-auto md:max-w-none -mt-4 mb-2 md:mb-0 md:-mt-0 ml-4 md:ml-8'>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, 
                    gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
                </div>
            </div>

            {/* Background Image */}

            <LargeTabMenu />
            <MobileTabMenu />
            <div className='mt-[.05rem] block md:hidden relative w-screen h-20 bg-[#414f6b] bg-white'>
                <div className='relative flex flex-row items-center h-full max-w-[960px] mx-auto z-20'>

                    <div className='relative ml-4 h-[45px] w-[45px]'>
                        <img src={Logo1} className='absolute top-0 h-full w-full z-0' />
                        <div className='absolute top-0 h-full w-full z-10 bg-[#63769d] opacity-60 rounded-full' />
                    </div>

                    <p className='ml-2 mt-1 font-bold font-bebas font-lighter tracking-[2px] leading-[18px]'>
                        <span className='text-[#63769d] text-[21.18px]'>LOSANGELES</span>
                        <br></br>
                        <span className='text-[#63769d] text-[22.9px]'>MOUNTAINS</span>
                    </p>

                    <div className='absolute w-auto right-0 mr-3 lg:mr-0 gap-6 md:gap-10 h-auto flex flex-row'>
                        <div className='hover:cursor-pointer hover:opacity-60 pr-2 w-auto'>
                            <p className='ml-52 text-right text-[12px] tracking-[1px] font-lato italic font-bold text-[#63769d] uppercase'>Copyright 2016. all rights reserved.</p>
                        </div>
                    </div>

                </div>
                <div className='absolute top-0 w-full h-full bg-[#414f6b] z-10' />
            </div>
            
        </div>
    )
}