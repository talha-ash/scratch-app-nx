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
      <h1 className="text-h1">Heading 1</h1>
      <h1 className="text-h2">Heading 2</h1>
      <h1 className="text-h3">Heading 3</h1>
      <h1 className="text-h4">Heading 4</h1>
      <h1 className="text-h5">Heading 5</h1>
      <h1 className="text-cardItem">Card Item</h1>
      <h1 className="text-lead">Lead</h1>
      <h1 className="text-body">Body</h1>
      <h1 className="text-button text-primary">Button</h1>
      <h1 className="text-textGray">Text Gray</h1>
      <h1 className="text-textSubtle">Text Subtle</h1>
      <h1 className="text-caption">Caption</h1>
    </div>
  );
}

export default App;
