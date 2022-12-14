import SampleComponent from '../components/SampleComponent';
import { observer } from 'mobx-react';
import { IStore, useStore } from '../store';

const Home = observer((props) => {
  const { counter, inc } = useStore(props.store);

  return (
    <>
      <span>{counter} </span>
      <button onClick={inc}> inc </button>
      <SampleComponent title="Index Page" linkTo="/other" />
    </>
  );
});
export default Home;
