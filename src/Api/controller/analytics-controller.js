const common = require("../../helper/common");
const Enums = require("../../helper/Enums");
const Messages = require("../../helper/Messages");
const service = require("../service/analytics-service");
module.exports = {
    postAnalyticsController,
    getAnalyticsController,
    getAllAnalyticsController,
    deleteAnalyticsController,
};
async function postAnalyticsController(req, res) {
    try {
        const body = req.body;
        const result = await service.postAnalyticsService(body);

        if (result) {
            if (body.id && result[0] === 1) {
                const data = common.success(
                    Messages.MSG_UPDATE_SUCCESS,
                    Enums.ErrorCode.success,
                    result
                );
                return res.json(data);
            } else if (!body.id) {
                const data = common.success(
                    Messages.MSG_SUCCESS,
                    Enums.ErrorCode.success,
                    result
                );
                return res.json(data);
            } else {
                const data = common.success(
                    Messages.MSG_UPDATE_FAILED,
                    Enums.ErrorCode.success,
                    result
                );
                return res.json(data);
            }
        } else {
            const data = common.error(
                Messages.MSG_INVALID_DATA,
                Enums.ErrorCode.failed
            );
            return res.json(data);
        }
    } catch (error) {
        const data = common.error(
            Messages.MSG_INVALID_DATA,
            Enums.ErrorCode.failed,
            error.name
        );
        return res.json(data);
    }
}
async function getAnalyticsController(req, res) {
    try {
        const body = req.query;
        const result = await service.getAnalyticsService(body);
        if (result) {
            const data = common.success(
                Messages.MSG_DATA_FOUND,
                Enums.ErrorCode.success,
                result.dataValues
            );
            return res.json(data);
        } else {
            const data = common.error(
                Messages.MSG_INVALID_DATA,
                Enums.ErrorCode.not_exist
            );
            return res.json(data);
        }
    } catch (error) {
        const data = common.error(
            Messages.MSG_DB_CONNECTION_ERROR,
            Enums.ErrorCode.failed,
            error.message
        );
        return res.json(data);
    }
}

async function getAllAnalyticsController(req, res) {
    try {
        const body = req.query;
        if (!body.page || isNaN(body.page) || body.page < 0) {
            body.page = 1;
        }
        if (!body.limit || isNaN(body.limit) || body.limit < 0) {
            body.limit = 10;
        }
        const result = await service.getAllAnalyticsService(body);

        if (result) {
            if (result.count === 0) {
                const data = common.error(
                    Messages.MSG_NO_RECORD,
                    Enums.ErrorCode.not_exist
                );
                return res.json(data);
            } else {
                const data = common.pagination(
                    result.rows,
                    result.count,
                    body.page,
                    body.limit
                );
                return res.json(data);
            }
        } else {
            const data = common.error(
                Messages.MSG_INVALID_DATA,
                Enums.ErrorCode.failed
            );
            return res.json(data);
        }
    } catch (error) {
        const data = common.error(
            Messages.MSG_INVALID_DATA,
            Enums.ErrorCode.failed,
            error.message
        );
        return res.json(data);
    }
}

async function deleteAnalyticsController(req, res) {
    try {
        const body = req.body;
        const result = await service.deleteAnalyticsService(body);
        if (result) {
            const data = common.success(
                Messages.MSG_DELETE_SUCCESS,
                Enums.ErrorCode.success,
                result
            );
            return res.json(data);
        } else {
            const data = common.error(
                Messages.MSG_INVALID_DATA,
                Enums.ErrorCode.not_exist
            );
            return res.json(data);
        }
    } catch (error) {
        const data = common.error(
            Messages.MSG_DB_CONNECTION_ERROR,
            Enums.ErrorCode.failed,
            error.message
        );
        return res.json(data);
    }
}
