import { NavLink, useLocation } from 'react-router-dom';
import css from './ListMovies.module.css';

export const ListMovies = ({ arrayMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {arrayMovies.map(({ id, original_title }) => {
        return (
          <li key={id} className={css.list}>
            <NavLink
              className={css.list__link}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {original_title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
