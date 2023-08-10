import PageLayout from "@/components/PageLayout";
import { ReactNode } from "react";

interface ArticleProps {
  title: string;
  imgUrl?: string;
  author: string;
  content: string;
  children: ReactNode;
}

const Article = (props: ArticleProps) => {
  return (
    <div className="article">
      <h1 id="title">{props.title}</h1>
      <img src="https://picsum.photos/200" alt="random photo" />
      <div id="content">{props.content}</div>
      <div id="children">{props.children}</div>
      <p id="attribution">Written by {props.author}</p>
    </div>
  );
};

export default Article;
