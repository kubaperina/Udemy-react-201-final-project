import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
      let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

      //SUBSTITUTE IMAGE IF THERE IS NONE TO BE FOUND IN API
      if(movie.poster_path == null){
        posterUrl = 'https://ih1.redbubble.net/image.1893341687.8294/fposter,small,wall_texture,product,750x1000.jpg'
      }

      const detailUrl = `/movies/${movie.id}`
      return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
          <div className="card">
            <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
            <div className="card-body">
              <h5 className="card-title">{movie.original_title}</h5>
              <Link to={detailUrl} className="btn btn-primary">Show details</Link>
            </div>
          </div>
        </div>
      )
}

const EmptyCard = ({ text }) => {
    return(
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
          <h3 className="display-2 text-center">This result <strong><u><i>{text}</i></u></strong> doesn't show anything...</h3>
          <img src='https://ih1.redbubble.net/image.1893341687.8294/fposter,small,wall_texture,product,750x1000.jpg'  className="mx-auto d-block" alt='error not found' />
          </div>
        </div>
      </div>
    )
}

//TMDB API KEY = ac08ec95493355af0c3613204cb28bcb

const SearchView = ({ keyword, searchResults }) => {
    let title = `You are searching for ${keyword}`
    let negResult = false
    
    if (Object.keys(searchResults).length === 0){
        negResult = true;
        }      

    
    const resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i} />
    })

    return (
    <>
      <Hero text={title} />
      {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}      
          </div>
        </div>
      }
      {negResult &&
          <div className="container">
              <div className="row">
                <EmptyCard text={keyword}/>
              </div>
          </div>
      } 
    </>
  );
};

export default SearchView;
