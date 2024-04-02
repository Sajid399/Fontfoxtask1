import React from 'react'
import logo from '../assets/funfoxlogo.png';
import log2 from '../assets/week.png';
import cloud1 from '../assets/Frame.png';
import cloud2 from '../assets/Frame (1).png';
import cloud3 from '../assets/Frame (2).png';
import cloud4 from '../assets/Frame (3).png';
import cloud5 from '../assets/Frame (4).png';
import secimg from '../assets/Group 926 (1).png';
import girlimage from '../assets/Group 925.png'
import Layout from '../Layout/Layout'
import ImageComponent from '../components/ImageComponent';
import ParagraphComponent from '../components/ParagraphComponent';

const PrevPage = () => {
    return (
        <>
            <Layout>
                <div className='flex -my-5 flex-row lg:justify-start  items-start'>
                    <ImageComponent className='mt-5' src={logo} alt="Funfox Logo" />
                    <ImageComponent className='h-12 w-28 mt-10' src={log2} alt="Week Logo" />
                </div>
                <div className='bg-gray-100 border rounded-2xl p-2 mx-10 md:mx-[5.1rem]'>
                    <div className='text-center flex justify-center'>
                        <div className='flex justify-center items-center my-1 bg-[#fe6784] border-2 border-dashed rounded-full w-full md:w-1/3 text-[#D9D9D9] lg:text-[1.9rem]'>
                            <h1 className='whitespace-nowrap'>Element of Story Writing</h1>
                        </div>
                    </div>
                    <div>
                        <ParagraphComponent className='lg:text-2xl p-2'>
                            Welcome to term 2 of Writers Club. Are you excited for this amazing journey? Over the next week, we will be practicing the different elements of story writing. Our aim is to make stories more interesting and exciting.
                        </ParagraphComponent>
                        <div className=' flex border-2 border-dashed my-3 text-white p-2 lg:text-2xl rounded-sm border-white bg-[#25a3a1]'>
                            <ParagraphComponent>
                                There are five elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:
                            </ParagraphComponent>
                            <div>
                                <img src={girlimage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-4 md:justify-center uppercase font-semibold'>
                        <span className='flex flex-wrap  lg:flex-row gap-3'>
                            <ImageComponent className='h-20 lg:h-28' src={cloud1} alt="Cloud 1" />
                            <ImageComponent className='h-20 lg:h-28' src={cloud2} alt="Cloud 2" />
                            <ImageComponent className='h-20 lg:h-28' src={cloud3} alt="Cloud 3" />
                            <ImageComponent className='h-20 lg:h-28' src={cloud4} alt="Cloud 4" />
                            <ImageComponent className='h-20 lg:h-28' src={cloud5} alt="Cloud 5" />
                        </span>
                        <ParagraphComponent className='text-base lg:text-xl capitalize text-gray-700 whitespace-pre-line'>
                            You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.
                        </ParagraphComponent>
                    </div>

                    <div className=' text-gray-700 p-1 text-lg lg:text-2xl my-3'>
                        <ImageComponent className='w-full h-32 md:h-32' src={secimg} alt="Secondary Image" />
                        <ParagraphComponent className='relative -top-[8rem] md:-top-[7.9rem] px-[3rem] text-sm lg:text-xl'>
                            For today’s lesson, we will try to understand and practice writing  the setting for our stories.<br/> The setting is an important element of every fiction story.
                        </ParagraphComponent>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default PrevPage