Student=require('./StudentModel');

exports.index=function(request,response)
{
    Student.get((error,students)=>
    {
        if(error)
        {
            response.json({
                status: "error",
                message: err
            });
            return;
        }
        response.json({
            status: "success",
            message:"Students Retrived",
            data: students
        });
    });
}


exports.new=function(request,response)
{
    var StudentObject=new Student();
      StudentObject.rollNumber=request.body.rollNumber;
      StudentObject.name=request.body.name;
      StudentObject.gender=request.body.gender;
      StudentObject.phone_number=request.body.phone_number;
      StudentObject.clasz=request.body.clasz;

      StudentObject.save((error)=>{
           
        if(error) 
        {
            response.json(error);
            return;
        }
        response.json({
           
            message:"New Student Addes",
            data:StudentObject

        });
      });
}


exports.view=(request,response)=>{

   Student.findById(request.params.id,(error,student)=>{

    if(error)
    {
        response.json({
            message:"Student.....Error ",
            
        })
        return;
        
    }
      response.json({
          message:"Student.....",
          data:student
      })
   });

};




exports.update = function (request, response) 
{
    Student.findById(request.params.id, function (err, student) {
    if (err)
        res.send(err);
    console.log(student);
    console.log(request.params.rollNumber);
    student.name = request.body.name;
    student.gender = request.body.gender;
    student.phone_number = request.body.phone_number;
    student.clasz = request.body.clasz;
    student.save(function (err) {
        if (err)
        {
            response.json(err);
            return;
        }

        response.json({
            message: 'Student Info updated',
            data: Student
        });
    });
});
};

exports.delete = function (request, response) {
Student.remove({
     _id:request.params.id
}, function (err, student) {
    if (err)
    {
        response.send("unable to delete");
        return;
    }
        response.json({
        status: "success",
        message: 'Student deleted'
    });
});
};