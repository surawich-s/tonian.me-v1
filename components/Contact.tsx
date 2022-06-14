import { AiOutlineMail } from 'react-icons/ai'
import { generalData } from '../data/portfolio'
import { contactData } from '../data/portfolio'

const Contact = () => {
  return (
    <section
      id="contact"
      className="bottom-0 flex min-h-max w-full flex-col items-center justify-center"
    >
      <div className="sticky top-0 z-50 flex w-full flex-row items-center gap-x-2 rounded-lg border-2 border-green-400 bg-black  p-4 text-left text-green-400">
        <AiOutlineMail className="h-8 w-8" />
        <h1>Contact</h1>
      </div>
      <div className="m-8 rounded-lg bg-gray-900 p-4 text-white md:w-1/2">
        <div className="m-4">
          <h2 className="text-left text-xl md:text-center">
            {contactData.heading}
          </h2>
          <p className="mt-4 text-lg">{contactData.paragraph}</p>
          <div className="mt-4 flex flex-col items-center justify-center">
            <a href="mailto:surawich.sit@gmail.com">
              <button className="text-md my-4 rounded-lg  border-2 border-green-400 bg-inherit p-2 text-green-400 drop-shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-110 hover:border-green-300 hover:text-green-300">
                Email: {generalData.email}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
