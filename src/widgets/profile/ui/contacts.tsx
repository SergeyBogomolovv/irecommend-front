import { AddContact, Contact } from '@/features/contact';
import { Profile } from '@/shared/graphql/graphql';
import { Card, CardBody, Skeleton } from '@nextui-org/react';
interface Props {
  loading: boolean;
  profile: Profile;
}
const Contacts = ({ loading, profile }: Props) => {
  return (
    <Card className="w-full">
      <CardBody className="flex flex-col gap-3">
        <div className="flex items-end justify-between">
          <h3 className="text-lg font-semibold">Контакты</h3>
          <AddContact />
        </div>
        <div className="flex gap-2 flex-wrap">
          {loading ? (
            <>
              <Skeleton className="rounded-full h-6 w-32" />
              <Skeleton className="rounded-full h-6 w-32" />
              <Skeleton className="rounded-full h-6 w-32" />
              <Skeleton className="rounded-full h-6 w-32" />
            </>
          ) : (
            <>
              {profile.contacts.length ? (
                <>
                  {profile.contacts.map((contact) => (
                    <Contact
                      key={contact.id}
                      id={contact.id}
                      type={contact.type}
                      href={contact?.url}
                      nickname={contact.nickname}
                    />
                  ))}
                </>
              ) : (
                <div className="text-center w-full text-default-400 text-sm">
                  Добавьте контакты, с помощью которых другие пользователи
                  смогут с вами связаться.
                </div>
              )}
            </>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default Contacts;
