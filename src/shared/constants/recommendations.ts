import { RecommendationType } from '../graphql/graphql';
import { IoMdMusicalNote } from 'react-icons/io';
import { MdOutlineMovieFilter } from 'react-icons/md';
import { TbMovie } from 'react-icons/tb';
import { FaBook } from 'react-icons/fa';
import { GiBowman } from 'react-icons/gi';
import { LuListTodo } from 'react-icons/lu';
import { IconType } from 'react-icons/lib';
import { SiMyanimelist } from 'react-icons/si';

interface IRecommendationType {
  title: string;
  type: RecommendationType;
  icon: IconType;
}

export const recommendationTypes: IRecommendationType[] = [
  { title: 'Фильмы', type: RecommendationType.Movie, icon: TbMovie },
  {
    title: 'Сериалы',
    type: RecommendationType.Series,
    icon: MdOutlineMovieFilter,
  },
  { title: 'Музыка', type: RecommendationType.Music, icon: IoMdMusicalNote },
  { title: 'Аниме', type: RecommendationType.Anime, icon: SiMyanimelist },
  { title: 'Книги', type: RecommendationType.Book, icon: FaBook },
  { title: 'Хобби', type: RecommendationType.Hobby, icon: GiBowman },
  {
    title: 'Идеи чем заняться',
    type: RecommendationType.Todo,
    icon: LuListTodo,
  },
];
