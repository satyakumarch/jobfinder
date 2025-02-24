import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    auth0Id:{
        type:String,
        required:true,
        unique:true,
    },
    appliedjobs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"job",
        }
    ],
    savedjobs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"job",
        }
    ],
    role:{
        type:String,
        enum:["jobseeker","recruiter"],
        default:"jobseeker",
    },
    resume:{
        type:String,
    },
    ProfilePicture:{
        type:String,
    },
    bio:{
        type:String,
        default:"NO provided biodata"
    },
    profession:{
        type:String,
        default:"No profession provided"
    },
},
{timestamps:true}
);

const User =mongoose.model("user",userSchema);

export default User;
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   auth0Id: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   name: { type: String, required: true },
//   role: { type: String, default: "jobseeker" },
//   profilePicture: { type: String },
//   appliedjobs: { type: Array, default: [] },
//   savedjobs: { type: Array, default: [] },
//   bio: { type: String, default: "NO provided biodata" },
//   profession: { type: String, default: "No profession provided" },
// }, { timestamps: true });

// const User = mongoose.model("User", userSchema);

// export default User;