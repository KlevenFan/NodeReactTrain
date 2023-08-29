const Service = require('egg').Service;

class HomeService extends Service {
  // async user() {
  //   // 假设从数据库获取的用户信息
  //   return {
  //     name: '嘎子',
  //     slogen: '网络的世界太虚拟,你把握不住'
  //   };
  // }

  async user() {
    const {ctx, app} = this;
    const QUERY_STR = 'id, name';
    let sql = `select ${QUERY_STR} from list`;
    try {
      const result = await app.mysql.query(sql);
      return result;
    } catch (e) {
      console.log(error);
      return null;
    }
  }

  async addUser(name) {
    const { ctx, app } = this;
    try {
      const result = await app.mysql.insert('list', { name }); // 给 list 表，新增一条数据
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async editUser(id, name) {
    const {ctx, app} = this;
    try {
      const result = await app.mysql.update('list', {name}, {
        where: {
          id
        }
      })
      return result;
    } catch (e) {
      console.log(error);
      return null;
    }
  }

  async deleteUser(id) {
    const {ctx, app} = this;

    try {
      const result = await app.mysql.delete('list', {id});
      return result;
    } catch (e) {
      console.log(error);
      return null;
    }
  }
}
module.exports = HomeService;