import InfoBadge from '@/shared/ui/info-badge';
import { Card, CardBody } from '@nextui-org/react';
import { format } from 'date-fns';
import React from 'react';

interface Props {
  loading: boolean;
  date?: string;
  id?: string;
  email?: string;
}

const PersonalInfo = ({ loading, date, id, email }: Props) => {
  return (
    <Card className="w-full">
      <CardBody className="flex flex-col gap-y-2">
        <h3 className="text-lg font-semibold">Личная информация</h3>
        <InfoBadge loading={loading} label="ID" text={id} />
        <InfoBadge loading={loading} label="Почта" text={email} />
        <InfoBadge
          loading={loading}
          label="Зарегистрирован"
          text={format(date || new Date(), 'dd.LL.yyyy')}
        />
      </CardBody>
    </Card>
  );
};

export default PersonalInfo;
