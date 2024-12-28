import React from 'react'




function Focus_Function() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white min-h-screen flex items-center justify-center max-md:pt-4 max-md:justify-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-0.5 bg-white"></div>

          {/* Major Focus Section */}
          <div className="pr-8 max-md:pl-7">
            <h2 className="text-3xl font-bold mb-4">
              Major Focus
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-xl">
              <li className="">
                To create a vibrant local innovation ecosystem
              </li>
              <li className="">
                Start-up/ entrepreneurship supporting Mechanism in HEIs.
              </li>
              <li className="">
                Prepare institute for Atal Ranking of Institutions on Innovation
                Achievements Framework (ARIIA).
              </li>
              <li className="">
                Establish Function Ecosystem for Scouting Ideas and
                Pre-incubation of Ideas.
              </li>
              <li className="">
                Develop better Cognitive Ability amongst Technology Students.
              </li>
            </ul>
          </div>

          {/* Functions Section */}
          <div className="pl-8">
            <h2 className="text-3xl font-bold mb-4">
              Functions
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-xl max-md:pb-4">
              <li className="">
                To conduct various innovation and entrepreneurship-related
                activities prescribed by Central MIC in time-bound fashion
              </li>
              <li className="">
                Identify and reward innovations and share success stories
              </li>
              <li className="">
                Organize periodic workshops/ seminars/ interactions with
                entrepreneurs, investors, professionals and create a mentor pool
                for student innovators.
              </li>
              <li className="">
                Network with peers and national entrepreneurship development
                organizations.
              </li>
              <li className="">
                Create an Institution’s Innovation portal to highlight
                innovative projects carried out by institution’s faculty and
                students.
              </li>
              <li className="">
                Organize Hackathons, idea competitions, mini-challenges, etc.
                with the involvement of industries
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </>
      )
}

      export default Focus_Function;