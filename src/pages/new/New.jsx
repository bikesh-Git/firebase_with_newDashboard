import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await setDoc(doc(db, "user", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://img.icons8.com/ios-filled/100/000000/no-camera--v1.png"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((el) => (
                <div className="formInput" key={el.id}>
                  <label>{el.label}</label>
                  <input
                    id={el.id}
                    type={el.type}
                    placeholder={el.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}

              {/* <div className='formInput'>
            <label>username</label>
            <input type="text" placeholder="bikesh@gmal.com" />
          </div>
          <div className='formInput'>
            <label>fullNama</label>
            <input type="text" placeholder="bikesh verma" />
          </div>
          <div className='formInput'>
            <label>email</label>
            <input type="email" placeholder="binnu@gmail.com" />
          </div>
          <div className='formInput'>
            <label>phone no</label>
            <input type="text" placeholder="312 3123 1239" />
          </div>
          <div className='formInput'>
            <label>password</label>
            <input type="text" placeholder="Password" />
          </div>
          <div className='formInput'>
            <label>address</label>
            <input type="text" placeholder="C6 flat 28 fatima nagar" />
          </div>
          <div className='formInput'>
            <label>contry</label>
            <input type="text" placeholder="India" />
          </div> */}
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;