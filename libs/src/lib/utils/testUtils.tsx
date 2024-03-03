import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

export const renderWebComponent = (component: JSX.Element) => {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
  );
};
