import React from "react"; 
import { jsPDF } from "jspdf"; 
const ViewCGPA = ({ studentData }) => { 
const handleDownloadPDF = () => { 
if (studentData) { 
const doc = new jsPDF(); 
doc.text("Student Details", 20, 20); 
doc.text(`Student Name: ${studentData.studentName}`, 20, 30); 
doc.text(`Roll Number: ${studentData.rollNumber}`, 20, 40); 
doc.text(`CGPA: ${studentData.cgpa}`, 20, 50); 
doc.save("student-details.pdf"); 
} else { 
alert("No student data available to download."); 
} }; 
return ( 
<div> 
<h2>View Student CGPA</h2> 
{studentData ? ( 
<div> 
<p><strong>Student Name:</strong> {studentData.studentName}</p> 
<p><strong>Roll Number:</strong> {studentData.rollNumber}</p> 
<p><strong>CGPA:</strong> {studentData.cgpa}</p> 
<button onClick={handleDownloadPDF} style={{ marginTop: "20px" }}> 
Download PDF 
</button> 
</div> 
) : ( 
<p>No student data available. Please add CGPA first.</p> 
)} 
</div> 
); 
}; 
export default ViewCGPA; 
App.jsx 
import React, { useState } from "react"; 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
import AddCGPA from "./components/AddCGPA"; 
import ViewCGPA from "./components/ViewCGPA"; 
const App = () => { 
const [studentData, setStudentData] = useState(null); // State for storing student details 
return ( <Router> 
<div 
style={{ 
display: "flex", 
flexDirection: "column", 
alignItems: "center", 
justifyContent: "center", 
height: "100vh", 
textAlign: "center", 
backgroundColor: "#f9f9f9", 
}} 
> 
<nav style={{ marginBottom: "20px" }}> 
<ul 
style={{ 
listStyleType: "none", 
padding: 0, 
display: "flex", 
gap: "20px", 
}} 
> 
<li> 
<Link 
to="/" 
style={{ 
textDecoration: "none", 
color: "#007BFF", 
fontWeight: "bold", 
}} > 
Add CGPA 
</Link> 
</li> 
<li> 
<Link 
to="/view-cgpa" 
style={{ 
textDecoration: "none", 
color: "#007BFF", 
fontWeight: "bold", 
}} 
> 
View CGPA 
</Link> 
</li> 
</ul> 
</nav> 
<hr 
style={{ 
width: "100%", 
maxWidth: "500px", 
border: "1px solid #ccc", 
margin: "10px 0", 
}} 
/> 
<div style={{ width: "100%", maxWidth: "500px" }}> 
<Routes> 
<Route path="/" 
element={<AddCGPA setStudentData={setStudentData} />} 
/> 
<Route 
path="/view-cgpa" 
element={<ViewCGPA studentData={studentData} />} 
/> 
</Routes> 
</div> 
</div> 
</Router> 
); 
}; 
export default App; 
