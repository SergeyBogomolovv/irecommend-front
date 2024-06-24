'use client';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import { useAddCommentForm } from '../model/use-add-comment-form';
import FormError from '@/shared/ui/form-error';
import { Button, Input } from '@nextui-org/react';
import { IoSend } from 'react-icons/io5';

interface Props {
  recommendationId: string;
}

export const AddCommentForm = ({ recommendationId }: Props) => {
  const { handleSubmit, form, loading } = useAddCommentForm(recommendationId);
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="flex gap-x-4 items-center w-full"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  isDisabled={loading}
                  label="Добавить комментарий"
                  size="sm"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button isIconOnly variant="flat" isLoading={loading} type="submit">
          <IoSend className="size-5" />
        </Button>
      </form>
      <FormError message={form.formState.errors.root?.message} />
    </Form>
  );
};
