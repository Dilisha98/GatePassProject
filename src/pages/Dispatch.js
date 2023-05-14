import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Navigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Disptach.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Dispatch = () => {
  const [goToReceiptDetails, setGoToReceiptDetails] = React.useState(false);

  const myData = [
    { refNo: '3423455', name: 'Dasun Shanaka', mobile_no: '071 02 56 930', in_location: 'Colombo', out_location: 'Kurunegala', date_time: '2023-02-22 16:30:34' },
    { refNo: '3423455', name: 'Nimal Kumara', mobile_no: '071 02 56 930', in_location: 'Colombo', out_location: 'Kurunegala', date_time: '2023-02-22 16:30:34' },
    { refNo: '3423455', name: 'Amara Disanayake', mobile_no: '071 02 56 930', in_location: 'Colombo', out_location: 'Kurunegala', date_time: '2023-02-22 16:30:34' },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };
  
  return (
    <div className='MyRequest-Container'>
      <div className="MyRequest-Container_row1">
        <div className='WelcomeMyRequest' >
        <h2 className='WelcomeAdmin'>Welcome Admin</h2>
        <p>Pages/Dispatch </p>
      </div></div>

      <div className="MyRequest-Container_row2">
    <Container className='Contain'>
    <div className='title'>Dispatch</div>
    <form action="#">
      <div className='dispatch_details' style={{display:'grid'}}>
        <div className='dipatchrow1'>
              <InputGroup className="seacrchbox">
                <Form.Control
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              
              </InputGroup>

        </div>
        <div className='dispatchrow2'>
        <div className="DispatchDropDown">
      <select className=" form-control" defaultValue=""  placeholder="Select Location">
        <option value="" disabled hidden>Select Location</option>
        <option>Colombo</option>
        <option>Kurnegala</option>
        <option>Kandy</option>
        <option>Galle</option>
      </select>
    </div>

        </div>
        <div className='dispatchrow3'>
      
        <div>
        <InputGroup className="DispatchDatePicker">
        <div className="calendar-icon">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            isClearable
            showYearDropdown
            scrollableYearDropdown
            className='dispatchinputdate'
            yearDropdownItemNumber={15}
          />
        </div>
      
      <InputGroup.Text id="basic-addon2">
        <FontAwesomeIcon icon={faCalendarAlt} />
      </InputGroup.Text>
    </InputGroup>
      
    </div>
          
        </div>
        
          
      </div>
      <table>
    <thead>
          <tr>
            <th>Ref.No</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>In Location</th>
            <th>Out Location</th>
            <th>Created Date Time</th>
            <th>Full details</th>
          </tr>
    </thead>

     <tbody>
        {myData.map((item) => (
          <tr key={item.id}>
            <td>{item.refNo}</td>
            <td>{item.name}</td>
            <td>{item.mobile_no}</td>
            <td>{item.in_location}</td>
            <td>{item.out_location}</td>
            <td>{item.date_time}</td>
            <td><button >View</button></td>
          </tr>
        ))}
    </tbody>
   </table>
        </form>
    </Container>
    </div>
    </div>


    
  )
};

export default Dispatch;