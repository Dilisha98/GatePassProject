import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import '../App.css';
import React, { useState, useRef} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Transition } from 'react-transition-group';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function New_Request() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [returnableYesChecked, setReturnableYesChecked] = useState(false);

  // this is for the retrinable radio button

  const handleYesRadioChange = () => {
    setSelectedDate(new Date());
    setReturnableYesChecked(true);
  };

  const handleNoRadioChange = () => {
    setSelectedDate(null);
    setReturnableYesChecked(false);
  };

  const handleDatePickerChange = (date) => {
    setSelectedDate(date);
  };

  // End Retutnable radio button js

   const [uploadedFileName, setUploadedFileName] = useState(null);
 const inputRef = useRef(null);

 
 

    const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleDisplayFileDetails = () => {
   inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
  };




  const [fields, setFields] = useState([
    { serviceNo: '', photo: '', SerialNo: '', ReturnabalNo: false, Description: '', Duet_Date: null },
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  const handleAddFields = () => {
    setFields([...fields, { serviceNo: '', photo: '', SerialNo: '', ReturnabalNo: false, Description: '', Duet_Date: null }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };



  const fadeStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1, transition: 'opacity 150ms ease-in-out' },
    exiting: { opacity: 1 },
    exited: { opacity: 0, transition: 'opacity 150ms ease-in-out' },
  };

  // This is If receiver Available yes or no

  const [showForm, setShowForm] = useState(false);

  const handleRadioReciverChange = (event) => {
   setShowForm(event.target.value === 'Yes');
 };


  return (
    <>
    {/*------------------- This is a Sender Details form-------------------*/}
    <div className='Welcome'>
        <h4>Welcome Admin</h4>
        <h7>Pages/ New Request</h7>
      </div>
        <Container className='Contain'>
        <div className='title'>Sender Details</div>
        <form action="#">
                <div class="user-details">
                    <div class="input-div">
                        <div>
                            <span class="details">Service No</span>
                            <input type="text" name="" class="input" placeholder="Enter Service No Here"/>
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Section </span>
                            <input type="text" name="" class="input" placeholder="Enter Section Here"/>
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Name</span>
                            <input type="text" name="" class="input" placeholder="Enter Name Here"/>
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Group</span>
                            <input type="text" name="" class="input" placeholder="Enter Group "/>
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Designation</span>
                            <input type="text" name="" class="input" placeholder="Enter Designation"/>
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Contact No</span>
                            <input type="text" name="" class="input" placeholder="Enter Contact No"/>
                        </div>
                    </div>
                    
                 </div>
                 
            </form>
        </Container>


      {/*------------------- This is a Item Details form-------------------*/}
      {fields.map((field, index) => (
      <Container key={index} className='Contain'>
        <div className='title'>Item Details</div>
        <form>
          
            
              <div className='user-details'>
                <div className='input-div'>
                  <div>
                    <span className='details'>Service No</span>
                    <input
                      type='text'
                      name='serviceNo'
                      className='input'
                      placeholder='Enter Service No Here'
                      value={field.serviceNo}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </div>
                </div>
                <div className='input-div'>
                  <div>
                    <span className='details'>photo</span>
                    <input
                      type='file'
                      name='photo'
                     // onChange={handleDisplayFileDetails}
                      className='input d-none'
                      placeholder='Enter Section Here'
                      value={field.photo}
                      onChange={(event) => handleChangeInput(index, event)}
                      ref={inputRef} 
                    />
                    <button onClick={handleUpload} className={`btn btn-outline-${ uploadedFileName ? "success" : "primary" }`}>
                        {uploadedFileName ? uploadedFileName : "Upload photo"}</button>
                  </div>
                </div>
                <div className='input-div'>
                  <div>
                    <span className='details'>Serial No</span>
                    <input
                      type='text'
                      name='SerialNo'
                      className='input'
                      placeholder='Enter SerialNo'
                      value={field.SerialNo}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </div>
                </div>
                <div className="Radio-div">
            <div>
              <span className="details ">Returnable</span>
              <div key="inline-radio" name="radio" className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="group1"
                  type="radio"
                  id="inline-radio-1"
                  checked={returnableYesChecked}
                  onChange={handleYesRadioChange}
                />
                <Form.Check
                  inline
                  label="No"
                  name="group1"
                  type="radio"
                  id="inline-radio-2"
                  checked={!returnableYesChecked}
                  onChange={handleNoRadioChange}
                />
              </div>
            </div>
          </div>
                <div className='input-div'>
                  <div>
                    <span className='details'>Description</span>
                    <textarea
                    style={{width:'100%'}}
                    id="subject"
                      type='text'
                      name='Description'
                      className='input'
                      placeholder='Enter Description Here'
                      value={field.designation}
                      onChange={(event) => handleChangeInput(index, event)}
                    ></textarea>
                  </div>
                </div>
                <div
            className="input-div"
            name="Date"
            style={{ opacity: returnableYesChecked ? 1 : 0.2 }}
          >
            <div>
              <span className="details">Due_Date</span>
              <DatePicker
                name="Due Date"
                selected={selectedDate}
                onChange={handleDatePickerChange}
                dateFormat="dd/MM/yyyy"
                className="input"
                placeholderText="Select due date"
                isClearable
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={15}
                disabled={!returnableYesChecked}
              />
            </div>
          </div>
                  
                
                </div>
                {index > 0 && (
                  <button type='button' className='btn btn-danger me-2'  onClick={() => handleRemoveFields(index)}>
                    Remove
                  </button>
                )}
                <button type='button' className='itmbtn btn btn-success'  onClick={handleAddFields}>
                  Add More Items
                </button>
          </form>
        </Container>
      ))}


      {/*------------------- This is a Out Location/ In Location-------------------*/}
      <Container className='LocationContain'>
        
        <form action="#">
          <div class="user-details mt-3 ">
            <div class="input-div">
              <div>
                <label for="serviceNo" className="details fw-bold mb-3 my-text">Out Location</label>
                <select id="serviceNo" name="serviceNo" className="FropDownForm" aria-label="Service No">
                  <option selected>--- Select Loction ---</option>
                  <option value="1">Colombo</option>
                  <option value="2">Kandy</option>
                  <option value="3">Kurunegala</option>
                </select>
              </div>
            </div>
            <div class="input-div">
              <div>
                <label for="section" className="details fw-bold mb-3 my-text">In Location</label>
                <select id="section" name="section" className="FropDownForm" aria-label="Section">
                  <option selected>--- Select Loction ---</option>
                  <option value="A">Colombo</option>
                  <option value="B">Kandy</option>
                  <option value="C">Kurunegala</option>
                </select>
              </div>
            </div>
          </div>
       </form>

        </Container>

                  {/*------------------- If Reciver Available -------------------*/}
        <Container className=''>
        
        <form action="#" className='ReciverContain ml-2'>
          <div className="user-details">
            <div className="row">
              <div className="">
                <span className="Receviertitle">If Receiver Available</span>
              </div>
              <div className='radioselect'>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Yes"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value="Yes"
                    onChange={handleRadioReciverChange}
                    />
                    <Form.Check
                      inline
                      label="No"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      value="No"
                    onChange={handleRadioReciverChange}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </form>

   </Container>
        {!showForm && (<Container className='btnContain'>
        <button className='btnsubmit'>Submit</button>
        </Container>
                  )}

        <Transition in={showForm} timeout={300}>
        {(state) => (
          <div className='form-container' style={{ ...fadeStyles[state] }}>
            <Container className='Contain'>
              <div className='title'>Sender Details</div>
              <form action="#">
                <div className="user-details">
                  <div className="input-div">
                    <div>
                      <span className="details">Name</span>
                      <input type="text" name="" className="input" placeholder="Enter Service No Here"/>
                    </div>
                  </div>
                  <div className="input-div">
                    <div>
                      <span className="details">Group</span>
                      <input type="text" name="" className="input" placeholder="Enter Section Here"/>
                    </div>
                  </div>
                  <div className="input-div">
                    <div>
                      <span className="details">Service No</span>
                      <input type="text" name="" className="input" placeholder="Enter Section Here"/>
                    </div>
                  </div>
                  <div className="input-div">
                    <div>
                      <span className="details">Contact No</span>
                      <input type="text" name="" className="input" placeholder="Enter Section Here"/>
                    </div>
                  </div>
                </div>
              </form>
            </Container>
            {showForm && (
                <Container className='btnContain'>
                <button className='btnsubmit'>Submit</button>
                </Container>
              )}
          </div>
        )}
      </Transition>

        
    </>
  );
}


   {/*  <Container className='Contain'>
        <div className='title'>Item Details</div>
        <form action="#">
          
          <div className="user-details">
          <div class="input-div">
                        <div>
                            <span className="details">Name</span>
                            <input type="text" name="Name" class="input" placeholder="Enter Name"/>
                        </div>
          </div>
          <div class="input-div">
          <div>
                <label className="details">Photo</label>
                <input name="photo" ref={inputRef} onChange={handleDisplayFileDetails}className="d-none"type="file"/>
                <button onClick={handleUpload} className={`btn btn-outline-${ uploadedFileName ? "success" : "primary" }`}>
                {uploadedFileName ? uploadedFileName : "Upload photo"}</button>
       </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Serial No</span>
                            <input type="text" name="Serial No" class="input" placeholder="Enter Serial No Here"/>
                        </div>
                    </div>
            <div className="Radio-div">
              <div>
                <span className="details">Returnable</span>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} name="radio" className="mb-3">
                    <Form.Check
                      inline
                      label="Yes"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      ref={returnableYesRef}
                      
                    />
                    <Form.Check
                      inline
                      label="No"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={handleNoRadioChange}
                      defaultChecked={true}
                      ref={noRef}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="input-div">
              <div>
                <span className="details">Description</span>
                <textarea id="subject" name="Description" placeholder="Write something.." className='Descrip'></textarea>
              </div>
            </div>
            <div className="input-div" name="Date" ref={dueDateFieldRef} style={{ opacity: '0.2' }}>
              <div>
                <span className="details">Due Date</span>
                <DatePicker
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="input"
                  placeholderText="Select due date"
                  

                />
              </div>
            </div>
          </div>
          <button className='btn btn-success' style={{ marginLeft:'80%'}}>  Add More Item  <FontAwesomeIcon icon={faPlus} />   </button>
        </form>
        
                </Container> */}


{/* <Container className='Contain'>
        <div className='title'>Sender Details</div>
        <form action="#">
                <div class="user-details">
                    <div class="input-div">
                        <div>
                            <span class="details">Service No</span>
                            <input type="text" name="" class="input" placeholder="Enter Service No Here"/>
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Section </span>
                            <input type="text" name="" class="input" placeholder="Enter Section Here"/>
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Name</span>
                            <input type="text" name="" class="input" placeholder="Enter Name Here"/>
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Group</span>
                            <input type="text" name="" class="input" placeholder="Enter Group "/>
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Designation</span>
                            <input type="text" name="" class="input" placeholder="Enter Designation"/>
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">Contact No</span>
                            <input type="text" name="" class="input" placeholder="Enter Contact No"/>
                        </div>
                    </div>
                    
                 </div>
                 
            </form>
        </Container> */}