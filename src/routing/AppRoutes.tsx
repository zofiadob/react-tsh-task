import { Route, Routes } from 'react-router-dom';

import { Products } from 'app/containers/products/Products';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.products} element={<Products />} />
    <Route path="*" element={<Products />} />
  </Routes>
);
