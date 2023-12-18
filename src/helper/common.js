const Enums = require("./Enums");
const Messages = require("./Messages");

module.exports = {
  success: (message, error_code, result) => {
    return {
      error_code: error_code,
      message: message,
      success: true,
      status: Enums.HttpStatus.ok,
      result: result,
    };
  },

  error: (message, error_code, result) => {
    return {
      error_code: error_code,
      message: message,
      success: false,
      status: Enums.HttpStatus.bad_request,
      error: result,
    };
  },
  pagination: function (data, total_records, page, limit) {
    return {
      error_code: Enums.ErrorCode.success,
      success: true,
      status: Enums.HttpStatus.ok,
      message: Messages.MSG_DATA_FOUND,
      total_records: total_records,
      page_number: parseInt(page),
      total_pages: Math.ceil(total_records / limit),
      result: data,
    };
  },

  successList: (message, error_code, result) => {
    return {
      error_code: error_code,
      message: message,
      success: true,
      status: Enums.HttpStatus.ok,
      result: result,
    };
  },
};
