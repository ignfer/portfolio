export default function CardBase({className,children, ...props}){
  return (
      <div className={`cursor-pointer p-2 rounded-xl border border-stone-200 shadow-sm shadow-stone-200/50 flex flex-col gap-2 duration-200 hover:shadow-xs hover:border-stone-300 ${className || ''}`} {...props}>
          {children}
      </div>
  );
}