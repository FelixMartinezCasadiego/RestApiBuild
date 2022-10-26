import express from 'express';

import { createUser, getUsers, getUsersId, deleteUSer, updateUser } from '../controllers/users.js';


const router = express.Router();

router.get('/users', getUsers);

router.post('/users', createUser );

router.get('/users/:id' , getUsersId);

router.delete('/users/:id' , deleteUSer);

router.patch('/users/:id', updateUser)

export default router;