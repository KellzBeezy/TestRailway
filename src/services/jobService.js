import axiosInstance from "../services/AxiosInstance";

class JobDataService {
  getAll() {
    return axiosInstance.get("admins/jobs");
  }

  get(company_id) {
    return axiosInstance.get(`admins/jobs/${company_id}`);
  }

  create(data) {
    return axiosInstance.post("admins/jobs", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/jobs/${id}`, data);
  }

  delete(id) {
    return axiosInstance.delete(`admins/jobs/${id}`);
  }

  // deleteAll() {
  //   return axiosInstance.delete(`admins/jobs`);
  // }

  // findByName(name) {
  //   return axiosInstance.get(`admins/jobs?name=${name}`);
  // }
}

export default new JobDataService();
