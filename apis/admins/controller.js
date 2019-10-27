import adminService from './service';
async function getList(req, res) {
  try {
    const data = await adminService.getList()
    return res.success(
      data
    );
  } catch (e) {
    return res.error(e);

  }

}

async function createNewAdmin(req, res) {
  try {
    await adminService.create(req.body);
    return res.success();
  } catch (e) {
    return res.error(e);
  }
};
export default {
  getList,
  createNewAdmin
}