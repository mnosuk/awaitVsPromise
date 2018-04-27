const { listUser, listPost } = require('./api')

controller = async () => {
  const result = await listPost()
  await listUser()
}


controller()