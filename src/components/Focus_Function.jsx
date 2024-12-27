import React from 'react'
import focus from '../assets/images/focus-iic.jpg'
import iic_func from '../assets/images/iic-function-1.jpg'


function Focus_Function() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-x-8 w-full py-4 max-md:gap-y-7 max-sm:gap-y-7 justify-center items-stretch">
        {/* Card 1 */}
        <div className="w-full max-w-[320px] h-[600px] md:h-auto mx-auto md:mx-0 md:w-[385px] rounded-3xl p-2 bg-gradient-to-l from-blue-700 via-red-600 to-yellow-500">
          <div className="h-full rounded-2xl bg-white overflow-hidden">
            <div className="h-48 md:h-56 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-t-2xl"
                src={iic_func}
                alt="Major Focus"
              />
            </div>
            <div className="p-4 md:p-6">
              <h2 className="font-bold text-xl md:text-2xl mb-3 md:mb-4">Major Focus</h2>
              <ul className="list-disc text-gray-700 space-y-1 md:space-y-2 pl-5 text-lg max-md:text-base">
                <li>To create a vibrant local innovation ecosystem.</li>
                <li>Start-up supporting mechanism in HEIs.</li>
                <li>Prepare institute for Atal Ranking of institutions on innovation achievements framework.</li>
                <li>Establish a functional ecosystem for scouting ideas and pre-incubation of ideas.</li>
                <li>Develop better cognitive ability among students.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-[320px] h-[600px] md:h-auto mx-auto md:mx-0 md:w-[385px] rounded-3xl p-2 bg-gradient-to-l from-blue-700 via-red-600 to-yellow-500">
          <div className="h-full rounded-2xl bg-white overflow-hidden">
            <div className="h-48 md:h-56 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-t-2xl"
                src={focus}
                alt="Functions of IIC"
              />
            </div>
            <div className="px-4 md:px-7">
              <h2 className="font-bold text-xl pt-6 md:text-2xl mb-3 md:mb-4">Functions Of IIC</h2>
              <ul className="list-disc text-gray-700 space-y-1 md:space-y-2 pl-5 overflow-y-auto max-h-[420px] max-md:max-h-[300px] text-lg max-md:text-base">
                <li>To conduct various Innovation, IPR and entrepreneurship-related activities prescribed by MIC in time bound fashion.</li>
                <li>Identify and reward innovations and share success stories.</li>
                <li>Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.</li>
                <li>Network with peers and national entrepreneurship development organizations.</li>
                <li>Create an Institution's Innovation portal to highlight innovative projects carried out by institution's faculty and students.</li>
                <li>Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Focus_Function;