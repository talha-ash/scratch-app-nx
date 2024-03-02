// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useGetUserInfoQueryHook } from '@nx/shared';
export function App() {
  const result = useGetUserInfoQueryHook();
  if (result.isSuccess) {
    console.log(result.data.getUserInfo?.id);
  }
  if (result.isError) {
    console.log(result.error);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
