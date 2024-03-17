import { getCourses, getUserProgress } from "@/db/queries";

import { List } from "./list";

const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [
    courses,
    userProgress,
  ] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  // Filter Math courses
  const mathCourses = courses.filter(course => course.title.toLowerCase().includes('math'));

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">
        Language Courses
      </h1>
      <List
        courses={courses.filter(course => !course.title.toLowerCase().includes('math'))}
        activeCourseId={userProgress?.activeCourseId}
      />
      {/* Horizontal divider */}
      <hr className="my-6 border-t border-neutral-300" />
      {/* Math Courses */}
      <h1 className="text-2xl font-bold text-neutral-700">
        Math Courses
      </h1>
      <List
        courses={mathCourses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
};

export default CoursesPage;
