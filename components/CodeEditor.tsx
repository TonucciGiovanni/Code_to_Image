"use client";
import React, {useEffect} from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import { getExtension, initialCode } from "@/utils/utilities";

interface CodeEditorProps {
    language: string;
    theme: string;
    icon: string;
    background?: string;
    currentPadding?: string;
}

function CodeEditor({
    language,
    theme,
    icon,
    background,
    currentPadding,
}: CodeEditorProps) {
const [width, setWidth] = React.useState(1000);
const [height, setHeight] = React.useState<number | null>(500);
const [title, setTitle] = React.useState("Untitled-1");
const [code, setCode] = React.useState(initialCode);

const [extension, setExtension] = React.useState(".js");

  useEffect(() => {
    // Update the extension when the language changes
    setExtension(getExtension(language));
  }, [language]);


const handleCodeChange = (newCode: string) => {
    setCode(newCode);
};

const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Extract the title without the extension
    const newTitle = e.target.value.split(".")[0];
    setTitle(newTitle);
  };

//@ts-ignore
const handleResize = (evt, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
};

const updateSize = () => {
    setWidth(window.innerWidth);
};

useEffect (() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
}, []);

    return ( 
    <Resizable 
    minHeight={466} 
    minWidth={510} 
    maxWidth={1000} 
    defaultSize={{
        width: width,
        height: height || 500,
    }}
    onResize={handleResize}
    className="resize-container relative"
    style={{
        background: background,
    }}
    >
        <div 
        className="code-block"
        style={{
            padding: currentPadding,
        }}
        >
            <div className="code-title h-[52px] px-4 flex items-center justify-between
            bg-black bg-opacity-80"
            
            >
                <div className="dots flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
                </div>

                <div className="input-control w-full">
                    <input 
                    type="text" 
                    value={`${title}${extension}`} 
                    onChange={(e) => handleTitleChange(e)}
                    className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium 
                    text-center bg-transparent"
                    style={{
                        lineHeight: "1.8rem",
                      }}
                    />
                </div>

                <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm">

                    <img src={icon} className="w-[33px]" alt="" />
                    
                </div>

            </div>
            <AceEditor 
            value={code} 
            name="UNIQUE_ID_OF_DIV" 
            fontSize={16} 
            theme={theme} 
            mode={language.toLocaleLowerCase()} 
            showGutter={false} 
            wrapEnabled={true}
            height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`} 
            showPrintMargin={false} 
            highlightActiveLine={false} 
            editorProps={{$blockScrolling: true}} 
            className="ace-editor-container"
            onChange={handleCodeChange} 
            />
        </div>
    </Resizable>
    );
}

export default CodeEditor;