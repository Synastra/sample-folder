import express from 'express';
import {login, retrieveInfo, register,changePassword, deleteUser, hello, token, authenticateToken} from '../controllers/users.js';
const router = express.Router();

router.get('/usersInfo', retrieveInfo);

router.post('/auth', login);

router.post('/register', register);

router.post('/update', changePassword);


router.post('/delete', deleteUser);

router.get('/hello',authenticateToken,  hello)

router.get('/jwt', token)


export default router;