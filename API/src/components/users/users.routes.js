import { Router } from 'express'

import * as userCtrl from './users.controller'
import { verifyToken } from '../../middlewares/verifyToken'
import { checkDuplicateEmail } from '../../middlewares/checkEmail'
import { verifyId} from '../../middlewares/verifyId'

const router = Router();

router.post('/create', checkDuplicateEmail, async (req, res) => {
  try {
    const user = await userCtrl.createUser(req.body)
    res.status(201).json({
      data: user._id,
      message: 'User created',
    });
  } catch (err) {
    console.log(err)
  }
});

router.put('/:id', verifyId, verifyToken, async (req, res) => {
    try {
        const user = await userCtrl.updateUser(req.params.id, req.body)
        if(user){
            res.status(201).json({
            data: user._id,
            message: 'User updated',
          })
        }
        else {
          res.status(404).json({message: 'No user found'})
        }
      } catch (err) {
        console.log(err)
      }
});

router.delete('/:id', verifyId, verifyToken, async (req, res) => {
    try {
        const user = await userCtrl.deleteUser(req.params.id)
        console.log(user)
        if (user) {
          res.status(201).json({
            data: user._id,
            message: 'User deleted',
          });
        }
        else {
          res.status(404).json({message: 'No user found'}) 
        }
      } catch (err) {
        console.log(err)
      }
});

export default router;
