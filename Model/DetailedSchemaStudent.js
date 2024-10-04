const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    studentId: {                  
        type: String,
        required: true,
        unique: true
    },
    sId: {                         
        type: String,
        required: true,
        unique: true
    },
    courseEnrolled: {              
        type: [String],           
        required: true
    },
    status: {                    
        type: String,
        enum: ['Active', 'Graduated', 'Suspended', 'Dropped'],
        required: true
    },
    departmentId: {               
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    batches: {                     
        type: [String],            
        required: true
    }
}, { 
    timestamps: true               
});


module.exports = mongoose.model('Student', StudentSchema);
