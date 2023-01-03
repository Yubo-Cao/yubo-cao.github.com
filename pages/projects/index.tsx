import HeaderLayout from "../../components/HeaderLayout";
import Project from "../../components/Project";

export default function Projects() {
    return (
        <>
            <HeaderLayout active="projects">
                <Project
                    title="Code Highlighter"
                    name="code"
                    iconSize={48}
                    url="/projects/highlighter"
                >
                    A small tool created with <code>React</code> and to make it
                    easier to share code snippets and embed them in PPT.
                </Project>
            </HeaderLayout>
        </>
    );
}
