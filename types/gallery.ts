export type Gallery = {
  id: number;
  title: string;
  image: string;
  album: Album;
};

type Album = {
  firstColumn: FirstColumn[];
  secondColumn: SecondColumn[];
};

type FirstColumn = {
  image: string;
  id: number;
};

type SecondColumn = {
  image: string;
  id: number;
};

export type singleGallery = {
  image: string;
};
