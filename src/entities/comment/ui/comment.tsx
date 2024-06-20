import { Comment as IComment } from '@/shared/graphql/generated/graphql';
import { formatDate } from '@/shared/lib/format-date';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Divider } from '@nextui-org/react';
import { FaUser } from 'react-icons/fa';

interface Props {
  comment: IComment;
}

export function Comment({ comment }: Props) {
  return (
    <div className="flex gap-x-2 items-start">
      <Avatar className="size-10">
        <AvatarImage src={comment.author.profile.logo || ''} />
        <AvatarFallback>
          <FaUser className="size-6" />
        </AvatarFallback>
      </Avatar>
      <div className="flex-col">
        <div className="flex gap-x-2 items-center">
          <p className="text-sm">{comment.author.profile.name}</p>
          <Divider orientation="vertical" className="h-3" />
          <p className="text-xs text-default-400">
            {formatDate(comment.created_at)}
          </p>
        </div>

        <p className="text-xs text-default-500">{comment.content}</p>
      </div>
    </div>
  );
}
