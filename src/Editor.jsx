// src/Editor.jsx
import React, { useEffect } from 'react';
import Editor from '@monaco-editor/react';
import './App.css';

const EDITOR_STYLE = {
    height: '100%',
    width: '100%',
    border: '5px solid red',
    borderRadius: '5px',
    overflow: 'hidden',
    margin: '1px',

};

const MonacoEditor = ({ value, onChange, language }) => {


    return (
        <div style={EDITOR_STYLE}>
            <Editor
                theme="vs-dark"
                language={language}
                height="400px"
                defaultValue={value}
                onChange={onChange}
                options={{
                    automaticLayout: true,
                }}
            />
        </div>
    );
};

export default MonacoEditor;
