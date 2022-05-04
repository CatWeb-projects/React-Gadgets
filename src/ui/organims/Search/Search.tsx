import React from 'react';
import { useRequest } from 'estafette';
import { Link, useHistory } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { Button, Icon } from 'ui/atoms';

import './Search.scss';
import { catalog, DevicesProps } from 'libs/http/api';

export interface Findings {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
  price: number;
}

export const Search = () => {
  const { request, data: searchDevices } = useRequest<DevicesProps[]>();

  const [searchValue, setSearchValue] = React.useState<string>('');

  const { t } = useIntl();
  const { push } = useHistory();

  React.useEffect(() => {
    onFetch();

    return () => {
      catalog.searchDevices.cancel();
    };
    //eslint-disable-next-line
  }, [searchValue]);

  const onFetch = () => request(catalog.searchDevices.action(searchValue));

  const onSearch = () => {
    push('SearchPage', { link: `query=${searchValue}` });
    setSearchValue('');
  };

  const onSearchChange = (e: { target: { value: string } }) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const clearSearchValue = () => {
    setSearchValue('');
  };

  return (
    <div className="header__search">
      <input
        type="text"
        style={
          searchValue && searchDevices?.length > 0
            ? { borderRadius: '8px 8px 0 0' }
            : {}
        }
        placeholder={t('search')}
        value={searchValue}
        onChange={onSearchChange}
      />

      <Button onClick={onSearch}>
        <Icon type="zoom" />
      </Button>

      {searchValue && searchDevices?.length > 0 && (
        <div className="finded-wrapper">
          <h3>{t('products')}</h3>

          {searchDevices &&
            searchDevices
              .filter((_, key) => key < 10)
              .map((finded, key) => (
                <Link
                  route="DeviceInfo"
                  params={{
                    link: finded.link
                  }}
                  onClick={clearSearchValue}
                  className="finded"
                  key={key}
                >
                  <img src={finded.imageUrl} alt={finded.name} />
                  <div className="finded-product">
                    <div>{finded.name}</div>
                    <div>
                      {finded.price} {t('lei')}
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      )}
    </div>
  );
};
