import logger from '../utils/logger';

const handleError = (error) => {
    logger.error(error);
    return error.isBusinessError;
};

module.exports = {
    handleError
}