import { MyRecommendationsDocument } from '@/shared/graphql/graphql';
import { useQuery } from '@apollo/client';

export const useGetMyRecommendations = () => {
  const { data, loading } = useQuery(MyRecommendationsDocument);
  return { data, loading };
};
