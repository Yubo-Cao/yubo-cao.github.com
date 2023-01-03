import Editor from "@monaco-editor/react";
import html2canvas from "html2canvas";
import { useState } from "react";
import HeaderLayout from "../../components/HeaderLayout";
import Highlighter from "../../components/Highlighter";
import Section from "../../components/Section";
import Title from "../../components/Title";
import { cls } from "../../lib/utils";

export default function HL() {
    const [lang, setLang] = useState("bash"),
        [code, setCode] = useState("echo 'Hello World!'"),
        [elevate, setElevated] = useState(0),
        [width, setWidth] = useState("auto");

    const screenShot = (callback: (blob: Blob | null) => any) => {
        const hl: HTMLElement | null = document.querySelector(".hl"),
            first = hl?.firstChild as HTMLElement;

        if (!hl) return;

        const rect = hl.getBoundingClientRect(),
            w = rect.width,
            h = rect.height;

        hl.classList.remove("border-slate-500", "border");
        first.classList.remove("p-4");
        first.classList.add("pb-6", "pt-2", "px-4");

        return html2canvas(hl, {
            width: w,
            height: h
        }).then((canvas) => {
            hl.classList.add("border-slate-500", "border");
            first.classList.add("p-4");
            first.classList.remove("pb-6", "pt-2", "px-4");
            return canvas.toBlob(callback);
        });
    };

    return (
        <>
            <HeaderLayout active="projects">
                <Title level={1}>Highlighter</Title>
                <Section alternate="none" className="py-4">
                    <Title level={2}>Output</Title>
                    <div
                        className={cls(
                            "hl",
                            "p-4",
                            "border",
                            "border-slate-500"
                        )}
                        style={{ width: width }}
                    >
                        <Highlighter
                            language={lang}
                            code={code}
                            className={cls(
                                {
                                    0: "",
                                    1: "shadow-sm",
                                    2: "shadow",
                                    3: "shadow-lg",
                                    4: "shadow-xl",
                                    5: "shadow-2xl"
                                }[elevate] || "",
                                "h-full"
                            )}
                        />
                    </div>
                </Section>
                <Section alternate="this" className="pt-4" avoidTOC={false}>
                    <Title level={2}>Options</Title>
                    <div className="grid gap-8 p-4 root items-center">
                        <label htmlFor="lang">Language</label>
                        <select
                            id="lang"
                            value={lang}
                            onChange={(e) => setLang(e.target.value)}
                            className="rounded border-slate-300 p-4"
                        >
                            <option value="bat">Bat</option>
                            <option value="javascript">JavaScript</option>
                            <option value="typescript">TypeScript</option>
                            <option value="json">JSON</option>
                            <option value="python">Python</option>
                            <option value="perl">Perl</option>
                            <option value="powershell">PowerShell</option>
                            <option value="bash">Bash</option>
                            <option value="c">C</option>
                        </select>
                        <label htmlFor="code">Code</label>
                        <div className="overflow-hidden rounded">
                            <Editor
                                language={lang}
                                value={code}
                                onChange={(value, _event) => {
                                    // @ts-ignore
                                    setCode(value);
                                }}
                                height="20rem"
                                className="rounded"
                            />
                        </div>
                        <label htmlFor="elevate">Elevation</label>
                        <div className="rounded border-slate-300 p-4 bg-white">
                            <input
                                type="range"
                                id="elevate"
                                min="0"
                                max="5"
                                value={elevate}
                                onChange={(e) =>
                                    setElevated(parseInt(e.target.value))
                                }
                                className=""
                            />
                        </div>
                        <label htmlFor="width">Width</label>
                        <input
                            type="text"
                            id="width"
                            onChange={(e) => setWidth(e.target.value)}
                            value={width}
                            className="rounded border-slate-300 p-4"
                        />
                        <style jsx>
                            {`
                                .root {
                                    grid-template-columns: 5rem calc(
                                            100% - 6rem
                                        );
                                }

                                .root label {
                                    text-align: right;
                                    font-weight: 600;
                                    font-size: 1.2rem;
                                }
                            `}
                        </style>
                    </div>
                </Section>
                <div className="my-8 flex gap-4">
                    <button
                        className={cls(
                            "bg-primary-400",
                            "text-white",
                            "p-4",
                            "rounded-full"
                        )}
                        onClick={() => {
                            screenShot((blob) => {
                                if (!blob) return;
                                const a = document.createElement("a");
                                a.href = URL.createObjectURL(blob);
                                a.download = "highlighter.png";
                                a.click();
                            });
                        }}
                    >
                        Download
                    </button>
                    <button
                        className={cls(
                            "bg-primary-400",
                            "text-white",
                            "p-4",
                            "rounded-full"
                        )}
                        onClick={() => {
                            screenShot((blob) => {
                                if (!blob) return;
                                navigator.clipboard.write([
                                    new ClipboardItem({
                                        "image/png": blob
                                    })
                                ]);
                            });
                        }}
                    >
                        Copy to Clipboard
                    </button>
                </div>
            </HeaderLayout>
        </>
    );
}
