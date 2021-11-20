import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { TodosPage } from './pages/todos/todos-page';

const queryClient = new QueryClient();

export default () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={TodosPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
