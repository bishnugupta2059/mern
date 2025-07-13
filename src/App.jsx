import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "./Modal";
import Card from "./components/Card";
import SimpleForm from "./form/SimpleForm";
import LoginForm from "./form/LoginForm";
import AddProductForm from "./form/addForm";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal ? (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircle
                onClick={() => setOpenModal(false)}
                className="text-red-500 text-xl cursor-pointer"
              />
            </div>
            <AddProductForm/>

            {/* <SimpleForm/> */}
            {/* <LoginForm/> */}
          </div>
        </Modal>
      ) : null}

      <div className="border-b-2 border-black">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-red-500 rounded-md p-2 m-4 text-white bold"
        >
          Add new product
        </button>
      </div>
      <Card />
    </div>
  );
}

export default App;