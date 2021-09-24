import axios from "axios";
const url = "https://us-central1-cm-devops-294019.cloudfunctions.net/status";
export const getAPI = () => axios.get(url);
