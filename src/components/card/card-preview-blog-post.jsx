import CardBase from '@components/card/card-base.jsx';
import BadgeWip from '@components/badge/badge-wip.jsx';
import BadgeTag from '@components/badge/badge-tag.jsx';

import { navigate } from 'astro:transitions/client';

export default function CardPreviewBlogPost ({post,...props}){
    return(
        <CardBase
            onClick={() => !post.data.draft  && navigate(`/blog/${post.slug}`)}
            data-draft={post.data.draft}
            className={"group data-[draft=true]:cursor-not-allowed data-[draft=true]:opacity-70"}
        >
            <div className="flex flex-row justify-between">
                <h2 className="font-inter text-stone-900 font-bold underline group-data-[draft=true]:no-underline">{post.data.title}</h2>
                <div className="flex gap-1">
                    {post.data.draft && <BadgeWip/>}
                    <p className="text-stone-500 font-mono px-1 border border-stone-200 rounded-md">{post.data.lastModified}</p>
                </div>
            </div>
            <div className="flex flex-row gap-2">
                {
                    post.data.tags?.map((t) => {
                        return (
                            <BadgeTag content={t}/>
                        )
                    })
                }
            </div>
            <p className="text-stone-500 text-sm">{post.data.description}</p>
        </CardBase>
    )
}