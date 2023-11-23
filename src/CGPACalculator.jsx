// import  { useState } from 'react';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // Set the root element for React Modal

// const CGPACalculator = () => {
//   // State variables for grades, CGPA, and modal visibility
//   const [grades, setGrades] = useState({
//     subject1: '',
//     subject2: '',
//     subject3: '',
//     subject4: '',
//     subject5: '',
//   });

//   const [cgpa, setCGPA] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Mapping grades to their respective numeric equivalents
//   const gradeMapping = {
//     A: 4.0,
//     B: 3.0,
//     C: 2.0,
//     D: 1.0,
//     // Add more grades and their equivalents if needed
//   };

//   // Handle changes in grade selection for each subject
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setGrades((prevGrades) => ({
//       ...prevGrades,
//       [name]: value,
//     }));
//   };

//   // Calculate CGPA based on selected grades
//   const calculateCGPA = () => {
//     const { subject1, subject2, subject3, subject4, subject5 } = grades;

//     // Calculate total grade points and CGPA
//     const totalGradePoints =
//       gradeMapping[subject1] +
//       gradeMapping[subject2] +
//       gradeMapping[subject3] +
//       gradeMapping[subject4] +
//       gradeMapping[subject5];

//     const totalSubjects = 5; // Assuming 5 subjects
//     const calculatedCGPA = totalGradePoints / totalSubjects;

//     // Set CGPA and open modal to display the result
//     setCGPA(calculatedCGPA.toFixed(2));
//     setIsModalOpen(true);
//   };

//   // Close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Button to calculate CGPA */}
//       <div className="mb-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={calculateCGPA}
//         >
//           Calculate CGPA
//         </button>
//       </div>

//       {/* Dropdowns for selecting grades */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {Array.from({ length: 5 }, (_, index) => (
//           <select
//             key={index}
//             name={`subject${index + 1}`}
//             value={grades[`subject${index + 1}`]}
//             onChange={handleInputChange}
//             className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//             required // Ensures that a grade is selected for each subject
//           >
//             <option value="">Select Grade for Subject {index + 1}</option>
//             <option value="A">A</option>
//             <option value="B">B</option>
//             <option value="C">C</option>
//             <option value="D">D</option>
//             {/* Add more grade options if needed */}
//           </select>
//         ))}
//       </div>

//       {/* Modal for displaying the CGPA result */}
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="CGPA Result"
//         className="Modal"
//         overlayClassName="Overlay"
//       >
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Calculated CGPA</h2>
//           <p className="text-3xl font-bold">{cgpa}</p>
//           <button
//             onClick={closeModal}
//             className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default CGPACalculator;
// import "./assets/gpa.css";
// import { useState } from "react";
// import Modal from "react-modal";
// ("use client");

// import { Accordion } from "flowbite-react";

// // Set the root element for React Modal
// Modal.setAppElement("#root");

// const CGPACalculator = () => {
//   const [grades, setGrades] = useState({
//     subject1: "",
//     subject2: "",
//     subject3: "",
//     subject4: "",
//     subject5: "",
//   });
//   const [cgpa, setCGPA] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const gradeMapping = {
//     A: 4.0,
//     B: 3.0,
//     C: 2.0,
//     D: 1.0,
//     // Add more grades and their equivalents if needed
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setGrades((prevGrades) => ({
//       ...prevGrades,
//       [name]: value,
//     }));
//   };

//   const calculateCGPA = () => {
//     const { subject1, subject2, subject3, subject4, subject5 } = grades;

//     const totalGradePoints =
//       gradeMapping[subject1] +
//       gradeMapping[subject2] +
//       gradeMapping[subject3] +
//       gradeMapping[subject4] +
//       gradeMapping[subject5];

//     const totalSubjects = 5; // Assuming 5 subjects
//     const calculatedCGPA = totalGradePoints / totalSubjects;

//     setCGPA(calculatedCGPA.toFixed(2));
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Accordion>
//         <Accordion.Panel>
//           <Accordion.Title>What is Flowbite?</Accordion.Title>
//           <Accordion.Content>
//             <div className="container mx-auto p-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Input fields for grades */}
//                 {Array.from({ length: 5 }, (_, index) => (
//                   <select
//                     key={index}
//                     name={`subject${index + 1}`}
//                     value={grades[`subject${index + 1}`]}
//                     onChange={handleInputChange}
//                     className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//                     required
//                   >
//                     <option value="">
//                       Select Grade for Subject {index + 1}
//                     </option>
//                     <option value="A">A</option>
//                     <option value="B">B</option>
//                     <option value="C">C</option>
//                     <option value="D">D</option>
//                     {/* Add more grade options if needed */}
//                   </select>
//                 ))}
//               </div>
//             </div>
//           </Accordion.Content>
//         </Accordion.Panel>
//         <Accordion.Panel>
//           <Accordion.Title>Is there a Figma file available?</Accordion.Title>
//           <Accordion.Content>
//             <div className="container mx-auto p-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Input fields for grades */}
//                 {Array.from({ length: 5 }, (_, index) => (
//                   <select
//                     key={index}
//                     name={`subject${index + 1}`}
//                     value={grades[`subject${index + 1}`]}
//                     onChange={handleInputChange}
//                     className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//                     required
//                   >
//                     <option value="">
//                       Select Grade for Subject {index + 1}
//                     </option>
//                     <option value="A">A</option>
//                     <option value="B">B</option>
//                     <option value="C">C</option>
//                     <option value="D">D</option>
//                     {/* Add more grade options if needed */}
//                   </select>
//                 ))}
//               </div>
//             </div>
//           </Accordion.Content>
//         </Accordion.Panel>
//         <Accordion.Panel>
//           <Accordion.Title>
//             What are the differences between Flowbite and Tailwind UI?
//           </Accordion.Title>
//           <Accordion.Content>
//             <div className="container mx-auto p-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Input fields for grades */}
//                 {Array.from({ length: 5 }, (_, index) => (
//                   <select
//                     key={index}
//                     name={`subject${index + 1}`}
//                     value={grades[`subject${index + 1}`]}
//                     onChange={handleInputChange}
//                     className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//                     required
//                   >
//                     <option value="">
//                       Select Grade for Subject {index + 1}
//                     </option>
//                     <option value="A">A</option>
//                     <option value="B">B</option>
//                     <option value="C">C</option>
//                     <option value="D">D</option>
//                     {/* Add more grade options if needed */}
//                   </select>
//                 ))}
//               </div>

//               <Modal
//                 isOpen={isModalOpen}
//                 onRequestClose={closeModal}
//                 className="modal bg-white w-[70%] mx-auto mb-32 rounded-lg p-6"
//                 overlayClassName="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-75"
//               >
//                 <div className="modal-content">
//                   <h2 className="text-2xl font-bold mb-4">Calculated CGPA</h2>
//                   <p className="text-3xl font-bold">CGPA: {cgpa}</p>
//                   <button
//                     onClick={closeModal}
//                     className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </Modal>
//             </div>
//           </Accordion.Content>
//         </Accordion.Panel>
//       </Accordion>

//       <div className="mb-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={calculateCGPA}
//         >
//           Calculate CGPA
//         </button>
//       </div>
//     </>
//   );
// };

// export default CGPACalculator;

// import  { useState } from 'react';
// import { Accordion } from 'flowbite-react';

// const CGPACalculator = () => {
//   const [grades, setGrades] = useState({
//     subject1: '',
//     subject2: '',
//     subject3: '',
//     subject4: '',
//     subject5: '',
//   });
//   const [cgpa, setCGPA] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const gradeMapping = {
//     A: 4.0,
//     B: 3.0,
//     C: 2.0,
//     D: 1.0,
//     // Add more grades and their equivalents if needed
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setGrades((prevGrades) => ({
//       ...prevGrades,
//       [name]: value,
//     }));
//   };

//   const calculateCGPA = () => {
//     const { subject1, subject2, subject3, subject4, subject5 } = grades;

//     const totalGradePoints =
//       gradeMapping[subject1] +
//       gradeMapping[subject2] +
//       gradeMapping[subject3] +
//       gradeMapping[subject4] +
//       gradeMapping[subject5];

//     const totalSubjects = 5; // Assuming 5 subjects
//     const calculatedCGPA = totalGradePoints / totalSubjects;

//     setCGPA(calculatedCGPA.toFixed(2));
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <Accordion>
//         <Accordion.Panel>
//           <Accordion.Title>Grades Input</Accordion.Title>
//           <Accordion.Content>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Input fields for grades */}
//               {Array.from({ length: 5 }, (_, index) => (
//                 <select
//                   key={index}
//                   name={`subject${index + 1}`}
//                   value={grades[`subject${index + 1}`]}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//                   required
//                 >
//                   <option value="">Select Grade for Subject {index + 1}</option>
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                   <option value="C">C</option>
//                   <option value="D">D</option>
//                   {/* Add more grade options if needed */}
//                 </select>
//               ))}
//             </div>
//           </Accordion.Content>
//         </Accordion.Panel>
//       </Accordion>

//       {/* Rest of the code - Calculate Button and Modal */}
//       <div className="mb-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={calculateCGPA}
//         >
//           Calculate CGPA
//         </button>
//       </div>

//       {/* Modal for displaying the CGPA */}
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         className="modal"
//         overlayClassName="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-75"
//       >
//         <div className="modal-content">
//           <h2 className="text-2xl font-bold mb-4">Calculated CGPA</h2>
//           <p className="text-3xl font-bold">CGPA: {cgpa}</p>
//           <button
//             onClick={closeModal}
//             className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default CGPACalculator;




















// import  { useState } from 'react';
// import Modal from 'react-modal';
// import { Accordion } from 'flowbite-react';

// Modal.setAppElement('#root');

// const CGPACalculator = () => {
//   const [courses, setCourses] = useState([
//     { name: 'Course 1', grades: ['', '', '', '', ''], cgpa: 0, isModalOpen: false },
//     { name: 'Course 2', grades: ['', '', '', '', ''], cgpa: 0, isModalOpen: false },
//     // Add more courses as needed
//   ]);

//   const gradeMapping = {
//     A: 4.0,
//     B: 3.0,
//     C: 2.0,
//     D: 1.0,
//     // Add more grades and their equivalents if needed
//   };

//   const handleInputChange = (courseIndex, subjectIndex, value) => {
//     const updatedCourses = [...courses];
//     updatedCourses[courseIndex].grades[subjectIndex] = value;
//     setCourses(updatedCourses);
//   };

//   const calculateCGPA = (courseIndex) => {
//     const grades = courses[courseIndex].grades;

//     const totalGradePoints = grades.reduce((total, grade) => {
//       return total + gradeMapping[grade];
//     }, 0);

//     const totalSubjects = 5; // Assuming 5 subjects
//     const calculatedCGPA = totalGradePoints / totalSubjects;

//     const updatedCourses = [...courses];
//     updatedCourses[courseIndex] = {
//       ...updatedCourses[courseIndex],
//       cgpa: calculatedCGPA.toFixed(2),
//       isModalOpen: true,
//     };

//     setCourses(updatedCourses);
//   };

//   const closeModal = (courseIndex) => {
//     const updatedCourses = [...courses];
//     updatedCourses[courseIndex].isModalOpen = false;
//     setCourses(updatedCourses);
//   };

//   return (
//     <>
//       <Accordion>
//         {courses.map((course, courseIndex) => (
//           <Accordion.Panel key={courseIndex}>
//             <Accordion.Title>{course.name}</Accordion.Title>
//             <Accordion.Content>
//               <div className="container mx-auto p-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {course.grades.map((grade, subjectIndex) => (
//                     <select
//                       key={subjectIndex}
//                       value={grade}
//                       onChange={(e) => handleInputChange(courseIndex, subjectIndex, e.target.value)}
//                       className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//                       required
//                     >
//                       <option value="">Select Grade for Subject {subjectIndex + 1}</option>
//                       <option value="A">A</option>
//                       <option value="B">B</option>
//                       <option value="C">C</option>
//                       <option value="D">D</option>
//                       {/* Add more grade options if needed */}
//                     </select>
//                   ))}
//                 </div>
//                 <Modal
//                   isOpen={course.isModalOpen}
//                   onRequestClose={() => closeModal(courseIndex)}
//                   className="modal bg-white w-[70%] mx-auto mb-32 rounded-lg p-6"
//                   overlayClassName="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-75"
//                 >
//                   <div className="modal-content">
//                     <h2 className="text-2xl font-bold mb-4">Calculated CGPA for {course.name}</h2>
//                     <p className="text-3xl font-bold">CGPA: {course.cgpa}</p>
//                     <button
//                       onClick={() => closeModal(courseIndex)}
//                       className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </Modal>
//               </div>
//             </Accordion.Content>
//           </Accordion.Panel>
//         ))}
//       </Accordion>

//       <div className="mb-4">
//         {courses.map((course, courseIndex) => (
//           <button
//             key={courseIndex}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
//             onClick={() => calculateCGPA(courseIndex)}
//           >
//             Calculate CGPA for {course.name}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CGPACalculator;
























// import  { useState } from 'react';
// import Modal from 'react-modal';
// import { Accordion } from 'flowbite-react';

// Modal.setAppElement('#root');

// const CGPACalculator = () => {
//   const [courses, setCourses] = useState([
//     { name: 'Course 1', grades: ['', '', '', '', ''], cgpa: 0, isModalOpen: false },
//     { name: 'Course 2', grades: ['', '', '', '', ''], cgpa: 0, isModalOpen: false },
//     // Add more courses as needed
//   ]);

//   const gradeMapping = {
//     A: 4.0,
//     B: 3.0,
//     C: 2.0,
//     D: 1.0,
//     // Add more grades and their equivalents if needed
//   };

//   const calculateCGPA = () => {
//     const updatedCourses = [...courses];

//     updatedCourses.forEach((course, courseIndex) => {
//       const grades = course.grades;

//       const totalGradePoints = grades.reduce((total, grade) => {
//         return total + gradeMapping[grade];
//       }, 0);

//       const totalSubjects = 5; // Assuming 5 subjects
//       const calculatedCGPA = totalGradePoints / totalSubjects;

//       updatedCourses[courseIndex] = {
//         ...updatedCourses[courseIndex],
//         cgpa: calculatedCGPA.toFixed(2),
//         isModalOpen: true,
//       };
//     });

//     setCourses(updatedCourses);
//   };

//   const closeModal = () => {
//     const updatedCourses = courses.map((course) => ({ ...course, isModalOpen: false }));
//     setCourses(updatedCourses);
//   };

//   return (
//     <>
//       <Accordion>
//         {courses.map((course, courseIndex) => (
//           <Accordion.Panel key={courseIndex}>
//             <Accordion.Title>{course.name}</Accordion.Title>
//             <Accordion.Content>
//               <div className="container mx-auto p-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {course.grades.map((grade, subjectIndex) => (
//                     <select
//                       key={subjectIndex}
//                       value={grade}
//                       onChange={(e) => {
//                         const updatedCourses = [...courses];
//                         updatedCourses[courseIndex].grades[subjectIndex] = e.target.value;
//                         setCourses(updatedCourses);
//                       }}
//                       className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//                       required
//                     >
//                       <option value="">Select Grade for Subject {subjectIndex + 1}</option>
//                       <option value="A">A</option>
//                       <option value="B">B</option>
//                       <option value="C">C</option>
//                       <option value="D">D</option>
//                       {/* Add more grade options if needed */}
//                     </select>
//                   ))}
//                 </div>
//               </div>
//             </Accordion.Content>
//           </Accordion.Panel>
//         ))}
//       </Accordion>

//       <div className="mb-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={calculateCGPA}
//         >
//           Calculate Overall CGPA
//         </button>
//       </div>

//       <Modal
//         isOpen={courses[0].isModalOpen || courses[1].isModalOpen}
//         onRequestClose={closeModal}
//         className="modal bg-white w-[70%] mx-auto mb-32 rounded-lg p-6"
//         overlayClassName="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-75"
//       >
//         <div className="modal-content">
//           <h2 className="text-2xl font-bold mb-4">Calculated CGPA for Course 1 and Course 2</h2>
//           <div className="flex justify-between">
//             <div className="text-center">
//               <h3 className="text-xl font-bold mb-2">Course 1</h3>
//               <p className="text-3xl font-bold">CGPA: {courses[0].cgpa}</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-xl font-bold mb-2">Course 2</h3>
//               <p className="text-3xl font-bold">CGPA: {courses[1].cgpa}</p>
//             </div>
//           </div>
//           <button
//             onClick={closeModal}
//             className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default CGPACalculator;






import  { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CGPACalculator = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [courses, setCourses] = useState([
    { name: 'Course 1', grades: ['', '', '', '', ''], cgpa: 0 },
    { name: 'Course 2', grades: ['', '', '', '', ''], cgpa: 0 },
    { name: 'Course 3', grades: ['', '', '', '', ''], cgpa: 0 },
    { name: 'Course 4', grades: ['', '', '', '', ''], cgpa: 0 },
    // Add more courses as needed
  ]);

  const gradeMapping = {
    A: 4.0,
    B: 3.0,
    C: 2.0,
    D: 1.0,
    // Add more grades and their equivalents if needed
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const calculateCGPA = () => {
    const updatedCourses = [...courses];

    updatedCourses.forEach((course, courseIndex) => {
      const grades = course.grades;

      const totalGradePoints = grades.reduce((total, grade) => {
        return total + gradeMapping[grade];
      }, 0);

      const totalSubjects = 5; // Assuming 5 subjects
      const calculatedCGPA = totalGradePoints / totalSubjects;

      updatedCourses[courseIndex] = {
        ...updatedCourses[courseIndex],
        cgpa: calculatedCGPA.toFixed(2),
      };
    });

    setCourses(updatedCourses);
    openModal();
  };

  return (
    <>
      <div className="tabs">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {course.name}
          </div>
        ))}
      </div>

      <div className="tab-content">
        <div className="tab-item">
          <h3>{courses[activeTab].name}</h3>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses[activeTab].grades.map((grade, subjectIndex) => (
                <select
                  key={subjectIndex}
                  value={grade}
                  onChange={(e) => {
                    const updatedCourses = [...courses];
                    updatedCourses[activeTab].grades[subjectIndex] = e.target.value;
                    setCourses(updatedCourses);
                  }}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  required
                >
                  <option value="">Select Grade for Subject {subjectIndex + 1}</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  {/* Add more grade options if needed */}
                </select>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={calculateCGPA}
        >
          Calculate Overall CGPA
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal bg-white w-[70%] mx-auto mb-32 rounded-lg p-6 mt-20"
        overlayClassName="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-75"
      >
        <div className="modal-content">
          <h2 className="text-2xl font-bold mb-4">Calculated CGPA for All Courses</h2>
          <div className="flex flex-wrap justify-between">
            {courses.map((course, index) => (
              <div key={index} className="w-[45%] mb-4">
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-3xl font-bold">CGPA: {course.cgpa}</p>
              </div>
            ))}
          </div>
          <button
            onClick={closeModal}
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CGPACalculator;
