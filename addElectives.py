import requests

array=[
["Master of Science in Computer Engineering", 3],
["Straight Master's-Doctoral in Electronics Engineering", 2],
["Doctor Of Philosophy in Engineering Management", 2],
["Doctor Of Philosophy in Engineering Education", 3],
["Master of Science in Transportation Engineering", 2],
["Master of Science in Material Science and Engineering", 2],
["Master of Science in Energy Engineering", 2],
["Master of Science in Earthquake Engineering", 2],
["Master of Science in Advanced Manufacturing", 2],
["Master of Science in Engineering Management", 3],
["Doctor of Philosophy in Electronics Engineering", 2],
["Master of Science in Electronics Engineering", 2],
["Master of Engineering major in Mechanical Engineering", 4],
["Master of Engineering major in Industrial Engineering", 4],
["Master of Engineering major in Environmental Engineering", 4],
["Master of Engineering major in Electrical Engineering", 4],
["Master of Engineering major in Electronics Engineering", 4],
["Master of Engineering major in Computer Engineering", 4],
["Master of Engineering major in Chemical Engineering", 4],
["Master of Engineering major in Civil Engineering", 4],
["Master of Science in Computer Science", 0],
["Master of Science in Data Science", 2],
["Master in Information Technology", 0],
["Master of Technology", 2],
["Doctor of Technology", 2],
["Master of Science in Construction Management", 2],
]

for i in array:
    data = {"degree": i[0], "electives": i[1]}
    response = requests.post("http://localhost:3001/api/v1/course-elective/create", json=data)
    if response.status_code == 200:
        print("**Success")
    else:
        print("**Failed", data)
