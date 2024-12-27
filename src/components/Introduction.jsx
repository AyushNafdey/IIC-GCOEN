import React from 'react'
import gcoen from '../assets/images/GCOEN1.png'
import gcoen_mobile from '../assets/images/gcoen-mobile.png'

const Hero = () => {
    return (
        <>
            <div className='w-full h-auto rounded-md px-6 max-sm:hidden max-md:hidden'>
                <img src={gcoen}/>
            </div>
            <div className='lg:hidden px-5'>
                <img src={gcoen_mobile} className='md:w-full md:px-4 pb-5'/>
                <div className='text-xl md:text-xl'>
                    <p>Institution's Innovation Council (IIC), at the Government College of Engineering, Nagpur, known as IIC GCOEN, aims to foster innovation and entrepreneurship among students and faculty. Established under the guidance of the Ministry of Education's Innovation Cell (MIC) and in line with the national agenda for promoting entrepreneurial thinking, IIC GCOEN provides a structured platform to develop ideas, create impactful projects, and encourage start-up culture within the institution.</p>
                </div>
            </div>
            <hr className='mt-5 mx-6 border-yellow-300 border-t-4'/>
            <div className='mt-2 mb-2 text-3xl max-sm:text-xl font-semibold flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-red-600 to-yellow-400'>
                Introduction
            </div>
            <hr className='mb-5 mx-6 border-yellow-300 border-bold border-t-4'/>
            <div className='px-7 text-xl font-normal max-sm:text-sm max-md:text-lg'>
                In the year 2018, the Ministry of Education (MoE) through MoE's Innovation Cell (MIC) launched the Institution’s Innovation Council (IIC) program in collaboration with AICTE for Higher Educational Institutions (HEIs) to systematically foster the culture of innovation and start-up ecosystem in education institutions. Primarily, IICs’ role is to engage large number of faculty, students and staff in various innovation and entrepreneurship related activities such as ideation, Problem solving, Proof of Concept development, Design Thinking, IPR, project handling and management at Pre-incubation/Incubation stage, etc., so that innovation and entrepreneurship ecosystem gets established and stabilized in HEIs. The IIC model is designed to address the existing challenges/issues in HEIs such as less numbers, occasional and unplanned Innovation & Entrepreneurship (I&E) activities organised in HEIs with low involvement of top leadership, lack of coherence and absence of synergy in resource mobilization, deployment and underutilization of creative potential of youths as major barrier for vibrant I&E ecosystem to emerge from HEIs.
            </div>
            
        </>
    )
}

export default Hero