import Api from './api';

const ArtistsService = {
//   index: () => Api.get('/dashboard'),
  show: (id) => Api.get(`/artists/${id}`)
}

export default ArtistsService;