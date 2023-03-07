import HeaderLayout from "../../components/layouts/HeaderLayout";
import { Project, Section } from "@/components";

export default function Projects() {
    return (
        <>
            <HeaderLayout active="projects">
                <Section
                    title=""
                    flow={true}
                    contentStyle={{ gridAutoRows: "1fr" }}
                >
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
                        title="Redo List"
                        name="/images/about/redo-list.png"
                        url="https://github.com/Yubo-Cao/redo-list"
                    >
                        An advanced, ergnomic, and powerful todo list with a
                        kanban and a markdown editor integrated inside.
                    </Project>
                    <Project
                        title="Algorithms"
                        name="/images/about/flow-chart.png"
                        iconSize={48}
                        url="https://www.github.com/yubo-cao/Algorithms"
                    >
                        A collection of solutions to common algorithms question
                        and a book regarding them. Built with <code>C++</code>,{" "}
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
                        title="Quizlet Helper"
                        name="help"
                        url="https://github.com/Yubo-Cao/quizlet_helper"
                    >
                        A tool to manage and create Quizlet sets. Built with{" "}
                        <code>Python</code>
                        and <code>Playwright</code>.
                    </Project>
                    <Project
                        title="Code Highlighter"
                        name="code"
                        iconSize={48}
                        url="/projects/highlighter"
                    >
                        A small tool created with <code>React</code> and to make
                        it easier to share code snippets and embed them in PPT.
                    </Project>
                </Section>
            </HeaderLayout>
        </>
    );
}
