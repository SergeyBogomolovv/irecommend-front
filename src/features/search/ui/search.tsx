import { Input, Tooltip } from '@nextui-org/react';
import { IoSearchOutline } from 'react-icons/io5';
import { useSearchForm } from '../model/use-search-form';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
interface Props {
  onSearch?: () => any;
}
export function Search({ onSearch }: Props) {
  const { form, handleSubmit } = useSearchForm(onSearch);
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  radius="lg"
                  {...field}
                  placeholder="Поиск..."
                  startContent={
                    <Tooltip content={'Найти'}>
                      <button type="submit">
                        <IoSearchOutline className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                      </button>
                    </Tooltip>
                  }
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
