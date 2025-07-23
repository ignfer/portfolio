export default function Badge({content, className}){
    return(
        <p className={`h-fit font-inter text-sm text-stone-50 py-0.5 px-2 border rounded-md shadow-sm ${className || ''}`}>
          {content}
        </p>
    );
}