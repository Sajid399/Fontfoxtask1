import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import ImageComponent from '../components/ImageComponent'
import logo from '../assets/funfoxlogo.png';
import ParagraphComponent from '../components/ParagraphComponent';
import Seaviewimage from '../assets/Group.png'
import NightImage from '../assets/Mask group.png'
import clockimage from '../assets/Frame (5).png'
import homeimage from '../assets/Group (1).png'
import modalimage from '../assets/Group 53.png'
import closeimagebtn from '../assets/Group 342.png'
const Nextpage = () => {
    const [showModal, setsShowModal] = useState(false)
    const handleShowModal = () => {
        setsShowModal(!showModal)
    }
    return (
        <Layout>
            <div className='flex flex-row justify-start items-center md:items-start'>
                <ImageComponent className='' src={logo} alt="Funfox Logo" />
            </div>
            <div className='bg-gray-100 -mt-[3rem] border rounded-2xl p-2 mx-10 md:mx-[5.1rem]'>
                <ParagraphComponent className='lg:text-[32px] p-1'>
                    Can you figure out the definition of setting from the following examples?
                </ParagraphComponent>
                <ParagraphComponent className={'lg:text-2xl p-1'}>
                    (take a minute to think about this)
                </ParagraphComponent>
                <div className='flex flex-col lg:flex-row justify-center lg:gap-6'>
                    <div className='flex flex-col justify-center items-center lg:items-start'>
                        <div className='border-4 rounded-xl border-dashed py-3 px-5 bg-white w-fit'>
                            <ImageComponent className='h-32' src={Seaviewimage} alt="Seaview" />
                        </div>
                        <ParagraphComponent className='lg:text-xl p-1 h-16'>
                            Sunny day at a beach
                        </ParagraphComponent>
                    </div>
                    <div className='flex flex-col justify-center items-center relative '>
                        <div className='border-4 rounded-xl border-dashed  py-3 px-5 bg-white w-fit'>
                            <ImageComponent className='h-32' src={NightImage} alt="Night" />
                        </div>
                        <div className='w-64 text-center mt-4 lg:mt-0'>
                            <ParagraphComponent className='lg:text-xl p-1'>
                                A cold rainy night in a haunted house in October
                            </ParagraphComponent>
                        </div>
                        <div className='absolute lg:top-[9rem] -right-10 lg:-right-[27rem] -mt-6 '>
                            <button onClick={handleShowModal}>
                                <ImageComponent className='md:w-20' src={modalimage} alt="Modal Button" />
                            </button>
                        </div>
                    </div>
                </div>       
                <ParagraphComponent className='lg:text-xl p-2'>
                    So, what do you think the definition of setting is?
                </ParagraphComponent>
                <div className='flex gap-2'>
                    <label className='lg:text-lg font-mono whitespace-nowrap'>
                        Any guesses?
                    </label>
                    <div className='border-2 border-dashed  lg:w-[62vw] flex justify-center items-center'>
                        <input className='w-full h-10 focus:outline-none' type='text' placeholder='' />
                    </div>
                    <span>
                        <span className='flex flex-col lg:flex-row'>
                            <label className='lg:text-xl mx-3' htmlFor="">Hint:</label> <span className='flex gap-4 '>
                                <ImageComponent className='h-5 lg:h-11' src={clockimage} alt="clock Logo" />
                                <ImageComponent className='h-5 lg:h-11' src={homeimage} alt="home Logo" />
                            </span>
                        </span>

                    </span>

                </div>
                <div className=' flex border-2 border-dashed my-3 text-white p-2 lg:text-2xl rounded-sm border-white bg-[#25a3a1]'>
                    <ParagraphComponent className={'flex '}>
                        Setting is the time
                        <span>
                            <ImageComponent className='lg:h-7   mt-1' src={clockimage} alt="clock Logo" />
                        </span> and place
                        <span>
                            <ImageComponent className='lg:h-7  mt-1' src={homeimage} alt="home Logo" />
                        </span>     of a story. It often answers the questions: when? and where?
                    </ParagraphComponent>

                </div>
                <ParagraphComponent className={'font-semibold lg:text-[20px]'}>
                    The time of the story could be in the past, future, day, night, summer or winter.
                    A story may take place in a school, a mall, a desert, an airplane or in a variety
                    of other places.
                </ParagraphComponent>
            </div>
            {/* / Modal code Here */}
            {
                showModal && (
                    <>
                        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#968077] bg-opacity-60 z-50">
                            <div className="bg-[#7B736A] bg-opacity-65 h-96 p-8 rounded-xl shadow-lg border-white border-2 ">
                                <h2 className='text-white text-2xl mt-5 mb-[5rem] text-center'>Guide Sheet</h2>
                                <div className='absolute top-[5rem] right-3 lg:top-[9rem] md:right-[5rem]'>
                                    <button onClick={() => setsShowModal(false)}>
                                        <ImageComponent className='h-11' src={closeimagebtn} alt="closeimagebtn" />
                                    </button>
                                </div>

                                <ParagraphComponent className={' text-white lg:text-[20px]'}>
                                    So, what do you think the definition of setting is?
                                    Any guesses?
                                </ParagraphComponent>
                                <div className='flex gap-2 my-5'>
                                    <label className='lg:text-lg font-mono whitespace-nowrap text-white'>
                                        Any guesses?
                                    </label>
                                    <div className='border-4 bg-white border-dashed  lg:w-[62vw] flex rounded-xl items-center '>
                                        <ParagraphComponent className={' text-black lg:text-[20px]'}>
                                            Setting is the time and place of a story.
                                        </ParagraphComponent>
                                    </div>
                                    <span>
                                        <span className='flex flex-col lg:flex-row'>
                                            <label className='lg:text-xl mx-3 text-white' htmlFor="">Hint:</label> <span className='flex gap-4 '>
                                                <ImageComponent className='h-8 lg:h-11' src={clockimage} alt="clock Logo" />
                                                <ImageComponent className='h-8 lg:h-11' src={homeimage} alt="clock Logo" />
                                            </span>
                                        </span>

                                    </span>

                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </Layout>
    )
}

export default Nextpage