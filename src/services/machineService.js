import axiosInstance from "../services/AxiosInstance";

class MachineDataService {
  getAll() {
    return axiosInstance.get("admins/machines");
  }

  get(company_id) {
    return axiosInstance.get(`admins/machines/${company_id}`);
  }

  create(data) {
    return axiosInstance.post("admins/machines", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/machines/${id}`, data);
  }

  delete(id) {
    return axiosInstance.delete(`admins/machines/${id}`);
  }

  deleteAll() {
    return axiosInstance.delete(`admins/machines`);
  }
}

export default new MachineDataService();
