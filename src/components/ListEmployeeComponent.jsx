import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees: []
        }
        
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
    }
    viewEmployee(id){
        this.props.history.push(`/React-Frontend-CRUD/view-employee/${id}`);
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then((res)=>{
            window.location.reload()});
    }
    editEmployee(id){
        this.props.history.push(`/React-Frontend-CRUD/update-employee/${id}`);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => { 
        this.setState({employees: res.data});
        });
    }
    addEmployee(){
        this.props.history.push('/React-Frontend-CRUD/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>

                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button onClick={()=> this.editEmployee(employee.id)} className="btn btn-success">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=> this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=> this.viewEmployee(employee.id)} className="btn btn-info">View</button>

                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;