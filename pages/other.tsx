import SampleComponent from '../components/SampleComponent';
import { observer } from 'mobx-react';
import { IStore, useStore } from '../store';

export const Other = observer((props) => {
  const { counter, inc } = useStore(props.store);
  return (
    <>
      <span>{counter} </span>
      <button onClick={inc}> inc </button>
      <SampleComponent title={'Other Page'} linkTo="/" />
    </>
  );
});

export default Other;
