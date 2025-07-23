import Badge from "@components/badge/badge.jsx";

export default function BadgeTag({content}){
  return (
    <Badge content={content} className="bg-stone-900/25 bg-linear-to-t from-blue-300/50 to-blue-400/50 border"/>
  );
}

