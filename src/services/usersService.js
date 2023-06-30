import axiosInstance from "../services/AxiosInstance";

class UserDataService {
  getAll() {
    return axiosInstance.get("admins/users");
  }

  // get(id) {
  //   return axiosInstance.get(`admins/users/${id}`);
  //  }

  create(data) {
    return axiosInstance.post("admins/users", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/users/${id}`, data);
  }

  // delete(id) {
  //   return axiosInstance.delete(`admins/users/${id}`);
  // }

  // deleteAll() {
  //   return axiosInstance.delete(`admins/users`);
  // }

  // findByName(name) {
  //   return axiosInstance.get(`admins/query/users?name=${name}`);
  // }
}

export default new UserDataService();
