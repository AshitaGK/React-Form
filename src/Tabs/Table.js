import React from 'react'
// import styles from './styles'



// const Table = () => (
//   <div style={styles.container}>
//     <h1 style={styles.title}>ABOUT</h1> 
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
//   </div>
// )

// export default Table
function Table()  {


  const fields = [
    {
      id: '01',
      name: 'John Deo',
      email: 'john@gmail.com',
      phone: '202-555-0163',
      description1: 'Excellent',
      description2 : 'Good',
      description3: 'Good',
      description4: 'Fair'
    },
    {
      id: '02',
      name: 'Johnson Deo',
      email: 'johnson@gmail.com',
      phone: '202-235-0163',
      description1: 'Fair',
      description2 : 'Good',
      description3: 'Good',
      description4: 'Fair'
    },
    {
      id: '03',
      name: 'Pamila Deo',
      email: 'pam@gmail.com',
      phone: '456-555-0703',
      description1: 'Fair',
      description2 : 'Good',
      description3: 'Good',
      description4: 'Fair'
    },
    {
      id: '04',
      name: 'Jerry Springfield',
      email: 'jerryspringfield@gmail.com',
      phone: '987-345-5963',
      description1: 'Fair',
      description2 : 'Fair',
      description3: 'Bad',
      description4: 'Fair'
    },
  ]
  
   return <div
   style={{
    minHeight: "600px",
     padding: "60px",
     border: "1px solid #e5e5e5",
     
   }}
 >
   
   <table className="table table-bordered">
   <thead style={{backgroundColor:'#C4AFEE'}}>
       <tr>
            <th scope="col"> Bar</th>
           <th scope="col">Customer Name</th>
           <th scope="col">Email Id</th>
           <th scope="col">Phone Number</th>
           <th scope="col">Please rate the quality of the service you received from your host.</th>
           <th scope="col">Please rate the quality of your beverage.</th>
           <th scope="col">Was our restaurant clean?</th>
           <th scope="col">Please rate your overall dining experience.</th>
       </tr>
   </thead>
   <tbody>
   {fields.map((field) => (  
                               <tr key={field.id}>
                                 <td>Aromatic Bar</td>
                               <td>{field.name}</td>
                              <td>{field.email}</td>
                               <td>{field.phone}</td>
                              <td>{field.description1}</td>
                               <td>{field.description2}</td>
                               <td>{field.description3}</td>
                               <td>{field.description4}</td>
                              </tr>
   ))}
                            </tbody>
</table>
</div>
}

export default Table;