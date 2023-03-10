import { NavigationLayout, Section } from "@/components";
import Head from "next/head";
import {
    Experience,
    Project,
    Achievement,
    Skill,
    Contact
} from "@/components/abouts";

export default function Home() {
    return (
        <NavigationLayout active="About" navigationClassName="mt-24">
            <Head>
                <title>Yubo Cao - About</title>
                <meta
                    name="description"
                    content="About Yubo Cao: a highly motivated and ambitious sophomore with a passion for programming and artificial intelligence."
                />
            </Head>
            <h1>About me</h1>
            <Section title="Projects" flow={true}>
                <Project
                    title="My Website"
                    name="public"
                    url="https://yubo-cao.github.io"
                >
                    A gallery of my projects and a blog. Built with
                    <code>Next.js</code>, <code>React</code>,{" "}
                    <code>Tailwind CSS</code>,<code>SASS</code>, and{" "}
                    <code>TypeScript</code>.
                </Project>
                <Project
                    title="RCNN Object detection"
                    name="/images/about/object.png"
                    iconSize={48}
                    url="https://www.github.com/yubo-cao/RedFTCController"
                    recolor={true}
                >
                    An F-RCNN detection model for the FTC robotics competition.
                    Built with <code>Python</code> and <code>PyTorch</code>.
                </Project>
                <Project
                    title="Algorithms"
                    name="/images/about/flow-chart.png"
                    iconSize={48}
                    url="https://www.github.com/yubo-cao/Algorithms"
                    recolor={true}
                >
                    A collection of solutions to common algorithms question and
                    a book regarding them. Built with <code>C++</code>,{" "}
                    <code>Java</code>, and <code>LaTeX</code>.
                </Project>
                <Project
                    title="Chemistry Language"
                    name="science"
                    url="https://github.com/Yubo-Cao/chemistry_language"
                >
                    A programming language for chemistry supporting chemical
                    equations and dimensional analysis. Built with{" "}
                    <code>Python</code>.
                </Project>
                <Project
                    title="Redo-list"
                    name="list"
                    url="https://github.com/Yubo-Cao/todo_list"
                >
                    A super powerful todo-list program. Built with <code>Tauri</code> and{" "}
                    <code>Next.js</code>.
                </Project>
                <Project
                    title="Quizlet Helper"
                    name="help"
                    url="https://github.com/Yubo-Cao/quizlet_helper"
                >
                    A tool to manage and create Quizlet sets. Built with{" "}
                    <code>Python</code>
                    and <code>Playwright</code>.
                </Project>
            </Section>
            <Section title="Experience" flow={true}>
                <Experience
                    title="officer"
                    company="Computer Science Club"
                    start="2022-09"
                >
                    <ul>
                        <li>
                            Create instructional materials, plan activities, and
                            be present at regular meetings.
                        </li>
                        <li>
                            Participate in initiatives including internet,
                            machine learning, and cyber security.
                        </li>
                        <li>Assisting members of the computer science club</li>
                    </ul>
                </Experience>
                <Experience title="tutor" company="Learn to be" start="2022-05">
                    <ul>
                        <li>
                            Tutor students about knowledge of CS, math, and
                            physics/chemistry
                        </li>
                        <li>
                            Help students with homework and prepare for tests.
                        </li>
                    </ul>
                </Experience>
                <Experience
                    title="member"
                    company="Tri-M music honor society"
                    start="2022-05"
                >
                    <ul>
                        <li>
                            Participate in music performances and competitions.
                        </li>
                        <li>Help organize and run music events.</li>
                        <li>
                            Help students with music theory and instrument
                            playing.
                        </li>
                    </ul>
                </Experience>
                <Experience
                    title="member"
                    company="Red Robodragons"
                    start="2021-09"
                >
                    <ul>
                        <li>Participate in robotics competitions.</li>
                        <li>Program robots with Android Studio/OnBotJava</li>
                        <li>
                            Help other members with programming and mechanical
                            design.
                        </li>
                    </ul>
                </Experience>
            </Section>
            <Section title="Achievement" flow={true}>
                <Achievement
                    title="Academic achievement"
                    subtitle="in mathematics"
                >
                    In 2021 fall award, I was the only student in my freshman
                    class to receive the award for my outstanding performance in
                    mathematics
                </Achievement>
                <Achievement title="GHP nomination">
                    Governor???s honors program nomination in mathematics,
                    computer programming, and mechanical engineering
                </Achievement>
                <Achievement title="Academic Letter">
                    Upon start of the 2022 fall semester, I was awarded the
                    academic letter for having high GPA in all subjects (NGA
                    &gt; 95).
                </Achievement>
                <Achievement title="CyberPatriot First Place">
                    Under my leadership, my team lambda won the first place in
                    silver tier at Georgia open division.
                </Achievement>
            </Section>
            <Section title="Skills" flow={true}>
                <Skill
                    title="Office"
                    icons="file-powerpoint file-word file-excel file-pdf /images/about/TeX.svg"
                >
                    Utilize Microsoft Office to generate and modify documents,
                    spreadsheets, and presentations while exhibiting a
                    proficient understanding of design and layout principles,
                    including the concept of usability, in order to produce
                    visually appealing and easily editable documents. I am also
                    familiar with LaTeX.
                </Skill>
                <Skill
                    title="Programming"
                    type="brand"
                    icons={
                        "python java git github " +
                        "cpp pytorch tensorflow"
                            .split(" ")
                            .map((x) => `/images/about/${x}.svg`)
                            .join(" ")
                    }
                >
                    I have a explored in various programming languages,
                    including Python, Java, and C++. I can write spiders, do
                    data analysis, and build websites. I am also familiar with
                    machine learning frameworks such as PyTorch and TensorFlow.
                    I also understand version control with Git and GitHub.
                </Skill>
                <Skill
                    title="Cyber-security"
                    type="brand"
                    icons="ubuntu centos redhat fedora"
                >
                    I have experience with Linux administration, including
                    installing and configuring Linux distributions, managing
                    users and groups, and using the command line to perform
                    various tasks. I am OK with both Debian-based and Red
                    Hat-based distributions.
                </Skill>
                <Skill
                    title="Web development"
                    icons={"nextjs react tailwindcss sass typescript"
                        .split(" ")
                        .map((x) => `/images/about/${x}.svg`)
                        .join(" ")}
                >
                    I have experience with web development, including building
                    websites with Next.js, React, and Tailwind CSS. I am also
                    familiar with Sass and TypeScript. This website is built
                    with Next.js and Tailwind CSS, deployed through Github
                    Action.
                </Skill>
            </Section>
            <Section title="Contact" flow={true}>
                <Contact type="email" value="cao2006721@gmail.com" />
                <Contact type="discord" value="yubo#6746" />
                <Contact type="github" value="yubo-cao" />
            </Section>
        </NavigationLayout>
    );
}
