const URL = "https://pixabay.com/api/";
const KEY = "22387532-0967f6e2e55f286a38e8c1dae";

const ImageApiService = (searchQuery, page = 1) => {
  return fetch(
    `${URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((res) => res.json());
};

export default ImageApiService;
