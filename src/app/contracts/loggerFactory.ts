import { Logger } from './logger';
import { ConsoleLogger } from './consoleLogger';

let logger: Logger;

export class LoggerFactory {
  public static getInstance(): Logger {
    if (!logger) {
      logger = new ConsoleLogger();
    }
    return logger;
  }
}
