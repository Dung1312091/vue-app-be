import Admin from './model';

function create(admin) {
  return Admin.create(admin);
};

function getList() {
  return Admin.find({});
};

function findOneAdmin(param) {
  return Admin.findOne(param);
};

export default {
  create,
  getList,
  findOneAdmin
}