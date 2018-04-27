const { listUser, listPost } = require('./api')

controller = async () => {
  const result = await Promise.all([listPost(), listUser()])
  console.log(result[0].data)
  // await listPost()
  // await listUser()
  // return.data 
}


controller()