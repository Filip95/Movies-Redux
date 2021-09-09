import * as moviesSagas from "./movies/sagas";
import * as activeUserSagas from "./activeUser/sagas";
// moviesSagas = {
//     watchGetMovies: function*() {},
//     watchAddMovie: function*() {},
//     watchDeleteMovie: function*() {},
// }

const sagas = {
  ...moviesSagas,
  ...activeUserSagas,
  // watchGetMovies: function*() {},
  // watchAddMovie: function*() {},
  // watchDeleteMovie: function*() {},
};

export default sagas;
