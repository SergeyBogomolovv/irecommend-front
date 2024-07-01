import { RecommendationType } from '../graphql/graphql';

interface IRecommendationType {
  title: string;
  type: RecommendationType;
}

export const recommendationTypes: IRecommendationType[] = [
  { title: 'Фильмы', type: RecommendationType.Movie },
  { title: 'Сериалы', type: RecommendationType.Series },
  { title: 'Музыка', type: RecommendationType.Music },
  { title: 'Аниме', type: RecommendationType.Anime },
  { title: 'Книги', type: RecommendationType.Book },
  { title: 'Хобби', type: RecommendationType.Hobby },
  { title: 'Идеи чем заняться', type: RecommendationType.Todo },
];
