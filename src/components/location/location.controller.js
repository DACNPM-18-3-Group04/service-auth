const DistrictServices = require("./services");

const handleGetDistrict = ({ id }) => {
  return new Promise((resolver, reject) => {
    DistrictServices.getDistrictById(id)
      .then((data) => {
        resolver(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const handleUpsertDistrict = ({ id, name, provinceId }) => {
  return new Promise((resolver, reject) => {
    DistrictServices.upsertDistrict({ id, dtName: name, provinceId })
      .then((data) => {
        resolver({
          district: data,
          message: "Update successfully",
        });
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const handleGetProvince = ({ provinceId }) => {
  return new Promise((resolver, reject) => {
    DistrictServices.getProvinceById(provinceId)
      .then((data) => {
        resolver(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const handleUpsertProvince = ({ id, name }) => {
  return new Promise((resolver, reject) => {
    DistrictServices.upsertProvince({ id, name })
      .then((data) => {
        resolver({
          province: data,
          message: "Updated successfully",
        });
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const handleRemoveDistrict = ({ id }) => {
  return new Promise((resolver, reject) => {
    DistrictServices.removeDistrict(id)
      .then((data) => {
        resolver({
          success: data,
          message: "Removed successfully",
        });
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const handleRemoveProvince = ({ id }) => {
  return new Promise((resolver, reject) => {
    DistrictServices.removeProvince(id)
      .then((data) => {
        resolver({
          success: data,
          message: "Removed successfully",
        });
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const handleGetAllDistricts = () => {
  return new Promise((resolver, reject) => {
    DistrictServices.getAllDistricts()
      .then((data) => {
        resolver(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const handleGetAllProvinces = () => {
  return new Promise((resolver, reject) => {
    DistrictServices.getAllProvinces()
      .then((data) => {
        resolver(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const LocationController = {
  handleGetDistrict,
  handleUpsertDistrict,
  handleGetProvince,
  handleUpsertProvince,
  handleRemoveDistrict,
  handleRemoveProvince,
  handleGetAllDistricts,
  handleGetAllProvinces,
};

module.exports = LocationController;
