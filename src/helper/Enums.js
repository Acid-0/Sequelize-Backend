// const {enums} = require("enums");
module.exports = {
  ActivityFlag: {
    add: 1,
    edit: 2,
    delete: 3,
    de_active: 4,
  },
  ErrorCode: {
    success: 0,
    updated: 1,
    failed: 2,
    exist: 3,
    not_exist: 4,
    exception: 5,
    not_verified: 6,
    invalid_data: 7,
    no_record_found: 8,
  },

  RoleType: {
    customer: 0,
    employee: 1,
    reseptionist: 2,
    system_user: 3,
  },

  HttpStatus: {
    ok: 200,
    bad_request: 400,
    not_found: 404,
    internal_server_error: 500,
  },
  contact_back: {
    no: 0,
    yes: 1,
  },
  category: {
    web: 0,
    mobile: 1,
    UIUX: 2,
    graphics: 3,
    video: 4,
    branding: 5,
  },
};
