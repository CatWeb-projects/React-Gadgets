import React from 'react';
import { Link, useHistory } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { DeviceContext } from 'contexts/Devices-Context';
import { Button, Icon } from 'ui/atoms';

import './Search.scss';

export interface Findings {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
  price: number;
}

export const Search = () => {
  const { devicesData } = React.useContext(DeviceContext);

  const [searchValue, setSearchValue] = React.useState<string>('');
  const [searchDevices, setSearchDevices] = React.useState<Findings[] | null>(
    null
  );

  const { t } = useIntl();
  const { push } = useHistory();

  React.useEffect(() => {
    if (searchValue) {
      setSearchDevices(
        devicesData.filter((device) =>
          device.name.toLowerCase().match(searchValue)
        )
      );
    } else if (searchValue === '' || searchValue.length === 0) {
      setSearchDevices(null);
    }
    return () => {};

    // eslint-disable-next-line
  }, [searchValue]);

  const onSearch = () => {
    setSearchValue('');
    push('SearchPage', { link: `text=${searchValue}` });
  };

  React.useMemo(() => devicesData, [devicesData]);

  return (
    <div className="header__search">
      <input
        type="text"
        style={searchValue ? { borderRadius: '8px 8px 0 0' } : {}}
        placeholder={t('search')}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
      />

      <Button onClick={() => onSearch()}>
        <Icon type="zoom" />
      </Button>

      {searchValue && (
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
