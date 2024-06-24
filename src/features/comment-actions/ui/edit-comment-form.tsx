'use client';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import FormError from '@/shared/ui/form-error';
import { Button, Input } from '@nextui-org/react';
import { useEditCommentForm } from '../model/use-edit-comment-form';
import { Comment } from '@/shared/graphql/graphql';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  comment: Comment;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

export const EditCommentForm = ({ comment, setEditMode }: Props) => {
  const { handleSubmit, form, loading } = useEditCommentForm(
    comment,
    setEditMode,
  );

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-2 items-center w-full mt-2"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input autoFocus disabled={loading} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex gap-x-2 w-full">
          <Button
            color="danger"
            onPress={() => setEditMode(false)}
            className="w-full"
            size="sm"
            type="button"
          >
            Отмена
          </Button>
          <Button color="primary" className="w-full" size="sm" type="submit">
            Готово
          </Button>
        </div>
      </form>
      <FormError message={form.formState.errors.root?.message} />
    </Form>
  );
};
