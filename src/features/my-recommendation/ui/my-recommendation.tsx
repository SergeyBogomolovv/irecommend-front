import { Recommendation as IRecommendation } from '@/shared/graphql/graphql';
import { Button, Tooltip } from '@nextui-org/react';
import DeleteButton from './delete-button';
import { Recommendation } from '@/entities/recommendation';
import ImagesCarousel from '@/shared/ui/images-carousel';
import { MdEditNote } from 'react-icons/md';
import { useViewer } from '@/entities/viewer';
import { useUpdateRecommendationForm } from '../model/use-update-recommedation-form';
import { EditMode } from './edit-mode';

interface Props {
  recommendation: IRecommendation;
}

export const MyRecommendation = ({ recommendation }: Props) => {
  const { viewer, loading } = useViewer();
  const {
    form,
    handleSubmit,
    editMode,
    setEditMode,
    loading: updateLoading,
  } = useUpdateRecommendationForm(recommendation);

  return (
    <Recommendation
      editMode={editMode}
      editModeRender={
        <EditMode
          form={form}
          handleSubmit={handleSubmit}
          setEditMode={setEditMode}
          loading={updateLoading}
        />
      }
      key={recommendation.id}
      title={recommendation.title}
      description={recommendation.description}
      link={recommendation.link}
      username={viewer?.profile.name}
      avatar={viewer?.profile.logo}
      created_at={recommendation.created_at}
      loading={loading}
      actionButton={
        <Tooltip content="Редактировать">
          <Button
            onPress={() => setEditMode(true)}
            isIconOnly
            size="sm"
            variant="light"
          >
            <MdEditNote className="size-6" />
          </Button>
        </Tooltip>
      }
      footer={<DeleteButton id={recommendation.id} />}
      body={
        recommendation.images.length ? (
          <ImagesCarousel
            images={recommendation.images.map((image) => image.url)}
          />
        ) : null
      }
    />
  );
};
