const { isAuthorizedCall } = require("../access/access.grpc.mdw");
const LocationController = require("./location.controller");

const getDistrictById = (call, callback) => {
  // console.log(callback);
  const accessAuthorized = isAuthorizedCall(call);
  if (!accessAuthorized) {
    callback(new Error("No Permission"));
  }

  LocationController.handleGetDistrict({ id: call.request.id })
    .then((data) => callback(null, data))
    .catch((err) => {
      // console.log(err);
      callback(err);
    });
};

const districts = (call, callback) => {
  const accessAuthorized = isAuthorizedCall(call);
  if (!accessAuthorized) {
    callback(new Error("No Permission"));
  }

  LocationController.handleGetAllDistricts()
    .then((data) => callback(null, { items: data }))
    .catch((err) => {
      // console.log(err);
      callback(err);
    });
};

const getProvinceById = (call, callback) => {
  const accessAuthorized = isAuthorizedCall(call);
  if (!accessAuthorized) {
    callback(new Error("No Permission"));
  }

  LocationController.handleGetProvince({ provinceId: call.request.id })
    .then((data) => callback(null, data))
    .catch((err) => {
      // console.log(err);
      callback(err);
    });
};

const provinces = (call, callback) => {
  const accessAuthorized = isAuthorizedCall(call);
  if (!accessAuthorized) {
    callback(new Error("No Permission"));
  }

  LocationController.handleGetAllProvinces()
    .then((data) => callback(null, { items: data }))
    .catch((err) => {
      // console.log(err);
      callback(err);
    });
};

const upsertDistrict = (call, callback) => {
  const accessAuthorized = isAuthorizedCall(call);
  if (!accessAuthorized) {
    callback(new Error("No Permission"));
  }

  LocationController.handleUpsertDistrict({
    id: call.request.id,
    name: call.request.districtName,
    provinceId: call.request.provinceId,
  })
    .then((data) => callback(null, data))
    .catch((err) => {
      // console.log(err);
      callback(err);
    });
};

const removeDistrict = (call, callback) => {
  const accessAuthorized = isAuthorizedCall(call);
  if (!accessAuthorized) {
    callback(new Error("No Permission"));
  }

  LocationController.handleRemoveDistrict({ id: call.request.id })
    .then((data) => callback(null, data))
    .catch((err) => {
      // console.log(err);
      callback(err);
    });
};

const upsertProvince = (call, callback) => {
  const accessAuthorized = isAuthorizedCall(call);
  if (!accessAuthorized) {
    callback(new Error("No Permission"));
  }

  LocationController.handleUpsertProvince({
    id: call.request.id,
    name: call.request.provinceName,
  })
    .then((data) => callback(null, data))
    .catch((err) => {
      // console.log(err);
      callback(err);
    });
};

const removeProvince = (call, callback) => {
  const accessAuthorized = isAuthorizedCall(call);
  if (!accessAuthorized) {
    callback(new Error("No Permission"));
  }

  LocationController.handleRemoveProvince({ id: call.request.id })
    .then((data) => callback(null, data))
    .catch((err) => {
      // console.log(err);
      callback(err);
    });
};

const DistrictServiceRPC = {
  getDistrictById,
  districts,
  upsertDistrict,
  removeDistrict,
};

const ProvinceServiceRPC = {
  getProvinceById,
  provinces,
  upsertProvince,
  removeProvince,
};

module.exports = { DistrictServiceRPC, ProvinceServiceRPC };
