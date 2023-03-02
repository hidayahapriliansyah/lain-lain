import { openDB } from 'idb';

const DB_NAME = 'my-pwa-database';
const OBJECT_STORE_NAME = 'movie';

/**
 * objext store itu bisa diibaratin kayak collection atau table kalau di database
 * terus keyPath itu kayak primary key, atau ObjectId nya
 * bisa ngelakuin crud juga
 */

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const Database = {
  async getAllMovie() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async getMovie(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME);
  },

  async addMovie(movie) {
    return (await dbPromise).add(OBJECT_STORE_NAME, movie);
  },

  async updateMovie(movie) {
    return (await dbPromise).put(OBJECT_STORE_NAME, movie);
  },

  async deleteMovie(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  }
};

export default Database;
