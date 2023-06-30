import axiosInstance from "../services/AxiosInstance";

class adminService {
  getAll() {
    return axiosInstance.get("admins/admin");
  }

  get(id) {
    return axiosInstance.get(`admins/admin/${id}`);
  }

  create(data) {
    return axiosInstance.post("admins/admin", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/admin/${id}`, data);
  }

  delete(id) {
    return axiosInstance.delete(`admins/admin/${id}`);
  }

  // deleteAll() {
  //     return axiosInstance.delete(`admins/`);
  // }

  // findByName(name) {
  //     return axiosInstance.get(`admin/?name=${name}`);
  // }
}

export default new adminService();
