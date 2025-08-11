import React from "react";

interface Props {
  currentBlogItem?: {
    id: number;
    title: string;
    date?: string;
    content?: {
      intro: string;
      sections: { title: string; text: string }[];
    };
  };
}

const BlogModalText = ({ currentBlogItem }: Props) => {
  const defaultDate = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!currentBlogItem) {
    return <p>No blog selected</p>;
  }

  return (
    <div className="blog-text-container">
      <div className="text-top-section">
        <h4 className="blog-title-text">{currentBlogItem.title}</h4>
        <div className="rightside-text">
          <p>
            <i className="fa-light fa-user"></i> Author: Vincent Hermansson
          </p>
          <p>
            <i className="fa-light fa-clock"></i>{" "}
            {currentBlogItem.date ?? defaultDate}
          </p>
        </div>
      </div>
      <div className="text-bottom-section">
        {currentBlogItem.content ? (
          <>
            <p>{currentBlogItem.content.intro}</p>
            {currentBlogItem.content.sections.map(({ title, text }, idx) => (
              <React.Fragment key={idx}>
                <h4 className="blog-paragraph-title">{title}</h4>
                <p>{text}</p>
              </React.Fragment>
            ))}
          </>
        ) : (
          <p>Content not available for this blog post.</p>
        )}
      </div>
    </div>
  );
};

export default BlogModalText;
