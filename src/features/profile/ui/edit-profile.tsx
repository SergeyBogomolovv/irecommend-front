'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  ScrollShadow,
} from '@nextui-org/react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { TriggerButton } from './trigger-button';
import { useEditProfileForm } from '../model/use-edit-profile-form';
import { Profile } from '@/shared/graphql/graphql';

interface Props {
  profile: Profile;
}

export const EditProfile = ({ profile }: Props) => {
  const {
    isOpen,
    onOpen,
    onOpenChange,
    onReject,
    handleSubmit,
    loading,
    form,
  } = useEditProfileForm(profile);

  return (
    <>
      <TriggerButton onOpen={onOpen} />
      <Modal
        isDismissable={false}
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <Form {...form}>
                <form onSubmit={handleSubmit}>
                  <ModalHeader className="flex flex-col gap-1">
                    Мой профиль
                  </ModalHeader>
                  <ScrollShadow className="max-h-[700px]">
                    <ModalBody>
                      <FormField
                        disabled={loading}
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Отображаемое имя</FormLabel>
                            <FormControl>
                              <Input required placeholder="Имя" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        disabled={loading}
                        control={form.control}
                        name="about"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Расскажите о себе</FormLabel>
                            <FormControl>
                              <Textarea
                                disableAnimation
                                placeholder="О себе"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Любые подробности, например: возраст, род занятий
                              или город. Пример: 23 года, дизайнер из
                              Санкт-Петербурга.
                            </FormDescription>
                          </FormItem>
                        )}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="button"
                        color="danger"
                        variant="light"
                        onPress={onReject}
                      >
                        Отмена
                      </Button>
                      <Button isLoading={loading} type="submit" color="primary">
                        Готово
                      </Button>
                    </ModalFooter>
                  </ScrollShadow>
                </form>
              </Form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
