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

  static async filterCarsOfOwners(req, res, next) {
    const { ...data } = req.body;
    const { skip, limit } = req.query;

    const newData = {
      car_model_year:  {"$gte": Number(data.start_year), "$lt": Number(data.end_year)},
    }
    if (data.gender){
      newData.gender = data.gender;
    }
    if (data.countries && data.countries.length){
      newData.country =  {"$in": data.countries }
    }
    if (data.colors && data.colors.length) {
      newData.car_color = {"$in": data.colors}
    }

    const result = await UserService.filterCars(newData, skip = 0, limit = 10);
    if(!result.length) {
      return res.status(404).send({
        success: false,
        message: 'No matches found using the provided data'
      })
    }

    return res.status(200).send({
      success: true,
      result
    })
  }
}