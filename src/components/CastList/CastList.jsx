import css from './CastList.module.css';
export const CastList = ({ cast }) => {
  return (
    <>
      {cast.map(({ id, character, name, profile_path }) => {
        return (
          <li key={id}>
            <img
              className={css.img}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : `https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_150.jpg`
              }
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </>
  );
};
