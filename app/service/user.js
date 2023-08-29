const { Service } = require('egg');

class UserService extends Service {
  async getUserByName(username) {
    const {app} = this;

    try {
      const result = await app.mysql.get('user', { username })

      return result;
    } catch (e) {
      console.error('查询用户名错误', e);
      return null;
    }
  }

  async register(params) {
    const {app} = this;
    try {
      const result = await app.mysql.insert('user', params);
      return result;
    } catch (e) {
      console.error('注册用户错误', e);
      return null;
    }
  }
}

module.exports = UserService;