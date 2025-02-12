const Courses = ({courses}) => {
    return (
        courses.map(c=> <CourseInfo key={c.id} course={c}/>)
    )
}

export default Courses;

const CourseInfo = ({course}) => {

return (
    <div>
        <h1>{course.course}</h1>
        <p>Teacher: {course.teacher}</p>
        <p>Classroom: {course.classroom}</p>
        <a href={course.material}>Materiaali</a>
    </div>    
)
}
