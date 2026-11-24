import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { API_BASE_URL } from '../config/api.config';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith(API_BASE_URL)) {
    return next(req);
  }

  return next(
    req.clone({
      setHeaders: { Authorization: `Bearer ${environment.tmdbToken}` },
    }),
  );
};
