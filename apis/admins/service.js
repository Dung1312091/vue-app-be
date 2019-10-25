import Admin from './model';
 function create (admin) {
  return Admin.create(admin);
};
 function getList () {
  return Admin.find({});
};

export default {
  create,
  getList
}
