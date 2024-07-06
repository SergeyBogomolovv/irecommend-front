import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '@/shared/ui/form';
import { Button, Input, Textarea } from '@nextui-org/react';
import { UseFormReturn } from 'react-hook-form';
import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';

interface Props {
  form: UseFormReturn<
    {
      title?: string | undefined;
      description?: string | undefined;
      link?: string | undefined;
    },
    any,
    undefined
  >;
  loading: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  handleSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
}

export const EditMode = ({
  form,
  loading,
  setEditMode,
  handleSubmit,
}: Props) => {
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="w-full">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder="Моя рекомендация" {...field} />
              </FormControl>
              <FormDescription>
                Кратко напишите что вам понравилось, либо укажите название.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea
                  disableAnimation
                  placeholder="Описание рекомендации"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Расскажите, кому и что вы рекоммендуете.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={loading}
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Ссылка</FormLabel>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full gap-x-3 mt-4">
          <Button
            onPress={() => setEditMode(false)}
            className="w-full"
            size="sm"
            type="button"
          >
            Отмена
          </Button>
          <Button
            isLoading={loading}
            className="w-full"
            size="sm"
            color="primary"
            type="submit"
          >
            Сохранить
          </Button>
        </div>
      </form>
    </Form>
  );
};
