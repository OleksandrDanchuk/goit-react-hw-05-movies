import { CastList } from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const {
          data: { cast },
        } = await requestServer.movieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {cast.length ? (
        <ul>
          <CastList cast={cast} />
        </ul>
      ) : (
        <p>We don't have any acteurs for this movie</p>
      )}
    </>
  );
};

export default Cast;
