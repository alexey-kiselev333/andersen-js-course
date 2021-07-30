class Musician {
  constructor(url) {
    this.url = url;
  }

  async getAlbums() {
    const response = await fetch(this.url);
    return response.json();
  }
}
// eslint-disable-next-line import/prefer-default-export
export { Musician };
