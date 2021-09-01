import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import { useIntl } from 'estafette-intl';
import { Button, Icon } from 'ui/atoms';
import { catalog, DevicesProps } from 'libs/http/api';

import './Search.scss';

export interface Findings {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
  price: number;
}

export const Search = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [searchDevices, setSearchDevices] = React.useState<Findings[] | null>(
    null
  );

  const { request: requestPhones, data: phonesData } = useRequest<
    DevicesProps[]
  >({
    data: {}
  });
  const { request: requestLaptop, data: laptopsData } = useRequest<
    DevicesProps[]
  >({ data: {} });
  const { request: requestGadgets, data: gadgetsData } = useRequest<
    DevicesProps[]
  >({ data: {} });

  const { t } = useIntl();

  React.useEffect(() => {
    onFetchPhonesData();
    onFetchLaptopsData();
    onFetchGadgetsData();

    return () => {
      catalog.phones.cancel();
      catalog.laptops.cancel();
      catalog.gadgets.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetchPhonesData = () => requestPhones(catalog.phones.action());
  const onFetchLaptopsData = () => requestLaptop(catalog.laptops.action());
  const onFetchGadgetsData = () => requestGadgets(catalog.gadgets.action());

  const deviceData: any = Array.prototype.concat(
    phonesData,
    laptopsData,
    gadgetsData
  );
  React.useEffect(() => {
    if (searchValue) {
      setSearchDevices(
        deviceData.filter((device: any) =>
          device.name.toLowerCase().match(searchValue)
        )
      );
    } else if (searchValue === '' || searchValue.length === 0) {
      setSearchDevices(null);
    }
    return () => {};

    // eslint-disable-next-line
  }, [searchValue]);

  React.useMemo(() => deviceData, [deviceData]);

  return (
    <div className="header__search">
      <form>
        <input
          type="text"
          style={searchValue ? { borderRadius: '8px 8px 0 0' } : {}}
          placeholder={t('search')}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        />
        <Button>
          <Icon type="zoom" />
        </Button>
      </form>
      <div className="finded-wrapper">
        {searchDevices &&
          searchDevices.map((finded, key) => (
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
    </div>
  );
};
