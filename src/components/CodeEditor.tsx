import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  height?: string | number;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, height = '400px' }) => {
  return (
    <div className="code-editor-container">
      <Editor
        height={height}
        defaultLanguage="typescript"
        value={code}
        onChange={(value) => onChange(value || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          folding: true,
          bracketPairColorization: { enabled: true },
          padding: { top: 16, bottom: 16 },
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          fontLigatures: true,
          theme: 'vs-dark'
        }}
      />
    </div>
  );
};

export default CodeEditor;
