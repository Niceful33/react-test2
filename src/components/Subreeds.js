import { useParams } from 'react-router-dom';
export const Subreeds = () => {
  const { dogId } = useParams();
  // useEffect{
  //     () => {
  //     HTTP запрос, если нужно
  // },[]}
  return <div>Subreeds: {dogId}</div>;
};
