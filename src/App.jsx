import React, { useState } from 'react';
import MonacoEditor from './Editor';

const App = () => {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello, World!</h1>');
  const [cssCode, setCssCode] = useState('h1 { color: blue; }');
  const [jsCode, setJsCode] = useState('console.log("Hello, World!");');

  const [activeTab, setActiveTab] = useState('html');
  const srcDoc = `
  <html>
   <body>${htmlCode}<body/>
   <style>${cssCode}<style/>
   <script>${jsCode}<script/>
  <html/>
  `

  const handleHtmlChange = (value) => {
    setHtmlCode(value);
  };

  const handleCssChange = (value) => {
    setCssCode(value);
  };

  const handleJsChange = (value) => {
    setJsCode(value);
  };

  return (
    <div>

      <h1>Multi-Language Editor</h1>
      <div>
        <button onClick={() => setActiveTab('html')}>HTML</button>
        <button onClick={() => setActiveTab('css')}>CSS</button>
        <button onClick={() => setActiveTab('js')}>JavaScript</button>
        <div className='pane'>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      {activeTab === 'html' && (
        <MonacoEditor
          value={htmlCode}
          onChange={handleHtmlChange}
          language="html"
        />
      )}
      {activeTab === 'css' && (
        <MonacoEditor
          value={cssCode}
          onChange={handleCssChange}
          language="css"
        />
      )}
      {activeTab === 'js' && (
        <MonacoEditor
          value={jsCode}
          onChange={handleJsChange}
          language="javascript"
        />
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509985!2d144.9556517151313!3d-37.81628274207198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c8e4f24a8b8d!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1636193545209!5m2!1sen!2sau"
        width="600"
        height="450"
       style={{border:0}}
        allowfullscreen=""
        loading="lazy"
      ></iframe>


    </div>
  );
};

export default App;
