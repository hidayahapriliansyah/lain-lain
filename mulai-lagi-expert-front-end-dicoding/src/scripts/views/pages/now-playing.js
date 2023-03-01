import TheMovieDbSource from '../../data/themoviedb-source';

const NowPlaying = {
  async render() {
    return `
      <h2>Now Playing Page</h2>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.log('ini daftar movies', movies);
    console.log(movies);

    // TODO
    // tampilkan movie di dalam DOM
  },
};

export default NowPlaying;
