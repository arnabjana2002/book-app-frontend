const getImageURL = (name) => {
  return new URL(`../assets/books/${name}`, import.meta.url);
};

export { getImageURL };
