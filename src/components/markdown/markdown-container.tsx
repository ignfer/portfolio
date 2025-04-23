import './markdown-container.css';

export default function MarkdownContainer({children}) {
  return (
    <div className={'markdown-container w-3/4'}>
      {children}
    </div>
  );
}