export const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </>
  );
};
