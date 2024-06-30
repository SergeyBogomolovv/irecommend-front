import { Button, Divider } from '@nextui-org/react';
import { AddCommentForm, Comment } from '@/features/comment';
import { useGetComments } from '../model/use-get-comments';
import { Comment as IComment } from '@/shared/graphql/graphql';
import { CommentSkeleton } from '@/entities/comment';

interface Props {
  recommendationId: string;
}

export const CommentsList = ({ recommendationId }: Props) => {
  const {
    comments,
    loading,
    totalCount,
    isFetchAll,
    setIsFetchAll,
    canFetchMore,
  } = useGetComments(recommendationId);
  return (
    <div className="space-y-4 w-full">
      <AddCommentForm recommendationId={recommendationId} />
      {loading ? (
        <>
          <CommentSkeleton />
          <CommentSkeleton />
        </>
      ) : (
        <>
          {!!comments?.length && <Divider />}
          {comments?.map((comment) => (
            <Comment key={comment.id} comment={comment as IComment} />
          ))}
        </>
      )}
      {canFetchMore && (
        <Button
          disableRipple
          variant="light"
          size="sm"
          isLoading={loading}
          onClick={() => setIsFetchAll(!isFetchAll)}
        >
          {isFetchAll ? `Скрыть` : `Показать все комментарии (${totalCount})`}
        </Button>
      )}
    </div>
  );
};
