import UserService from '../services/UserService';


export default class UserController {
  static async getSpecificUser(req, res, next) {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'User is not found'
      })
    }

    return res.status(200).send({
      success: true,
      user
    });
  }
}