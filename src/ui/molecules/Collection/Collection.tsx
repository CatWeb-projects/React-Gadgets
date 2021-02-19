import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { collection, CollectionProps } from 'libs/http/api';

import './Collection.scss';

export const Collection = () => {
  const { t } = useIntl();
  const { request, data } = useRequest<CollectionProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      collection.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(collection.action());

  const collectionData = React.useMemo(() => data, [data]);

  return (
    <div className="collection">
      {collectionData &&
        collectionData.map((item) => (
          <div key={item.id} className="collection-card">
            <img src={item.imgUrl} alt={item.name} />
            <Link to={item.link}>
              <h3>{t(`${item.translate}`)}</h3>
            </Link>
            <Link to={item.link}>{t('details')}</Link>
          </div>
        ))}
    </div>
  );
};
