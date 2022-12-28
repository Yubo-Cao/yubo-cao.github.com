import Image from 'next/image'
import Header from '../components/Header'
import Project from '../components/Project'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
      <Header active="Home" />
      <main className='m-4 md:m-8 flex flex-col'>
        <Section className='pb-0' contentClassName="flex gap-4 items-center justify-center max-md:flex-col max-md:p-8">
          <Image
            src="/about/yubo.png"
            alt="Yubo's Figure"
            width={200} height={300}
            className="grayscale basis-12 flex-auto max-h-96 object-contain object-left drop-shadow-2xl"
            style={{ flexGrow: 1 }}
          />
          <div className='flex flex-col gap-2 basis-48 flex-1 md:mx-16' style={{ flexGrow: 3 }}>
            <h1 className='text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-500'>Yubo Cao</h1>
            <p className='text-lg'>
              As a sophomore in high school, programming and artificial
              intelligence are two of my passions. My GPA is 4.0 out of
              4.0 and I attend the Gwinnett School of Mathematics,
              Science, and Technology.
            </p>
          </div>
        </Section>
        <Section title="Projects" subtitle="I am working on…" contentClassName='grid gap-4 grid-cols-fit-80'>
          <Project title="My Website" icon="public" url="https://yubo-cao.github.io">
            A gallery of my projects and a blog. Built with
            <code>Next.js</code>, <code>React</code>, <code>Tailwind CSS</code>,
            <code>SASS</code>, and <code>TypeScript</code>.
          </Project>
          <Project title="FPN Object detection" image="/about/object.png" size={48} url="https://www.github.com/yubo-cao/RedFTCController">
            A feature pyramid network object detection model for the FTC robotics
            competition. Built with <code>Python</code> and <code>TensorFlow</code>.
          </Project>
          <Project title="Algorithms" image="/about/flow-chart.png" size={48} url="https://www.github.com/yubo-cao/Algorithms">
            A collection of solutions to common algorithms question and a book regarding them.
            Built with <code>C++</code>, <code>Java</code>, and <code>LaTeX</code>.
          </Project>
          <Project title="Chemistry Language" icon="science" url="https://github.com/Yubo-Cao/chemistry_language">
            A programming language for chemistry supporting chemical equations and
            dimensional analysis. Built with <code>Python</code>.
          </Project>
          <Project title="Todo Grade" icon="list" url="https://github.com/Yubo-Cao/todo_list">
            A tool for analyzing grades and prioritizing assignments/todo lists.
            Built with <code>Python</code> and <code>Next.js</code>.
          </Project>
          <Project title="Quizlet Helper" icon="help" url="https://github.com/Yubo-Cao/quizlet_helper">
            A tool to manage and create Quizlet sets. Built with <code>Python</code>
            and <code>Playwright</code>.
          </Project>
        </Section>
        <Section title="Experience" subtitle="I have worked with…" contentClassName='grid gap-4 grid-cols-fit-80'>

        </Section>
      </main>
    </>
  )
}
