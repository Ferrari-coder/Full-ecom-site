import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTNlZmUwOGZjNDJhNmNjNDkzNTJhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Nzg0ODYwMiwiZXhwIjoxNjc4MTA3ODAyfQ.PZjsk1t2j-28QN3WKBhJpkCzjJY1JIbf0wSUcQtImV4"

// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// .currentUser)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTNlZmUwOGZjNDJhNmNjNDkzNTJhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Nzg0ODYwMiwiZXhwIjoxNjc4MTA3ODAyfQ.PZjsk1t2j-28QN3WKBhJpkCzjJY1JIbf0wSUcQtImV4

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
