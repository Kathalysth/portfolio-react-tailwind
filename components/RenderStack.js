function RenderStack({ stacks }) {
  return stacks.length > 0 ? (
    <ul className="flex gap-4">
      {stacks.map((stack, index) => (
        <li key={index + 1}>{stack.icon}</li>
      ))}
    </ul>
  ) : null;
}

export default RenderStack;
