const express = require("express");
const { addOrUpdateReservation, getReservations, updateResurvation, getTestByUser, deleteAppoinment, mostSellResurvation, getUserDashBoardCount } = require("../controler/reservations");
const { checkIsAdmin, addOrUpdateUser, allUsers, creatNewUser, loginUser } = require("../controler/users");
const { addNewTest, allTests, updateTest, testDetails, deleteTest } = require("../controler/tests");
const { getAdminDash, verifyAdmin } = require("../controler/admin");
const { prevDateList } = require("../controler/prevDate");
const { addDoctor, getAllDoctorrs, getActiveDoctors, doctorDetails } = require("../controler/doctor");
const { sendMail } = require("../controler/email");
const router = express.Router();

// add reservation
router.put("/addReservation", addOrUpdateReservation);

// chech is admin
router.get("/isAdmin/:email", checkIsAdmin);

// add or update user
router.put('/user', addOrUpdateUser);

router.post('/user', creatNewUser);

router.post('/login', loginUser);

// get all users
router.get('/users', verifyAdmin, allUsers);

// add new tests
router.post('/addTest', verifyAdmin, addNewTest);

//get all tests
router.get('/allTest', allTests);

// update test
router.put('/updateTest', verifyAdmin, updateTest);

// get specifiq test details
router.get('/test/:id', testDetails);

//delete a test
router.delete('/deleteTest/:id', deleteTest);

//get all Reservation
router.get('/reservation', verifyAdmin, getReservations);

// update specifiq reservation
router.put('/updateReservation', updateResurvation);

// get user wise appoinments
router.get('/appoinments/:email', getTestByUser);

// delete a appoinment
router.delete('/delAppoinment/:id', deleteAppoinment);

// get most frequent collection
router.get('/mostFrequent', mostSellResurvation);

// get usr dashboard collection
router.get('/userDash/:email', getUserDashBoardCount);

// admin dashboard data
router.get('/adminDash/:prevDays', verifyAdmin, prevDateList, getAdminDash);

// add doctor
router.post('/doctor', verifyAdmin, addDoctor);

// get all doctors
router.get('/doctors', getAllDoctorrs);

// get all doctors
router.get('/doctors/active', getActiveDoctors);

// get doctor details
router.get('/doctors/:id', doctorDetails);

router.post('/email', sendMail)


module.exports = router;