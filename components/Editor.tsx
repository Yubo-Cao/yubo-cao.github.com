import Editor from "@monaco-editor/react";
import {
    Dispatch,
    MutableRefObject,
    SetStateAction,
    useEffect,
    useRef
} from "react";

export type MonacoEditorOptions = {
    stopRenderingLineAfter: number;
};

export type Editor = MutableRefObject<any>;
export type Monaco = MutableRefObject<any>;
export type MonacoTextModal = any;

export type MonacoOnInitializePane = (
    monacoEditorRef: Editor,
    editorRef: Monaco,
    model: MonacoTextModal
) => void;

export type ScriptEditorProps = {
    code: string;
    setCode: Dispatch<SetStateAction<string>>;
    lang: string;
    editorOptions: MonacoEditorOptions;
    onInitializePane: MonacoOnInitializePane;
    [key: string]: any;
};

const ScriptEditor = (props: ScriptEditorProps): JSX.Element => {
    const { code, setCode, lang, editorOptions, onInitializePane, ...rest } =
        props;

    const monacoEditorRef = useRef<any | null>(null);
    const editorRef = useRef<any | null>(null);

    useEffect(() => {
        if (monacoEditorRef?.current) {
            const model: any = monacoEditorRef.current.getModels();

            if (model?.length > 0) {
                onInitializePane(monacoEditorRef, editorRef, model);
            }
        }
    });

    return (
        <Editor
            language={lang}
            onChange={(value, _event) => {
                // @ts-ignore
                setCode(value);
            }}
            onMount={(editor, monaco) => {
                monacoEditorRef.current = monaco.editor;
                editorRef.current = editor;
            }}
            options={editorOptions}
            value={code}
            {...rest}
        />
    );
};

export default ScriptEditor;
