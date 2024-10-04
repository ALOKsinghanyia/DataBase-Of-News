const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EmployeeSchema = new Schema({
    employeeId: {
        type: Number,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        enum: ['Full-Time', 'Part-Time', 'Contract', 'Intern'],
        required: true
    },
    hireDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        default: null
    },
    jobTitle: {
        type: String,
        required: true
    },
    managerId: {
        type: Schema.Types.ObjectId, 
        ref: 'Employee',
        default: null
    },
    departmentId: {
        type: Schema.Types.ObjectId, 
        ref: 'Department',
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['Employee', 'Manager', 'Admin', 'HR','Team Lead','Software Engineer','Frontend Developer', 'Backend Developer ','Full-Stack Developer','DevOps Engineer'],
        required: true
    },
    monthlySalary: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Employee', EmployeeSchema);
