import express from 'express';
import {login, retrieveInfo, register,changePassword, deleteUser} from '../controllers/users.js';
const router = express.Router();

router.get('/usersInfo', retrieveInfo);

router.post('/auth', login);

router.post('/register', register);

router.post('/update', changePassword);


router.post('/delete', deleteUser);

export default router;