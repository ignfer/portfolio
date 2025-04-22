import './markdown-container.css';

export default function MarkdownContainer({children}) {
  return (
    <div className={'markdown-container'}>
      {children}
    </div>
  );
}