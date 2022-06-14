import { BiGitRepoForked } from 'react-icons/bi'
import { footerData } from '../data/portfolio'

const Footer = () => {
  return (
    <section className="bottom-0 min-h-max w-full">
      <div className="mt-4 mb-8 flex flex-col items-center justify-center gap-y-4 p-4 text-white">
        <h1>{footerData.heading}</h1>
        <h2>{footerData.paragraph}</h2>
        <a href={footerData.githubPortfolioLink}>
          <BiGitRepoForked className="h-8 w-8 transition delay-150 duration-300 ease-in hover:scale-110 hover:text-green-400" />
        </a>
      </div>
    </section>
  )
}

export default Footer
