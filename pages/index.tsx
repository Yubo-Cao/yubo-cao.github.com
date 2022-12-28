import Image from 'next/image'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Project from '../components/Project'
import Section from '../components/Section'
import Title from '../components/Title'

export default function Home() {
  return (
    <>
      <Header active="Home" />
      <main className='m-4 md:m-8 flex flex-col'>
        <Section className='pb-0' contentClassName="flex gap-4 items-center justify-center max-md:flex-col p-4">
          <Image
            src="/about/yubo.png"
            alt="Yubo's Figure"
            width={200} height={300}
            className="grayscale basis-12 flex-auto max-h-96 object-contain object-left drop-shadow-2xl"
            style={{ flexGrow: 1 }}
          />
          <div className='flex flex-col gap-2 basis-48 flex-1 md:mx-16' style={{ flexGrow: 3 }}>
            <Title level={1}>Yubo Cao</Title>
            <p className='text-lg prose'>
              As a sophomore in high school, prgramming and artificial
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
        <Section title="Experience" subtitle="I have worked with…" contentClassName='grid gap-4 grid-cols-fit-102 max-sm:grid-cols-fit-64'>
          <Experience title="officer" company="Computer Science Club" start="2022-09">
            <ul>
              <li>Create instructional materials, plan activities, and be present at regular meetings.</li>
              <li>Participate in initiatives including internet, machine learning, and cybersecurity.</li>
              <li>Assisting members of the computer science club</li>
            </ul>
          </Experience>
          <Experience title="tutor" company='Learn to be' start='2022-05'>
            <ul>
              <li>Tutor students about knowledge of CS, math, and physics/chemistry</li>
              <li>Help students with homework and prepare for tests.</li>
            </ul>
          </Experience>
          <Experience title="member" company='Tri-M music honor society' start='2022-05'>
            <ul>
              <li>Participate in music performances and competitions.</li>
              <li>Help organize and run music events.</li>
              <li>Help students with music theory and instrument playing.</li>
            </ul>
          </Experience>
          {/* Red robodragons */}
          <Experience title="member" company='Red Robodragons' start='2021-09'>
            <ul>
              <li>Participate in robotics competitions.</li>
              <li>Program robots with Android Studio/OnBotJava</li>
              <li>Help other members with programming and mechanical design.</li>
            </ul>
          </Experience>
        </Section>
      </main>
    </>
  )
}
