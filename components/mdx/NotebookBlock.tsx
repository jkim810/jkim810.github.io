interface NotebookBlockProps {
  code: string;
  output: string;
}

export default function NotebookBlock({ code, output }: NotebookBlockProps) {
  return (
    <div className="my-6">
      {/* Code block */}
      <div>
        <div
          style={{
            fontSize: '0.75rem',
            color: '#9ca3af',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '0.25rem',
          }}
        >
          IN
        </div>
        <pre
          style={{
            backgroundColor: '#f3f4f6',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            padding: '1rem',
            whiteSpace: 'pre-wrap',
            overflowX: 'auto',
            margin: 0,
          }}
        >
          {code}
        </pre>
      </div>

      {/* Output block */}
      <div style={{ marginTop: '0.5rem' }}>
        <div
          style={{
            fontSize: '0.75rem',
            color: '#9ca3af',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '0.25rem',
          }}
        >
          OUT
        </div>
        <pre
          style={{
            backgroundColor: '#ffffff',
            borderLeft: '3px solid #e5e7eb',
            padding: '1rem',
            fontSize: '0.875rem',
            color: '#374151',
            whiteSpace: 'pre-wrap',
            margin: 0,
          }}
        >
          {output}
        </pre>
      </div>
    </div>
  );
}
