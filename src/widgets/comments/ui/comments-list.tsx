import { Comment as IComment } from '@/shared/graphql/graphql';
import { Divider } from '@nextui-org/react';
import { AddCommentForm, Comment } from '@/features/comment';

interface Props {
  comments: IComment[];
  recommendationId: string;
}

export const CommentsList = ({ comments, recommendationId }: Props) => {
  // TODO: add pagination and separate query
  return (
    <div className="space-y-4 w-full">
      <AddCommentForm recommendationId={recommendationId} />
      {!!comments.length && <Divider />}
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
