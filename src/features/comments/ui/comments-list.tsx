import { Comment as IComment } from '@/shared/graphql/generated/graphql';
import { AddCommentForm } from './add-comment-form';
import { Comment } from '@/entities/comment';
import { Divider } from '@nextui-org/react';

interface Props {
  comments: IComment[];
  recommendationId: string;
}

export const CommentsList = ({ comments, recommendationId }: Props) => {
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
