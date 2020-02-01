import request from '../utils/require';
import data from '../data/table';
export const fetchData = query => {
  return request({
    url: data,
    method: 'get',
    params: query
  });
};
