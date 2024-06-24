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
import { TriggerButton } from './trigger-button';
import { useCreateRecommendationForm } from '../model/use-create-recommendation-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import ImagesCarousel from '@/shared/ui/images-carousel';
import { recommendationTypes } from '@/shared/constants/recommendations';
import { GoPaperclip } from 'react-icons/go';

export function NewRecommendation() {
  const {
    onReject,
    isOpen,
    onOpen,
    onOpenChange,
    form,
    handleSubmit,
    loading,
    fileInputProps,
    previewImages,
    onAddImageClick,
  } = useCreateRecommendationForm();

  return (
    <>
      <TriggerButton onOpen={onOpen} />
      <Modal
        isDismissable={false}
        backdrop="blur"
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
                    Новая рекомендация
                  </ModalHeader>
                  <ModalBody>
                    <ImagesCarousel images={previewImages} />
                    <FormField
                      disabled={loading}
                      control={form.control}
                      name="images"
                      render={() => (
                        <FormItem>
                          <FormControl>
                            <input
                              type="file"
                              accept=".png,.jpeg,.jpg,.webp"
                              multiple
                              {...fileInputProps}
                              hidden
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      disabled={loading}
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input required placeholder="Название" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      disabled={loading}
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input required placeholder="Описание" {...field} />
                          </FormControl>
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
                          <FormControl>
                            <Select {...field} placeholder="Выберите тип">
                              {recommendationTypes.map((type) => (
                                <SelectItem key={type.type}>
                                  {type.title}
                                </SelectItem>
                              ))}
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-x-2">
                      <Button
                        onClick={onAddImageClick}
                        type="button"
                        variant="light"
                        isIconOnly
                      >
                        <GoPaperclip className="size-6" />
                      </Button>
                      <FormField
                        disabled={loading}
                        control={form.control}
                        name="link"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input placeholder="Ссылка" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
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
}
