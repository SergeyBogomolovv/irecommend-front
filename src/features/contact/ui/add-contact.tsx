'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
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
import { contactTypes } from '@/shared/constants/contacts';
import { useAddContactForm } from '../model/use-add-contact-form';
import { TriggerButton } from './trigger-button';

export const AddContact = () => {
  const {
    isOpen,
    onOpen,
    onOpenChange,
    onReject,
    handleSubmit,
    loading,
    form,
  } = useAddContactForm();

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
                    Добавить контакт
                  </ModalHeader>
                  <ModalBody>
                    <FormField
                      disabled={loading}
                      control={form.control}
                      name="nickname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Никнейм</FormLabel>
                          <FormControl>
                            <Input
                              isRequired
                              placeholder="nickname"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Напишите ваш уникальный никнейм - с ним создаться
                            ссылка по которой другие пользователи смогут
                            перейти.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      disabled={loading}
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Соцсеть</FormLabel>
                          <FormControl>
                            <Select {...field} placeholder="Выберите...">
                              {contactTypes.map((type) => (
                                <SelectItem key={type.type}>
                                  {type.title}
                                </SelectItem>
                              ))}
                            </Select>
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
                      Создать
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
