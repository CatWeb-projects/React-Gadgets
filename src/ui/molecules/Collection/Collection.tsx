import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import { collection, CollectionProps } from 'libs/http/api';

export const Collection = () => {
  const { request, data } = useRequest<CollectionProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      collection.cancel();
    };
  }, []);

  const onFetch = () => request(collection.action());

  const collectionData = React.useMemo(() => data, [data]);

  return (
    <div className="collection">
      {collectionData &&
        collectionData.map((item) => (
          <div key={item.id} className="collection-card">
            <Link></Link>
            <Link></Link>
          </div>
        ))}
    </div>
  );
};
