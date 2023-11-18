import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;

const myFormat = printf(
  ({ level, message, label, timestamp }) => `${timestamp} || [${label}] || ${level}: ${message}`
);

const logger = async (action: string, message: string) => {
  const logger = createLogger({
    format: combine(label({ label: `tracking action: ${action}` }), timestamp(), myFormat),
    transports: [new transports.Console()],
  });

  logger.log({ level: 'info', message });
};

export default logger;
