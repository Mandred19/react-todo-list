import axios, { AxiosInstance } from 'axios';
import { API_VERSION } from './constants';

export const API: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? `http://localhost:7200/${API_VERSION}` : `http://localhost:5000/${API_VERSION}`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export const hexToRgb = (hex: string): {r: number, g: number, b: number} => {
  const bigint = parseInt(hex.replace('#', ''), 16);

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};
