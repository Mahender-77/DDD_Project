import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { dracula } from '@uiw/codemirror-theme-dracula';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
 
export const CodeEditor = () => {
  const [files, setFiles] = useState({
    'script.js': `// Welcome to the Code Editor
function helloWorld() {
  console.log("Hello, World!");
}

































`,
    'style.css': `/* Add your CSS here */
body {
  background-color: #f4f4f9;
 
}

































`,
    'index.html': `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
































`,
  });

  const [activeFile, setActiveFile] = useState('script.js');
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [language, setLanguage] = useState('javascript');
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const languages = [
    { value: 'java', label: 'Java' },
    { value: 'python', label: 'Python' },
    { value: 'cpp', label: 'C' },
    { value: 'cpp', label: 'C++' },
    { value: 'csharp', label: 'C#' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'javascript', label: 'JavaScript' },
  ];

  const handleMenuClick = (event, filename) => {
    setAnchorEl(event.currentTarget);
    setSelectedFile(filename);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedFile(null);
  };

  const handleRename = () => {
    const newName = prompt('Enter new file name:', selectedFile);
    if (newName && newName !== selectedFile) {
      const newFiles = { ...files };
      newFiles[newName] = newFiles[selectedFile];
      delete newFiles[selectedFile];
      setFiles(newFiles);
      if (activeFile === selectedFile) {
        setActiveFile(newName);
      }
    }
    handleMenuClose();
  };

  const getLanguageExtension = (lang) => {
    switch (lang) {
      case 'javascript':
        return javascript();
      case 'html':
        return html();
      case 'css':
        return css();
      case 'java':
        return java();
      case 'python':
        return python();
      case 'cpp':
        return cpp();
      default:
        return javascript();
    }
  };

  const createNewFile = (e) => {
    if (e.key === 'Enter' && newFileName.trim() !== '') {
      if (files[newFileName]) {
        setConsoleOutput((prev) => [...prev, `File ${newFileName} already exists`]);
        return;
      }
      setFiles((prev) => ({
        ...prev,
        [newFileName]: ''
      }));
      setActiveFile(newFileName);
      setNewFileName('');
      setShowNewFileInput(false);
    }
  };

  const deleteFile = () => {
    if (Object.keys(files).length <= 1) {
      setConsoleOutput((prev) => [...prev, "Cannot delete the last file"]);
      return;
    }
    const newFiles = { ...files };
    delete newFiles[selectedFile];
    setFiles(newFiles);
    setActiveFile(Object.keys(newFiles)[0]);
    handleMenuClose();
  };

  const runCode = () => {
    try {
      setConsoleOutput([]);
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        setConsoleOutput((prevOutput) => [...prevOutput, args.join(' ')]);
        originalConsoleLog(...args);
      };
      eval(files[activeFile]);
      console.log = originalConsoleLog;
    } catch (error) {
      setConsoleOutput((prevOutput) => [...prevOutput, `Error: ${error.message}`]);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', padding: '10px', backgroundColor: '#fffdf2' }}>
      <div style={{ width: '15%', backgroundColor: '#fffdf2', padding: '10px', color: '#000' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ margin: 0 }}>Files</h3>
          <AddIcon 
            onClick={() => setShowNewFileInput(true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        {showNewFileInput && (
          <input
            type="text"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
            onKeyPress={createNewFile}
            // placeholder="Enter file name and press Enter"
            style={{
              width: '80%',
              height:"35px",
              border: '1px solid #ccc',
              padding: '4px',
              marginBottom: '10px',
              backgroundColor:'#0000001a'
            }}
            autoFocus
          />
        )}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {Object.keys(files).map((file) => (
            <li
              key={file}
              style={{
                padding: '8px',
                backgroundColor: activeFile === file ? '#e6e4da' : 'transparent',
                borderRadius: '4px',
                marginBottom: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span 
                onClick={() => setActiveFile(file)}
                style={{ cursor: 'pointer', flex: 1, textAlign: 'left' }}
              >
                {file}
              </span>
              <MoreVertIcon 
                onClick={(e) => handleMenuClick(e, file)}
                style={{ cursor: 'pointer' }}
              />
            </li>
          ))}
        </ul>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleRename}>Rename</MenuItem>
          <MenuItem onClick={deleteFile}>Delete</MenuItem>
        </Menu>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              backgroundColor: '#fffdf2',
              color: '#000',
              border: '1px solid #000',
              cursor: 'pointer',
            }}
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <div style={{ flex: 1, border: '1px solid #000', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#fffdf2', color: '#000' }}>
          <CodeMirror
            value={files[activeFile]}
            height="100%"
            theme={dracula}
            extensions={[getLanguageExtension(language)]}
            onChange={(value) => setFiles({ ...files, [activeFile]: value })}
            options={{
              lineNumbers: true,
              tabSize: 2,
              autoCloseBrackets: true,
              matchBrackets: true,
              styleActiveLine: true,
              minLines: 32,
              lineWrapping: true
            }}
            style={{ textAlign: 'left' }}
          />
        </div>

        <div style={{ height: '20%', border: '1px solid #000', borderRadius: '4px', marginTop: '10px', backgroundColor: '#fffdf2', color: '#000', padding: '10px', overflowY: 'auto', textAlign: 'left' }}>
          <h3>Console Output</h3>
          <pre style={{ margin: 0, textAlign: 'left' }}>
            {consoleOutput.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </pre>
        </div>
      </div>

      <button
        onClick={runCode}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Run Code
      </button>
    </div>
  );
};