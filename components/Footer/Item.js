const Item = ({ Links, title }) => {
  return (
    <ul>
      <li>
        <h1 className="mb-4 text-2xl font-semibold dark:text-gray-200 text-gray-600">
          {title}
        </h1>
      </li>
      {Links.map((link) => (
        <li key={link.name} className="mb-2">
          <a
            className="text-gray-400 dar hover:text-teal-400 duration-300
          text-lg cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
