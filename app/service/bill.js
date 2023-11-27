const { Service } = require('egg');

class BillService extends Service {
  async add(params) {
    const {ctx, app} = this;
    try {
      const result = app.mysql.insert('bill', params);

      return result;
    } catch (e) {
      console.error('数据添加表单错误', e);
      return null;
    }
  }

  async list(id) {
    const {ctx, app} = this;
    const QUERY_STR = 'id, pay_type, amount, date, type_id, type_name, remark';
    let sql = `select ${QUERY_STR} from bill where user_id = ${id}`;
    try {
      const result = await app.mysql.query(sql);
      return result;
    } catch (e) {
      console.log(error);
      return null;
    }
  }
}

module.exports = BillService;