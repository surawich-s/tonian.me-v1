import { MdWorkOutline } from 'react-icons/md'
import { experienceData } from '../data/portfolio'
const Experience = () => {
  return (
    <section
      id="work"
      className="flex w-full flex-col items-center justify-center text-white"
    >
      <div className="sticky top-0 z-50 flex w-full flex-row items-center gap-x-2 rounded-lg border-2  border-green-400 bg-black p-4 text-left text-green-400">
        <MdWorkOutline className="h-8 w-8" />
        <h1>Work</h1>
      </div>
      <div className="mx-8 my-4 md:w-1/2">
        {experienceData.reverse().map((work) => {
          return (
            <div className="my-4 rounded-lg bg-gray-900 p-4">
              <div className="text-xl">
                <h1 className="text-left">{work.companyName}</h1>
              </div>

              <div className="text-md brightness-75 md:text-lg">
                {work.companyLinkName && (
                  <a className="text-left text-sm" href={work.companyLink}>
                    <h2>{work.companyLinkName}</h2>
                  </a>
                )}
                <div className="mt-2 text-left">{work.position}</div>
                <div className="text-left">{work.duration}</div>
                <div className="mt-2 flex flex-col gap-y-2 text-left">
                  {work.tasks.map((task) => {
                    return (
                      <div className="mt-2 rounded-lg bg-gray-800 p-2">
                        {task}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
