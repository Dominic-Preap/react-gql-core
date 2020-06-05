import centered from '@storybook/addon-centered/react';
import React from 'react';

import { Card } from './Card';
import { CardDescription } from './CardDescription';
import { CardDualIcon } from './CardDualIcon';
import { CardImage } from './CardImage';
import { CardProfileA } from './CardProfileA';
import { CardProfileB } from './CardProfileB';
import { CardTitle } from './CardTitle';

export default {
  title: 'Components/Card',
  decorators: [centered],
  component: Card,
  subcomponents: {
    CardDescription,
    CardDualIcon,
    CardImage,
    CardProfileA,
    CardProfileB,
    CardTitle,
  },
};

export const VehicleCard: React.FC = () => (
  <div className="flex items-center justify-center">
    <div className="max-w-md w-full sm:w-full lg:w-full p-3">
      <Card>
        <CardProfileA
          title="USA Auto Inc,"
          subtitle="Feb 03, 2020 9:00 AM"
          imageUrl="https://i.pinimg.com/originals/fd/05/ed/fd05ed1384dda6403d8ca8e7183ad0d3.png"
        />

        <CardImage url="https://img.tipcars.com/fotky_velke/12284131_1/1561233283/E/mercedes-benz-gle-350-cdi-kupe-amg-cz-isp.jpg" />

        <CardTitle title="Mercedes-Benz GLE 350" subtitle="ID: 71190402" />

        <CardDualIcon
          firstIcon={null}
          firstTitle="65000 Miles"
          secondIcon={null}
          secondTitle="2015"
        />

        <CardProfileB
          title="Customer"
          name="Dominic Preap"
          email="dominic.preap@pathmazing.com"
          phone="(010) 126-845"
          imageUrl="https://i.imgur.com/74sByqd.jpg"
        />
        <CardDescription
          title="Comment"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, fugit. Cupiditate nesciunt, vero quasi doloremque voluptatem ipsam nulla quae ratione animi iusto nam odio. Velit, odit cum! Temporibus, fugit nisi?"
        />
      </Card>
    </div>
  </div>
);

export const UserCard: React.FC = () => (
  <div className="flex items-center justify-center">
    <div className="max-w-md w-full sm:w-full lg:w-full p-3">
      <Card>
        <CardProfileA
          title="EVO Speedgoat"
          subtitle="tactics.com"
          imageUrl="https://i.imgur.com/74sByqd.jpg"
        />

        <CardImage url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hoka-one-one-evo-speedgoat-3169-1572900421.jpg?crop=1.00xw:0.753xh;0,0.159xh&resize=1200:*" />

        <CardDualIcon
          firstIcon={null}
          firstTitle="632"
          secondIcon={null}
          secondTitle="64"
        />

        <CardDescription
          title="Description"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, fugit. Cupiditate nesciunt, vero quasi doloremque voluptatem ipsam nulla quae ratione animi iusto nam odio. Velit, odit cum! Temporibus, fugit nisi?"
        />
      </Card>
    </div>
  </div>
);
