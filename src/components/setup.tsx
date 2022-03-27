// setup
export const dateFormat = "MM[/]D[/]YY";
export const menuList: string[] = ["designs", "setouts"];
export const SERVER_URL = "http://localhost:5000/";

// status initialiser
export const initialMenu: string = menuList[0];
export const initialDesigns = {
  name: "Designs",
  headers: ["Name", "Courses", "Wales", "Last Updated", "By"],
  data: [],
};
export const initialSetouts = {
  name: "Setouts",
  headers: ["Name", "Machine Name", "Machine Width", "Courses", "Last Updated"],
  data: [],
};
export const initialUsers = {
  name: "Users",
  headers: ["Id", "Name"],
  data: [],
};
