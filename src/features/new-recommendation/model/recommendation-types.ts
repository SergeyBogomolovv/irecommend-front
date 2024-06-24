import { RecommendationType } from '@/shared/constants/recommendations';
interface IType {
  type: RecommendationType;
  label: string;
}
export const recommendationTypes: IType[] = [
  { type: RecommendationType.ANIME, label: 'Аниме' },
  { type: RecommendationType.BOOK, label: 'Книги' },
  { type: RecommendationType.HOBBY, label: 'Хобби' },
  { type: RecommendationType.MOVIE, label: 'Фильмы' },
  { type: RecommendationType.MUSIC, label: 'Музыка' },
  { type: RecommendationType.SERIES, label: 'Сериалы' },
  { type: RecommendationType.TODO, label: 'Идеи чем заняться' },
];
