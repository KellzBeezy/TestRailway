import axiosInstance from "../services/AxiosInstance";

class companyService {
  getAll() {
    return axiosInstance.get("admins/company");
  }

  get(id) {
    return axiosInstance.get(`admins/company/${id}`);
  }

  create(data) {
    return axiosInstance.post("auth/company", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/company/${id}`, data);
  }

  delete(id) {
    return axiosInstance.delete(`picktech/company/${id}`);
  }

  // deleteAll() {
  //     return axiosInstance.delete(`picktech/company`);
  // }

  findByName(email) {
    alert("in service", email);
    return axiosInstance.get(`auth/company/${email}`);
  }
}

export default new companyService();
