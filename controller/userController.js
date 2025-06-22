const { users } = require("../database/connection")
const bcrypt = require('bcrypt')

exports.fetchUser = async function (req, res) {

  try {
    const users = await users.findAll()



    res.json({
      message: 'Users are Successfully fetched',
      users: users
    })

  } catch (error) {
    res.json({
      message: 'Something is Wrong'
    })

  }


}

exports.postUsers = async function (req, res) {  


    const { email, name, password } = req.body

    const userData = await users.create({
      email,
      name,
      password: bcrypt.hashSync(password, 12)


    })
    res.status(200).json({
      message: 'Users are Successfully posted',
      userData: userData
    })

  


}

exports.deleteUsers = async function (req, res) {

  try {
    const id = req.params.id

    const userData = await users.destroy({
      where: {
        id: id
      }
    })
    res.json({
      message: 'User is Successfully Deleted',
      userData
    })

  } catch (error) {
    res.json({
      message: 'Something is Wrong'
    })

  }


}

exports.editUsers = async function (req, res) {

  try {
    const id = req.params.id
    const { email, name, password } = req.body

    const userUpdate = await users.update({
      email,
      name,
      password



    }, {
      where: {
        id: id
      }
    })

    res.json({
      message: 'User is Successfully updated',
      userUpdate
    })

  } catch (error) {

    res.json({
      message: 'Something is wrong'
    })

  }

}

exports.singleUser = async function (req, res) {

  try {
    const id = req.params.id
    const singleUser = await users.findByPk(id)

    res.json({
      message: 'Single User is Successfully fetched',
      singleUser
    })

  } catch (error) {

    res.json({
      message: 'Something is Wrong'
    })

  }


}