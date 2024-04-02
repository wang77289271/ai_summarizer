import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-36 object-contain' />
        <button
          className='black_btn'
          type='button'
          onClick={() => {
            window.open('https://github.com/wang77289271/ai_summarizer')
          }}
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that condenses lengthy articles into clear summaries.
      </h2>
    </header>
  )
}

export default Hero
