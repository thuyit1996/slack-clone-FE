import Customer from './customer';

// export const getApiController = (storeView = 'jp') => storeView ? `rest/V1` : 'rest/V1';
export const getApiController = (storeView = 'th'): string =>
  storeView ? `` : '';

export const RabbitResource = {
  Customer,
};
