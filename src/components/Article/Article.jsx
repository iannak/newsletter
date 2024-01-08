const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="alura-card">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
      <div className="w-full pr-5 flex gap-2 justify-end">
        {tags.map((tag) => (
          <span key={tag} className="px-4 py-1 bg-alura-100 dark:bg-dark-100 rounded-full text-gray-200 text-xs font-bold uppercase hover:bg-alura-200 houver:scale-110">
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p key={index} className="text-alura-200 dark:text-gray-400">
            {content}
          </p>
        ))}
      </div>
      {image && (
        <img className="sm:p-4" src={image} alt={alt} />
      )}
    </div>
  );
};

export default Article