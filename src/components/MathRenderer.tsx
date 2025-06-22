import React, { useEffect, useRef } from 'react';

interface MathRendererProps {
  content: string;
  inline?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ 
  content, 
  inline = false, 
  className = '' 
}) => {
  const mathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mathRef.current && window.katex) {
      try {
        // Clear previous content
        mathRef.current.innerHTML = '';
        
        // Process the content to find and render LaTeX
        const processedContent = processLatexContent(content, inline);
        mathRef.current.innerHTML = processedContent;
      } catch (error) {
        console.error('KaTeX rendering error:', error);
        // Fallback to plain text if rendering fails
        mathRef.current.textContent = content;
      }
    } else {
      // Fallback if KaTeX is not available
      if (mathRef.current) {
        mathRef.current.textContent = content;
      }
    }
  }, [content, inline]);

  return <div ref={mathRef} className={className} />;
};

function processLatexContent(content: string, _defaultInline: boolean): string {
  // Replace display math ($$...$$)
  content = content.replace(/\$\$(.*?)\$\$/g, (match, latex) => {
    try {
      return window.katex.renderToString(latex, { displayMode: true });
    } catch (error) {
      console.error('Display math rendering error:', error);
      return match;
    }
  });

  // Replace inline math ($...$) - Updated regex to handle escaped dollar signs
  content = content.replace(/\$((?:[^$\\]|\\.)*?)\$/g, (match, latex) => {
    try {
      return window.katex.renderToString(latex, { displayMode: false });
    } catch (error) {
      console.error('Inline math rendering error:', error);
      return match;
    }
  });

  return content;
}

// Extend the Window interface to include katex
declare global {
  interface Window {
    katex: any;
  }
}