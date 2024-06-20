export enum RecommendationType {
  MOVIE = 'MOVIE',
  MUSIC = 'MUSIC',
  ANIME = 'ANIME',
  BOOK = 'BOOK',
  HOBBY = 'HOBBY',
  TODO = 'TODO',
  SERIES = 'SERIES',
}

interface IRecommendationType {
  title: string;
  type: RecommendationType;
}

export const recommendationTypes: IRecommendationType[] = [
  { title: 'Фильмы', type: RecommendationType.MOVIE },
  { title: 'Сериалы', type: RecommendationType.SERIES },
  { title: 'Музыка', type: RecommendationType.MUSIC },
  { title: 'Аниме', type: RecommendationType.ANIME },
  { title: 'Книги', type: RecommendationType.BOOK },
  { title: 'Хобби', type: RecommendationType.HOBBY },
  { title: 'Идеи чем заняться', type: RecommendationType.TODO },
];
