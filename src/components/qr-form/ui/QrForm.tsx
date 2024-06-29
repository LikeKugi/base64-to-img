import { useId, useState } from 'react';

import styles from './QrForm.module.scss';

export const QrForm = () => {
  const [data, setData] = useState('');

  const inputId = useId();

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newData = form.get('data');
    if (newData && typeof newData === 'string') {
      setData(newData);
    }
  };

  return (
    <div>
      <h1>Make image from base64</h1>
      <form onSubmit={onFormSubmit} className={styles.form}>
        <label htmlFor={inputId}>data base64 string</label>
        <div className={styles.form__content}>
          <input id={inputId} type="text" name={'data'}/>
          <button type="submit">show</button>
        </div>
      </form>
      <div>
        {data && <img src={`data:image/png;base64, ${data}`}
                      alt="QR code"/>}
      </div>
      <div className={styles.reset}>
        <button onClick={() => setData('')} disabled={!data}>Reset</button>
      </div>
    </div>
  );
};
