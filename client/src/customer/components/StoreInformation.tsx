import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const StoreInformation = () => {
  const localStorage = window.localStorage;
  const historyDefault: Array<String> = JSON.parse(
    `${localStorage.getItem('viewHistory')}`
  )
    ? JSON.parse(`${localStorage.getItem('viewHistory')}`)
    : [];
  const [history, setHistory] = useState(historyDefault);
  const storeInformation = useParams();
  let storeName = storeInformation.storeId ? storeInformation.storeId : '';
  storeName = storeName.toString();

  useEffect(() => {
    history.filter((value) => {
      return value === storeName;
    }).length
      ? setHistory((prev) => {
          prev.splice(history.indexOf(storeName), 1);
          localStorage.setItem(
            'viewHistory',
            JSON.stringify([storeName, ...prev])
          );

          return [storeName, ...prev];
        })
      : setHistory((prev) => {
          localStorage.setItem(
            'viewHistory',
            JSON.stringify([storeName, ...prev])
          );

          return [storeName, ...prev];
        });
  }, []);

  //TODO: storeId로 서버에서 데이터 받아서 뿌려주기
  return <div>{storeName}</div>;
};
export default StoreInformation;
