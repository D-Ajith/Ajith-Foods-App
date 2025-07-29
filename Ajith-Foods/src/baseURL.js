const baseURL =
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000/"
    : "https://ajith-foods-app.onrender.com/";

export default baseURL;
