import { Recommendation as IRecommendation } from '@/shared/graphql/graphql';
import { useViewer } from '@/entities/viewer';
import { useUpdateRecommendationForm } from '../model/use-update-recommedation-form';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from '@nextui-org/react';
import { User } from '@/entities/user';
import { CommentsList } from '@/widgets/comments';
import { ActionsButton } from './actions-button';
import { formatDate } from '@/shared/lib/format-date';
import { EditModeForm } from './edit-mode';
import { ImagesCarousel } from '@/features/images';

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
    <Card className="py-2 w-full">
      <CardHeader className="pb-1 pt-2 px-4 flex-col items-start">
        <div className="flex justify-between items-center w-full">
          <User
            name={viewer?.profile.name}
            avatar={viewer?.profile.logo}
            description={formatDate(recommendation.created_at)}
            loading={loading}
          />
          <ActionsButton id={recommendation.id} setEditMode={setEditMode} />
        </div>
        <div className="mt-2 w-full">
          {editMode ? (
            <EditModeForm
              recommendationId={recommendation.id}
              form={form}
              handleSubmit={handleSubmit}
              setEditMode={setEditMode}
              loading={updateLoading}
            />
          ) : (
            <div className="flex flex-col">
              <h4 className="font-bold text-large">{recommendation.title}</h4>
              <small className="text-default-500">
                {recommendation.description}
              </small>
              {recommendation.link && (
                <Link
                  className="max-w-[250px] truncate mt-2"
                  showAnchorIcon
                  size="sm"
                  isExternal
                  href={recommendation.link}
                >
                  Ссылка
                </Link>
              )}
            </div>
          )}
        </div>
      </CardHeader>

      <CardBody className="overflow-visible">
        {!!recommendation.images.length && (
          <ImagesCarousel isEditable images={recommendation.images} />
        )}
      </CardBody>

      <CardFooter>
        <CommentsList recommendationId={recommendation.id} />
      </CardFooter>
    </Card>
  );
};
