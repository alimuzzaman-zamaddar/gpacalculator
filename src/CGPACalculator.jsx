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
import "./assets/gpa.css";
import  { useState } from 'react';
import Modal from 'react-modal';

// Set the root element for React Modal
Modal.setAppElement('#root');

const CGPACalculator = () => {
  const [grades, setGrades] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: '',
  });
  const [cgpa, setCGPA] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gradeMapping = {
    A: 4.0,
    B: 3.0,
    C: 2.0,
    D: 1.0,
    // Add more grades and their equivalents if needed
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGrades((prevGrades) => ({
      ...prevGrades,
      [name]: value,
    }));
  };

  const calculateCGPA = () => {
    const { subject1, subject2, subject3, subject4, subject5 } = grades;

    const totalGradePoints =
      gradeMapping[subject1] +
      gradeMapping[subject2] +
      gradeMapping[subject3] +
      gradeMapping[subject4] +
      gradeMapping[subject5];

    const totalSubjects = 5; // Assuming 5 subjects
    const calculatedCGPA = totalGradePoints / totalSubjects;

    setCGPA(calculatedCGPA.toFixed(2));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={calculateCGPA}
        >
          Calculate CGPA
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input fields for grades */}
        {Array.from({ length: 5 }, (_, index) => (
          <select
            key={index}
            name={`subject${index + 1}`}
            value={grades[`subject${index + 1}`]}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            required
          >
            <option value="">Select Grade for Subject {index + 1}</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            {/* Add more grade options if needed */}
          </select>
        ))}
      </div>

<Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  className="modal bg-white w-[70%] mx-auto mb-32 rounded-lg p-6"
  overlayClassName="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-75"
>
  <div className="modal-content">
    <h2 className="text-2xl font-bold mb-4">Calculated CGPA</h2>
    <p className="text-3xl font-bold">CGPA: {cgpa}</p>
    <button
      onClick={closeModal}
      className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Close
    </button>
  </div>
</Modal>

    </div>
  );
};

export default CGPACalculator;



