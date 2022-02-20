// import Main from 'components/Main';

import CircularProgressPrice from 'components/CircularProgressPrice';

export default function Home() {
  return (
    <>
      <CircularProgressPrice value={5000} maxValue={7750} daysMissing={13} />
    </>
  );
}
