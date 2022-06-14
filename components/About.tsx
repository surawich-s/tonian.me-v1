import { AiOutlineMessage } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { aboutData } from '../data/portfolio'

const About = () => {
  return (
    <section
      id="about"
      className="flex w-full flex-col items-center justify-center text-white"
    >
      <div className="sticky top-0 z-50 flex w-full flex-row items-center gap-x-2 rounded-lg border-2 border-green-400 bg-black p-4 text-left text-green-400">
        <AiOutlineMessage className="h-8 w-8" />
        <p>About Me</p>
      </div>

      <div className="m-8 rounded-lg bg-gray-900 p-4 md:w-3/4">
        <div className="text-left">
          <h1 className="text-xl">{aboutData.heading}</h1>
          <p className="text-md mt-4 md:text-lg">{aboutData.paragraph}</p>
        </div>
        <div>
          <div className="my-4 flex w-full flex-row flex-wrap">
            {aboutData.skills.map((skill) => {
              return (
                <div className="flex w-1/2 flex-row items-center justify-start">
                  <BsDot className="h-4 w-4 text-green-400" />
                  {skill}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
