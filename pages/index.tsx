import Image from 'next/image'
import Achievement from '../components/Achievement'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Project from '../components/Project'
import Section from '../components/Section'
import Skill from '../components/Skill'
import StickNav from '../components/StickNav'
import Title from '../components/Title'
import React from 'react'

export default function Home() {
  return (
    <>
      <Header active="Home" />
      <div className='xl:grid xl:grid-cols-nav py-4 mx-auto max-xl:overflow-x-hidden' style={{ maxWidth: 'min(100%, 1444px)' }}>
        <main className='max-xs:mx-4 mx-8 md:mx-16 flex flex-col'>
          <Section className='pb-0 max-md:pb-4' contentClassName="flex gap-4 items-center justify-center max-md:flex-col p-4 py-0 max-md:py-4">
            <Image
              src="/about/yubo.png"
              alt="Yubo's Figure"
              width={200} height={300}
              className="grayscale basis-12 flex-auto max-h-96 object-contain object-left drop-shadow-2xl"
              style={{ flexGrow: 1 }}
            />
            <div className='flex flex-col gap-2 basis-96 flex-1 md:mx-16 max-md:basis-16  prose' style={{ flexGrow: 3 }}>
              <Title level={1}>Yubo Cao</Title>
              <p className='text-lg mt-2'>
                I am a highly motivated and ambitious sophomore with a passion for programming and artificial intelligence.
                I am excited to continue exploring and learning about these fields, and I am commited to strive
                for excellence in all of my endeavors.
              </p>
            </div>
          </Section>
          <Section title="Projects" subtitle="I am working on…" contentClassName='grid gap-4 grid-cols-fit-96'>
            <Project title="My Website" name="public" url="https://yubo-cao.github.io">
              A gallery of my projects and a blog. Built with
              <code>Next.js</code>, <code>React</code>, <code>Tailwind CSS</code>,
              <code>SASS</code>, and <code>TypeScript</code>.
            </Project>
            <Project title="FPN Object detection" name="/about/object.png" iconSize={48} url="https://www.github.com/yubo-cao/RedFTCController">
              A feature pyramid network object detection model for the FTC robotics
              competition. Built with <code>Python</code> and <code>TensorFlow</code>.
            </Project>
            <Project title="Algorithms" name="/about/flow-chart.png" iconSize={48} url="https://www.github.com/yubo-cao/Algorithms">
              A collection of solutions to common algorithms question and a book regarding them.
              Built with <code>C++</code>, <code>Java</code>, and <code>LaTeX</code>.
            </Project>
            <Project title="Chemistry Language" name="science" url="https://github.com/Yubo-Cao/chemistry_language">
              A programming language for chemistry supporting chemical equations and
              dimensional analysis. Built with <code>Python</code>.
            </Project>
            <Project title="Todo Grade" name="list" url="https://github.com/Yubo-Cao/todo_list">
              A tool for analyzing grades and prioritizing assignments/todo lists.
              Built with <code>Python</code> and <code>Next.js</code>.
            </Project>
            <Project title="Quizlet Helper" name="help" url="https://github.com/Yubo-Cao/quizlet_helper">
              A tool to manage and create Quizlet sets. Built with <code>Python</code>
              and <code>Playwright</code>.
            </Project>
          </Section>
          <Section title="Experience" subtitle="I have worked with…" contentClassName='grid gap-8 grid-cols-fit-96'>
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
            <Experience title="member" company='Red Robodragons' start='2021-09'>
              <ul>
                <li>Participate in robotics competitions.</li>
                <li>Program robots with Android Studio/OnBotJava</li>
                <li>Help other members with programming and mechanical design.</li>
              </ul>
            </Experience>
          </Section>
          <Section title="Achievement" subtitle="I have received…" contentClassName='grid gap-8 grid-cols-fit-96'>
            <Achievement title="Academic achievement" subtitle='in mathematics'>
              In 2021 fall award, I was the only student in my freshman class to receive
              the award for my outstanding performance in mathematics
            </Achievement>
            <Achievement title="GHP nomination">
              Governor’s honors program nomination in mathematics, computer programming,
              and mechanical engineering
            </Achievement>
            <Achievement title="Academic Letter">
              Upon start of the 2022 fall semester, I was awarded the academic letter
              for having high GPA in all subjects (NGA &gt; 95).
            </Achievement>
            <Achievement title="CyberPatriot First Place">
              Under my leadership, my team lambda won the first place in
              silver tier at Georgia open division.
            </Achievement>
          </Section>
          <Section title="Skills" subtitle="I can…" contentClassName='grid gap-8 grid-cols-fit-96'>
            <Skill title='Office' icons='file-powerpoint file-word file-excel file-pdf /about/tex.svg'>
              Utilize Microsoft Office to generate and modify documents,
              spreadsheets, and presentations while exhibiting a proficient
              understanding of design and layout principles, including the
              concept of reusability, in order to produce visually appealing and
              easily editable documents. I am also familiar with LaTeX.
            </Skill>
            <Skill title='Programming' type="brand" icons='python java git github /about/cpp.svg /about/pytorch.svg /about/tensorflow.svg'>
              I have a explored in various programming languages, including Python, Java, and C++. I can write spiders, do data analysis, and build websites. I am also familiar with machine learning frameworks such as PyTorch and TensorFlow. I also understand version control with Git and GitHub.
            </Skill>
            <Skill title="Cybersecurity" type="brand" icons="ubuntu centos redhat fedora">
              I have experience with Linux administration, including installing and configuring Linux distributions, managing users and groups, and using the command line to perform various tasks. I am OK with both Debian-based and Red Hat-based distributions.
            </Skill>
            <Skill title="Web development" icons="/about/nextjs.svg /about/react.svg /about/tailwindcss.svg /about/sass.svg /about/typescript.svg">
              I have experience with web development, including building websites with Next.js, React, and Tailwind CSS. I am also familiar with Sass and TypeScript. This website is built with Next.js and Tailwind CSS, deployed through Github Action.
            </Skill>
          </Section>
          <Section title="Contact" subtitle="You can reach me at…" contentClassName='grid gap-4 grid-cols-fit-96'>
            <Contact type="email" value="cao2006721@gmail.com" />
            <Contact type="discord" value="yubo#6746" />
            <Contact type="github" value="yubo-cao" />
            <Contact type="tel" value="4709549826" />
          </Section>
        </main>
        <StickNav />
      </div>
    </>
  )
}
