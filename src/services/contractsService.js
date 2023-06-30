import axiosInstance from "../services/AxiosInstance";

class contractDataService {
  get() {
    return axiosInstance.get("admins/contracts");
  }

  getAll(id) {
    return axiosInstance.get(`admins/contracts/company/${id}`);
  }

  create(data) {
    return axiosInstance.post("admins/contracts", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/contracts/${id}`, data);
  }

  delete(id) {
    return axiosInstance.delete(`admins/contracts/${id}`);
  }

  // deleteAll() {
  //     return axiosInstance.delete(`admins/contracts`);
  // }

  // findByName(name) {
  //     return axiosInstance.get(`admins/contracts?name=${name}`);
  // }
}

export default new contractDataService();
