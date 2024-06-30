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
} from '@nextui-org/react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
                  <ModalBody>
                    <FormField
                      disabled={loading}
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
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
                          <FormControl>
                            <Textarea placeholder="О себе" {...field} />
                          </FormControl>
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
                </form>
              </Form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
