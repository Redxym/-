import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
});

export const getDetail = (id) => {
  console.log(id);
  return (dispatch) => {
    axios.get('api/detail.json?id='+id).then((res) => {
      console.log(res.data.data)
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content));
    }).catch(() => {
      alert('请求失败');
    })
  }
};