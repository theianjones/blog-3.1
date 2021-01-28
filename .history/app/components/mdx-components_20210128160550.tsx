import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/palenight'

const Code = ({children, className = ''}: any) => {
  const language = className.replace(/language-/, '')
  return (
    <div className="lg:-mx-5">
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language}
        theme={theme}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: '20px',
              fontSize: '85%',
              borderRadius: 5,
              marginBottom: '1.25rem',
              overflowX: 'auto',
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default {
  code: Code,
  pre: (preProps: any) => <pre {...preProps} />,
  table: (tableProps: any) => (
    <div
      style={{
        overflowX: 'auto',
        width: '100%',
      }}
    >
      <table {...tableProps}>{tableProps.children}</table>
    </div>
  ),
}
