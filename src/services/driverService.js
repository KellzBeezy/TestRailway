import axiosInstance from "../services/AxiosInstance";

class DriverDataService {
  getAll() {
    return axiosInstance.get("admins/drivers");
  }

  get(company_id) {
    return axiosInstance.get(`admins/drivers/${company_id}`);
  }

  create(data) {
    return axiosInstance.post("admins/drivers", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/drivers/${id}`, data);
  }

  delete(id) {
    return axiosInstance.delete(`admins/drivers/${id}`);
  }

  // deleteAll() {
  //   return axiosInstance.delete(`admins/drivers`);
  // }

  // findByName(name) {
  //   return axiosInstance.get(`admins/driver?name=${name}`);
  // }
}

export default new DriverDataService();
