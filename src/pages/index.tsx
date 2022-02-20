import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect } from 'react';
import { useAxios } from 'utils/useAxios';
import { useToken } from '../contexts/tokenContext';
import CircularProgressPrice from 'components/CircularProgressPrice';

export default function Home() {
  const [axiosGet] = useAxios('get');
  const { setToken } = useToken();

  const getToken = useCallback(async () => {
    await axiosGet({
      url: '/api/accessToken',
      success: (res: AxiosResponse) => {
        const { token } = res.data;
        setToken(token);
      },
      error: (err: AxiosError) => {
        console.log(err);
      }
    });
  }, [axiosGet, setToken]);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <>
      <CircularProgressPrice value={5000} maxValue={7750} daysMissing={13} />
    </>
  );
}
