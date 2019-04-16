const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

const formatter = printf(info => {
    return `${info.timestamp} ${info.level} :: ${info.message}`;
});

const logger = createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: combine( colorize({level: true}), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), formatter ),
    transports: [new transports.Console()]
});

module.exports.info = (message) => { logger.info(message); };
module.exports.error = (message) => { logger.error(message); };
module.exports.debug = (message) => { logger.debug(message); };