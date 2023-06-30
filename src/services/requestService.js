import axiosInstance from "../services/AxiosInstance";

class RequestDataService {
  getAll() {
    return axiosInstance.get("admins/requests");
  }

  get(company_id) {
    return axiosInstance.get(`admins/requests/${company_id}`);
  }

  create(data) {
    return axiosInstance.post("admins/requests", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/requests/${id}`, data);
  }

  delete(id) {
    return axiosInstance.delete(`admins/requests/${id}`);
  }

  // deleteAll() {
  //   return axiosInstance.delete(`admins/requests`);
  // }

  // findByName(name) {
  //   return axiosInstance.get(`admins/requests?name=${name}`);
  // }
}

export default new RequestDataService();
