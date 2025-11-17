import React from 'react';
import { createRoot } from 'react-dom/client';

const ReactHtml = () => {
  return (
    <div>
      <h2>React</h2>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<ReactHtml/>);
}