import axiosInstance from "../services/AxiosInstance";

class assignService {
  getAll() {
    return axiosInstance.get("admins/assign");
  }

  get(id) {
    return axiosInstance.get(`admins/assign/${id}`);
  }

  create(data) {
    return axiosInstance.post("admins/assign", data);
  }

  update(id, data) {
    return axiosInstance.put(`admins/assign/${id}`, data);
  }

  delete(driverId, machineId) {
    return axiosInstance.delete(`admins/assign/${driverId}/${machineId}`);
  }

  // deleteAll() {
  //     return axiosInstance.delete(`picktech/assign`);
  // }c
}

export default new assignService();
