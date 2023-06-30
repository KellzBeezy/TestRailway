import axiosInstance from "../services/AxiosInstance";

class MachineTypeDataService {
  getAll() {
    return axiosInstance.get("admins/machinetypes");
  }

  get(company_id) {
    return axiosInstance.get(`admins/machinetypes/${company_id}`);
  }

  create(data) {
    return axiosInstance.post("admins/machinetypes", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/machinetypes/${id}`, data);
  }

  delete(id) {
    return axiosInstance.delete(`admins/machinetypes/${id}`);
  }

  deleteAll() {
    return axiosInstance.delete(`admins/machinetypes`);
  }
}

export default new MachineTypeDataService();
