import { request } from "network/request";

export function getGoodsDetial(id) {
  return request({
    url: 'detail',
    params: {
      iid: id
    }
  })
}