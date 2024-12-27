import React from 'react'
import focus from '../assets/images/focus-iic.jpg'
import iic_func from '../assets/images/iic-function-1.jpg'


function Focus_Function() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 py-7 justify-center md:px-2">
        {/* Card 1 */}
        <div className="w-full md:w-96 rounded-3xl p-2 bg-gradient-to-l from-blue-700 via-red-600 to-yellow-500">
          <div className="h-full rounded-2xl bg-white overflow-hidden">
            <img
              className="w-full object-cover rounded-t-2xl"
              src={iic_func}
              alt="Major Focus"
            />
            <div className="p-6">
              <h2 className="font-bold text-2xl mb-4">Major Focus</h2>
              <ul className="list-disc text-gray-700 space-y-2 pl-5">
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
        <div className="w-full md:w-96 rounded-3xl p-2 bg-gradient-to-l from-blue-700 via-red-600 to-yellow-500">
          <div className="h-full pt-[2.1rem] rounded-2xl bg-white overflow-hidden pl-7">
            <img
              className="object-cover rounded-t-2xl"
              src={focus}
              alt="Functions of IIC"
            />
            <div className="max-h-[300px] pr-2">
              <h2 className="font-bold text-2xl mb-4">Functions Of IIC</h2>
              <ul className="list-disc text-gray-700 space-y-2 pl-5 overflow-y-auto max-h-[300px]">
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