import './Blog.css'
import MarkdownContainer from "../Markdown/MarkdownContainer.js";
import Markdown from "react-markdown";
import markdownContent from '../../docs/blog_posts/01_how_dhh_and_37signals_force_me_to_update_my_portfolio.md?raw';

export default function Blog() {

    return (
        <>
            <div className='blog'>
                <p>
                    Hey! I am currently working on improving this feature, but for now read my first post!
                </p>
                <MarkdownContainer>
                    <Markdown>{markdownContent}</Markdown>
                </MarkdownContainer>
            </div>
        </>
    );
}