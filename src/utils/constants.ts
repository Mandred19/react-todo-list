export const APP_NAME = 'Task list';

export const API_VERSION = 'api/v1';

export const BASE_URL = process.env.NODE_ENV === 'production' ? `http://localhost:7200/${API_VERSION}` : `http://localhost:5000/${API_VERSION}`;
