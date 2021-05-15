import axios from "axios";
const BASEURL =
  "https://randomuser.me/api/?seed=foobar&nat=us&inc=name,phone,email,dob,picture&results=50";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getEmployees: function () {
    return axios.get(BASEURL);
  },
};
