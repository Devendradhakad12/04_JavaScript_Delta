let users = [
  {
    name: "devnedra",
    subject: "maths",
  },
  {
    name: "pavan",
    subject: "maths",
  },
  {
    name: "ajay",
    subject: "science",
  },
  {
    name: "deepak",
    subject: "physics",
  },
  {
    name: "bharat",
    subject: "science",
  },
  {
    name: "ajay",
    subject: "computer science",
  },
  {
    name: "param",
    subject: "social science",
  },
];

let findUser = (q) => {
  let regexp = new RegExp(q,"i");  // 'i' flag for case-insensitive search
  return users.filter((i) => {
    return regexp.test(i.name) || regexp.test(i.subject);
  });
};

console.log(findUser("sc"));
