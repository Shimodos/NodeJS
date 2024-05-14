import { NextFunction, Request, Response, Router } from 'express';

// UserService
export interface UserService {
  id: string;
  name: string;
  email: string;
  path: string;
  func: (req: Request, res: Response, next: NextFunction) => void;
}
