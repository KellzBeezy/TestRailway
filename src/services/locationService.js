import axiosInstance from "../services/AxiosInstance";

class locationService {
  getAll() {
    return axiosInstance.get("admins/location");
  }

  get(id) {
    return axiosInstance.get(`admins/location/${id}`);
  }

  create(data) {
    return axiosInstance.post("admins/location", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/location/${id}`, data);
  }

  delete(id) {
    return axiosInstance.delete(`admins/location/${id}`);
  }

  // deleteAll() {
  //     return axiosInstance.delete(`admins/location`);
  // }

  // findByName(name) {
  //     return axiosInstance.get(`admins/location?name=${name}`);
  // }
}

export default new locationService();
