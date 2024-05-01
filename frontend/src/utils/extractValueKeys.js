export const processData = (data) => {
  const extracted = { name: "", courses: [] };
  var pos = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "Fullname") {
      extracted.name = data[i + 1].slice(2);
    }
    if (data[i] === "SRCODE") {
      extracted.srcode = data[i + 1].slice(2);
    }
    if (data[i] === "Academic Year") {
      extracted.academic_year = data[i + 1].slice(2);
    }
    if (data[i] === "Program") {
      extracted.degree = data[i + 1].slice(2);
    }
    if (data[i] === "Instructor") {
      pos = i + 1;
      break;
    }
  }
  console.log(pos);
  for (let i = 0; i < data.slice(pos).length; i = i + 7) {
    // console.log(data.slice(pos).slice(i, i + 7));

    const val = {};
    var start = i;
    if (isNaN(data.slice(pos)[i])) {
      start = i + 1;
    }
    val.courseCode = data.slice(pos)[start + 1];
    val.courseTitle = data.slice(pos)[start + 2];
    val.units = parseInt(data.slice(pos)[start + 3]);
    val.grade = parseFloat(data.slice(pos)[start + 4]);
    val.section = data.slice(pos)[start + 5];
    val.instructor = data.slice(pos)[start + 6];
    if (
      !Object.values(val).every((el) => {
        console.log(!!el);
        return !!el;
      })
    ) {
      break;
    }
    extracted.courses.push(val);
  }
  return extracted;
};
