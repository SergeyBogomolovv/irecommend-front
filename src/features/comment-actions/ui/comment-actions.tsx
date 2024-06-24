'use client';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Comment as IComment } from '@/shared/graphql/graphql';
import { useViewer } from '@/entities/viewer';
import { IoCopyOutline } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { useDeleteComment } from '../model/use-delete-comment';
import { useCopy } from '../model/use-copy';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  comment: IComment;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

export function CommentActions({ comment, setEditMode }: Props) {
  const { viewer } = useViewer();
  const isAuthor = viewer?.id === comment.author.id;
  const { deleteComment, loading } = useDeleteComment(comment.id);
  const onCopy = useCopy(comment);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isLoading={loading} isIconOnly variant="light" size="sm">
          <HiDotsHorizontal className="size-4" />
        </Button>
      </DropdownTrigger>
      {isAuthor ? (
        <DropdownMenu aria-label="Comment Actions">
          <DropdownItem
            onPress={onCopy}
            startContent={<IoCopyOutline className="size-4" />}
            key="copy"
          >
            Скопировать
          </DropdownItem>
          <DropdownItem
            onPress={() => setEditMode(true)}
            startContent={<FiEdit className="size-4" />}
            key="edit"
          >
            Редактировать
          </DropdownItem>
          <DropdownItem
            onPress={() => deleteComment()}
            startContent={<MdDeleteOutline className="size-4" />}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Удалить
          </DropdownItem>
        </DropdownMenu>
      ) : (
        <DropdownMenu aria-label="Comment Actions">
          <DropdownItem
            onPress={onCopy}
            startContent={<IoCopyOutline className="size-4" />}
            key="copy"
          >
            Скопировать
          </DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
}
